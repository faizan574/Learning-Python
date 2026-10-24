#!/usr/bin/env python3
"""Render a lesson markdown file into Gmail-friendly HTML.

Usage: render_email.py <lesson.md> <out.html>

Email clients can't render pipe tables, collapsible <details>, or LaTeX/MathJax
math. This converts tables (with inline styles), flattens <details>, and turns
any $...$ / $$...$$ LaTeX into readable plain-text formulas so the technical
lessons are legible in Gmail.
"""

import html
import re
import sys

import markdown

TEX_REPLACEMENTS = [
    (r"\\left", ""), (r"\\right", ""),
    (r"\\quad", "  "), (r"\\qquad", "   "),
    (r"\\,", " "), (r"\\;", " "), (r"\\!", ""), (r"\\:", " "),
    (r"\\Rightarrow", " ⇒ "), (r"\\rightarrow", " → "), (r"\\to", " → "),
    (r"\\leftrightarrow", " ↔ "),
    (r"\\times", "×"), (r"\\cdot", "·"), (r"\\div", "÷"),
    (r"\\approx", "≈"), (r"\\neq", "≠"), (r"\\leq", "≤"), (r"\\geq", "≥"),
    (r"\\pm", "±"), (r"\\propto", "∝"), (r"\\infty", "∞"), (r"\\angle", "∠"),
    (r"\\alpha", "α"), (r"\\beta", "β"), (r"\\gamma", "γ"), (r"\\delta", "δ"),
    (r"\\Delta", "Δ"), (r"\\theta", "θ"), (r"\\phi", "φ"), (r"\\varphi", "φ"),
    (r"\\omega", "ω"), (r"\\Omega", "Ω"), (r"\\pi", "π"), (r"\\mu", "µ"),
    (r"\\lambda", "λ"), (r"\\rho", "ρ"), (r"\\sigma", "σ"), (r"\\tau", "τ"),
    (r"\\eta", "η"), (r"\\psi", "ψ"), (r"\\epsilon", "ε"),
    (r"\\sin", "sin"), (r"\\cos", "cos"), (r"\\tan", "tan"),
    (r"\\ln", "ln"), (r"\\log", "log"), (r"\\ldots", "…"), (r"\\dots", "…"),
]

SUPERS = str.maketrans("0123456789+-n²", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ²")


def _strip_braced(tex, macro):
    """Replace every \\macro{X} with X (one brace level, repeated)."""
    pat = re.compile(r"\\" + macro + r"\{")
    while True:
        m = pat.search(tex)
        if not m:
            return tex
        i = m.end()
        depth = 1
        j = i
        while j < len(tex) and depth:
            if tex[j] == "{":
                depth += 1
            elif tex[j] == "}":
                depth -= 1
            j += 1
        inner = tex[i:j - 1]
        tex = tex[:m.start()] + inner + tex[j:]


def _frac(tex):
    """Replace \\frac{A}{B} with (A)/(B), innermost first."""
    pat = re.compile(r"\\frac\{")
    while True:
        m = pat.search(tex)
        if not m:
            return tex
        i = m.end()
        depth, j = 1, i
        while j < len(tex) and depth:
            depth += (tex[j] == "{") - (tex[j] == "}")
            j += 1
        num = tex[i:j - 1]
        # denominator brace
        while j < len(tex) and tex[j] != "{":
            j += 1
        k = j + 1
        depth = 1
        while k < len(tex) and depth:
            depth += (tex[k] == "{") - (tex[k] == "}")
            k += 1
        den = tex[j + 1:k - 1]
        num = num.strip() or "?"
        den = den.strip() or "?"
        nn = num if num.isalnum() else f"({num})"
        dd = den if den.isalnum() else f"({den})"
        tex = tex[:m.start()] + f"{nn}/{dd}" + tex[k:]


def latex_to_text(tex):
    tex = _strip_braced(tex, "boxed")
    tex = _strip_braced(tex, "text")
    tex = _strip_braced(tex, "mathrm")
    tex = _strip_braced(tex, "operatorname")
    # sqrt{X} -> √(X)
    while r"\sqrt{" in tex:
        m = re.search(r"\\sqrt\{", tex)
        i = m.end()
        depth, j = 1, i
        while j < len(tex) and depth:
            depth += (tex[j] == "{") - (tex[j] == "}")
            j += 1
        tex = tex[:m.start()] + "√(" + tex[i:j - 1] + ")" + tex[j:]
    tex = _frac(tex)
    for a, b in TEX_REPLACEMENTS:
        tex = re.sub(a, b, tex)
    # superscripts: ^{...} and ^x
    tex = re.sub(r"\^\{([^}]*)\}", lambda m: m.group(1).translate(SUPERS), tex)
    tex = re.sub(r"\^(\w)", lambda m: m.group(1).translate(SUPERS), tex)
    # subscripts: _{...} -> _(...) ; _x -> _x
    tex = re.sub(r"_\{([^}]*)\}", r"_\1", tex)
    tex = tex.replace("{", "").replace("}", "")
    tex = tex.replace("\\", "")
    return re.sub(r"[ \t]+", " ", tex).strip()


def convert_math(md):
    holds = []

    def block(m):
        txt = html.escape(latex_to_text(m.group(1)))
        holds.append(
            '<div style="font-family:Consolas,monospace;background:#f3f2fa;'
            "border-left:3px solid #7c5cbf;padding:8px 14px;margin:12px 0;"
            'border-radius:4px;font-size:15px;overflow-x:auto">' + txt + "</div>"
        )
        return f"\x00MATH{len(holds)-1}\x00"

    def inline(m):
        txt = html.escape(latex_to_text(m.group(1)))
        holds.append(
            '<code style="background:#eef0f3;padding:1px 5px;border-radius:4px">'
            + txt + "</code>"
        )
        return f"\x00MATH{len(holds)-1}\x00"

    md = re.sub(r"\$\$(.+?)\$\$", block, md, flags=re.S)
    md = re.sub(r"(?<!\$)\$(?!\$)(.+?)(?<!\$)\$(?!\$)", inline, md, flags=re.S)
    return md, holds


src = open(sys.argv[1], encoding="utf-8").read()

# Email clients can't collapse <details>; show the answer key under a divider.
src = re.sub(r"<details>\s*<summary>(.*?)</summary>", r"\n\n---\n\n**\1**\n", src)
src = src.replace("</details>", "")

src, math_holds = convert_math(src)

body = markdown.markdown(src, extensions=["tables", "fenced_code", "sane_lists"])

for i, hh in enumerate(math_holds):
    body = body.replace(f"\x00MATH{i}\x00", hh)

body = body.replace(
    "<table>",
    '<table style="border-collapse:collapse;margin:14px 0;width:auto">',
)
body = body.replace(
    "<th>",
    '<th style="border:1px solid #b8bcc4;padding:6px 12px;background:#eef0f5;text-align:left">',
)
body = body.replace(
    "<td>",
    '<td style="border:1px solid #b8bcc4;padding:6px 12px;vertical-align:top">',
)
body = body.replace(
    "<blockquote>",
    '<blockquote style="border-left:4px solid #7c5cbf;background:#f7f4fc;margin:14px 0;padding:10px 16px;border-radius:0 6px 6px 0">',
)
body = body.replace(
    "<code>",
    '<code style="background:#eef0f3;padding:1px 6px;border-radius:4px;font-size:90%">',
)
body = body.replace(
    "<hr />",
    '<hr style="border:none;border-top:1px solid #ccc;margin:22px 0" />',
)

html_out = (
    '<html><body style="font-family:Segoe UI,Roboto,Arial,sans-serif;'
    "font-size:15px;line-height:1.55;color:#222;max-width:780px;"
    'margin:0 auto;padding:14px">' + body + "</body></html>"
)
open(sys.argv[2], "w", encoding="utf-8").write(html_out)
print(f"rendered {sys.argv[1]} -> {sys.argv[2]} ({len(html_out)} bytes)")

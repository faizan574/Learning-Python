#!/usr/bin/env python3
"""TGPSC Daily Prep — generates the day's templatized lesson.

Every day picks one small topic from each of the four subjects, and renders
a lesson in the fixed template:

    Let's learn about <topic>  ->  explanation with examples  ->  a test.

Topics rotate in order; when a subject's list is exhausted the cycle restarts,
so adding new topics to the JSON files in data/ automatically extends the plan.

Usage:
    python generator.py                  # today's lesson to stdout
    python generator.py --day 5          # a specific day number (1-based)
    python generator.py --date 2026-08-01
    python generator.py --out lesson.md --title-out title.txt
"""

import argparse
import datetime
import json
import pathlib

DATA_DIR = pathlib.Path(__file__).resolve().parent / "data"

# Day 1 of the study plan.
START_DATE = datetime.date(2026, 7, 20)

# (data file stem, display title) — one topic from each, every day.
SUBJECTS = [
    ("polity", "Indian Constitution & Polity"),
    ("telangana_schemes", "Telangana Schemes & Important Incidents"),
    ("telangana_history", "Telangana History"),
    ("national_movement", "Indian National Movement"),
    ("telangana_geography", "Telangana Geography (with Maps)"),
]

# Maps referenced by lessons live in tgpsc-prep/maps/. Raw URLs point at the
# default branch, so they render in GitHub issues once this folder is on main.
MAPS_BASE_URL = (
    "https://raw.githubusercontent.com/faizan574/Learning-Python/main/tgpsc-prep/maps"
)

OPTION_LETTERS = "ABCD"


def load_subject(stem):
    return json.loads((DATA_DIR / f"{stem}.json").read_text(encoding="utf-8"))


def day_number(for_date):
    return max(1, (for_date - START_DATE).days + 1)


def render_test(test):
    lines = ["#### 📝 Today's Test", ""]
    for i, q in enumerate(test, 1):
        lines.append(f"**Q{i}. {q['q']}**")
        for letter, option in zip(OPTION_LETTERS, q["options"]):
            lines.append(f"- {letter}) {option}")
        lines.append("")
    lines.append("<details><summary><b>🔑 Answer Key (click to reveal)</b></summary>")
    lines.append("")
    for i, q in enumerate(test, 1):
        lines.append(f"**Q{i}: {q['answer']}** — {q['why']}")
        lines.append("")
    lines.append("</details>")
    return "\n".join(lines)


def render_subject(number, subject_title, topic):
    parts = [
        f"## 📘 Subject {number}: {subject_title}",
        "",
        f"### Let's learn about **{topic['title']}**",
        "",
        topic["intro"],
        "",
    ]
    if topic.get("map"):
        caption = topic.get("map_caption", topic["title"])
        parts += [
            f"![{caption}]({MAPS_BASE_URL}/{topic['map']})",
            f"*🗺️ {caption}*",
            "",
        ]
    parts += [
        topic["explanation"],
        "",
        f"**💡 Example:** {topic['example']}",
        "",
        render_test(topic["test"]),
    ]
    return "\n".join(parts)


def render_lesson(for_date):
    day = day_number(for_date)
    sections = []
    for number, (stem, subject_title) in enumerate(SUBJECTS, 1):
        topics = load_subject(stem)
        topic = topics[(day - 1) % len(topics)]
        sections.append(render_subject(number, subject_title, topic))

    header = (
        f"# 📚 TGPSC Daily Prep — Day {day} ({for_date.isoformat()})\n\n"
        "One small piece of each subject, every day. Read the explanation, "
        "then attempt the test **before** opening the answer key.\n\n"
        "> ⚠️ Scheme figures and current-affairs numbers change — always "
        "cross-check the latest official notifications before the exam.\n"
    )
    divider = "\n\n---\n\n"
    footer = (
        "\n\n---\n\n"
        "✅ **Done for today?** Note your test score and revise yesterday's "
        "wrong answers tomorrow. All the best for TGPSC! 💪"
    )
    return header + divider + divider.join(sections) + footer


def lesson_title(for_date):
    return f"📚 TGPSC Daily Prep — Day {day_number(for_date)} ({for_date.isoformat()})"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--date", help="Lesson date as YYYY-MM-DD (default: today)")
    parser.add_argument("--day", type=int, help="Lesson day number (1-based); overrides --date")
    parser.add_argument("--out", help="Write the lesson markdown to this file")
    parser.add_argument("--title-out", help="Write the lesson title to this file")
    args = parser.parse_args()

    if args.day is not None:
        for_date = START_DATE + datetime.timedelta(days=args.day - 1)
    elif args.date:
        for_date = datetime.date.fromisoformat(args.date)
    else:
        for_date = datetime.date.today()

    lesson = render_lesson(for_date)
    if args.out:
        pathlib.Path(args.out).write_text(lesson, encoding="utf-8")
    else:
        print(lesson)
    if args.title_out:
        pathlib.Path(args.title_out).write_text(lesson_title(for_date), encoding="utf-8")


if __name__ == "__main__":
    main()

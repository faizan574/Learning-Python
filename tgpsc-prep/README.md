# 📚 TGPSC Daily Prep Notifications

A templatized daily study product for **TGPSC (Telangana Public Service Commission)** preparation.
Every day it produces one small lesson covering **four subjects**, each in the same fixed template:

> **Let's learn about `<topic>`** → explanation with examples → **a test** (5 MCQs + answer key)

## The four subjects

| # | Subject | Data file |
|---|---------|-----------|
| 1 | Indian Constitution & Polity (e.g., Articles 1–5, Fundamental Rights, Parliament) | `data/polity.json` |
| 2 | Telangana Schemes of the Congress govt & important incidents (Mahalakshmi, SIR form, caste survey…) | `data/telangana_schemes.json` |
| 3 | Telangana History (Satavahanas → Kakatiyas → Nizams → statehood movement) | `data/telangana_history.json` |
| 4 | Indian National Movement (1857 → INC → Gandhi era → 1947) | `data/national_movement.json` |
| 5 | Telangana Geography **with maps** — geology + cultural references annotated on the map itself (Mahabubnagar area-focus model) | `data/telangana_geography.json` |

Topics rotate one per subject per day, in order. When a subject's list runs out, the cycle
restarts from topic 1 — so it doubles as revision.

## How you get notified

Three pieces work together (all require this folder to be **merged to `main`**):

1. A **Claude Routine** ("TGPSC Daily Fresh Lesson") runs **every day at ~6:30 AM IST**, writes a
   brand-new lesson in the template above (reading `lessons/` on main so topics never repeat),
   commits it as `lessons/day-<N>.md` and pushes.
2. The push triggers **`.github/workflows/tgpsc-post-lesson.yml`**, which opens a **GitHub
   issue** with the lesson — GitHub's email / mobile-app notification is your daily prep alert —
   and archives the lesson file to `main` so the next Routine run sees what's been covered.
3. **`.github/workflows/tgpsc-daily.yml`** is the **safety net**: at 8:30 AM IST it checks
   whether today's lesson issue exists, and if not, posts one from the pre-authored topic bank
   in `data/` so a day is never missed. It can also be run manually from the Actions tab.

## Run it locally

```bash
python tgpsc-prep/generator.py                 # today's lesson
python tgpsc-prep/generator.py --day 3         # lesson for day 3 of the plan
python tgpsc-prep/generator.py --date 2026-08-01
python tgpsc-prep/generator.py --out lesson.md # save to a file
```

No dependencies — pure Python standard library.

## 📧 Direct email delivery (optional)

Besides GitHub's own notification email, both workflows can send the **full lesson straight to
your Gmail inbox**. This activates automatically once two repository secrets exist
(Repo → Settings → Secrets and variables → Actions → New repository secret):

| Secret name | Value |
|-------------|-------|
| `GMAIL_ADDRESS` | Your Gmail address (used as both sender and recipient) |
| `GMAIL_APP_PASSWORD` | A Gmail **App Password** (16 characters) — create one at Google Account → Security → 2-Step Verification → App passwords (2-Step Verification must be ON) |

Never put the app password itself in any file — only in the repository secret. If the secrets
are absent the email step skips silently and everything else still works.

## 🗺️ Maps

Geography lessons embed schematic SVG maps from `maps/` that annotate **geology and cultural
references directly on the map** — e.g. `mahabubnagar.svg` shows the Archean granite plains and
Cuddapah-rock Nallamala alongside Alampur Jogulamba, Gadwal sarees and Pillalamarri, all in one
picture. Current maps:

- `telangana_regions.svg` — state overview: regions, rivers, one cultural landmark per region
- `telangana_rivers.svg` — Godavari & Krishna with confluences, projects and bank temples
- `mahabubnagar.svg` — the "area focus" model: one district's geology + culture in depth

Maps are embedded in issues via raw GitHub URLs pointing at `main`, so **merge this folder to
`main` for maps to render** in the daily issues. To add a new area-focus map (say Warangal),
copy the Mahabubnagar SVG's structure: shaded geology zones + purple cultural sites + blue
river landmarks, and add a matching topic in `data/telangana_geography.json`.

## Adding more topics

Open the subject's JSON file in `data/` and append an object with this shape:

```json
{
  "title": "Topic name",
  "intro": "Let's-learn-about style opening line.",
  "explanation": "Markdown bullets explaining the topic.",
  "example": "One concrete example.",
  "test": [
    { "q": "Question?", "options": ["opt A", "opt B", "opt C", "opt D"],
      "answer": "B", "why": "One-line reason." }
  ]
}
```

The rotation picks it up automatically — no code changes needed.

## ⚠️ Accuracy note

Scheme amounts, beneficiary counts and current-affairs details (Subject 2 especially) change
frequently. Always cross-check with the latest official Telangana government / ECI notifications
before the exam.

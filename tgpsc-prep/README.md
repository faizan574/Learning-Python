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

Topics rotate one per subject per day, in order. When a subject's list runs out, the cycle
restarts from topic 1 — so it doubles as revision.

## How you get notified

A **Claude Routine** ("TGPSC Daily Fresh Lesson") runs **every day at ~6:30 AM IST**, writes a
brand-new lesson in the template above (checking previous lesson issues so topics never repeat),
and opens a **GitHub issue** in this repository. GitHub then notifies you by email / mobile app —
that issue *is* your daily prep notification. The Routine also sends a push/email notification
when it completes.

The GitHub Actions workflow `.github/workflows/tgpsc-daily.yml` is a **manual fallback**: it posts
a lesson from the pre-authored topic bank in `data/`. Trigger it from the Actions tab
("Run workflow") if you ever want an extra lesson on demand. It runs from the default branch, so
merge this folder to `main` to make it available.

## Run it locally

```bash
python tgpsc-prep/generator.py                 # today's lesson
python tgpsc-prep/generator.py --day 3         # lesson for day 3 of the plan
python tgpsc-prep/generator.py --date 2026-08-01
python tgpsc-prep/generator.py --out lesson.md # save to a file
```

No dependencies — pure Python standard library.

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

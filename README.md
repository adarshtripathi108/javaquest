# JavaQuest ☕

A gamified 3D study website for **Programming in Java (26CS021)** — the full
course handout (Lectures 1–90, Chitkara University) as an interactive journey:
learn a topic, try examples, practise, then pass the MCQ quiz to move on.

**Live site:** https://adarshtripathi108.github.io/javaquest/

## What's inside

- **16 topics in 5 Seasons** — Foundations, Core Programming, OOP Mastery,
  Robust & Concurrent, Data / IO / Database
- Every topic: simple explanation → code examples with output → practice
  questions → MCQ quiz (**126 MCQs** in total, each with an explanation)
- **Locked progression** — a season opens only after the previous one is 100%
  complete (or spend 150 coins for an early unlock)
- **Coins & streak** — +30 coins per topic, +100 season bonus, +20 perfect
  score; daily streak, all saved in the browser (localStorage)
- **Strings bank** — 50 important questions for the Strings topic
- 3D Java cube hero, study-friendly teal palette, works on desktop & mobile

## How to use

Open the live site above, or clone this repo and open `index.html` in a
browser — no build step, no server needed.

Quiz pass mark is **70%**. Progress, coins and streaks live in your browser,
so they survive refreshes and return visits on the same browser.

## Structure

- `index.html` — the whole app: layout, seasons, progress/coins/streak
  engine, lesson + quiz UI
- `js/topics/NN-topic-name.js` — one file per topic (explanation, examples,
  practice questions, MCQ quiz), loaded in order

## Course

Built from the 26CS021 Programming in Java course handout (CHO),
B.E. CSE, Chitkara University.

# JavaQuest ☕

A gamified study website for **Programming in Java (26CS021)** — the full
course handout (Lectures 1–90, Chitkara University) as an interactive journey:
learn a topic, try examples, practise, then pass the end-of-topic test to
move on.

**Live site:** https://adarshtripathi108.github.io/javaquest/

## Design — Zero Style

The current design is inspired by
[learnwithzero.com](https://learnwithzero.com/): a white hero with a faded
isometric "Java World" city, an always-visible bottom dock with a Start pill,
and a black section on scroll with a "720" count-up, floating interview
topics and season stops. The home page has no topic cards — topics open only
when Start is clicked (dock or final Start button), which opens the Topics
view with all 16 topics. No bike system — the earlier bike-based versions
are saved separately.

## What's inside

- **16 topics in 5 Seasons** — Foundations, Core Programming, OOP Mastery,
  Robust & Concurrent, Data / IO / Database
- Every topic: beginner-friendly sub-lessons (73 in total) → worked examples
  with output and **line-by-line explanations (720 in total)** → practice
  questions (80, coding only — every question has a click-to-reveal Ans button) → end-of-topic TEST with click-to-reveal answers
- **Practice page** — 186 LeetCode-style problems with category/difficulty
  filters, examples, constraints, starter code and hidden solutions
- **Coins & streak** — +50 coins per completed topic, +10 per solved problem;
  daily streak, all saved in the browser (localStorage)
- **Strings bank** — 38 coding questions for the Strings topic, each with a click-to-reveal answer
- Search, track filters and season stops; works on desktop & mobile

## How to use

Open the live site above, or clone this repo and open `index.html` in a
browser — no build step, no server needed. The page is self-contained (all
content and assets inlined).

Progress, coins and streaks live in your browser, so they survive refreshes
and return visits on the same browser.

## Structure

- `index.html` — the whole app, self-contained: layout, lessons, practice,
  progress/coins/streak engine
- `js/topics/` and `js/problems/` — the topic and problem data files from
  earlier versions, kept as the content source and repo history

## Course

Built from the 26CS021 Programming in Java course handout (CHO),
B.E. CSE, Chitkara University.

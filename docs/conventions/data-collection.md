---
title: Data Collection Conventions
status: draft
updated_at: 2026-05-23
---

# Data Collection Conventions

## Rules

1. Source-first: no curriculum fact without `source_url`.
2. Provenance required: store `source_url`, `source_id` (if available), `retrieved_at` for every captured fact.
3. Exhaustive-above/scoped-below:
   - high-level fields collect all possible values
   - POC path fields collect only Grade 2 subtraction relevant values
4. Unknowns must be explicit: use `unknown`, never implicit blanks.

## Collection Notes

- Record facts as source-grounded statements first.
- Do not convert missing data into guessed values.

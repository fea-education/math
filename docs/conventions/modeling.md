---
title: Modeling Conventions
status: draft
updated_at: 2026-05-23
---

# Modeling Conventions

## Rules

1. Stable IDs: every node uses a stable machine ID in `snake_case`.
2. One concept per field: do not mix meanings in a single field.
3. Separate `source_fact` from `app_interpretation`.
4. Scope tagging is required on nodes using one of: `global`, `grade_2_path`, `poc_only`.

## Modeling Notes

- Preserve raw source semantics in source-backed fields.
- Keep interpretation fields explicit and traceable to supporting source facts.

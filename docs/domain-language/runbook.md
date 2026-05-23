---
title: Domain Language Runbook
status: draft
updated_at: 2026-05-23
---

# Domain Language Runbook

## Purpose

Define the practical execution flow for glossary retrieval and maintenance in daily work.

## Start Of Domain Task

1. Load baseline context docs:
   - `docs/domain-language/README.md`
   - `docs/domain-language/index.yaml`
   - `docs/conventions/index.md`
2. Invoke `dx-ul-retrieve` to load current glossary context.
3. Continue task using existing canonical terms.

## Unknown Term Intake

When a new or unclear term appears:

1. Check for exact and conceptual duplicates in `index.yaml`.
2. If no conflict is found, add a new `proposed` term entry.
3. If potential overlap is found, raise conflict and block auto-activation.
4. Invoke `dx-ul-maintain` for add/update/merge/deprecate action.

## Review And Status Transition

1. `proposed` -> `active` only after review.
2. `active` -> `deprecated` when merged, renamed, or superseded.
3. Berlin-product overlap uses Berlin term as canonical concept label.

## Persistence Rule

After each approved change:

1. Update `docs/domain-language/index.yaml`.
2. Mirror reviewed term in the corresponding markdown table:
   - `docs/domain-language/berlin-curriculum.md`
   - `docs/domain-language/product-terms.md`
3. Keep required fields complete per `docs/domain-language/rules.md`.

## Minimal Action Templates

Use these request patterns during operation:

- Retrieval:
  - "Load glossary context via `dx-ul-retrieve` before this domain task."
- Add unknown term:
  - "Use `dx-ul-maintain` to add term X as `proposed` with required fields."
- Resolve overlap:
  - "Use `dx-ul-maintain` to evaluate overlap between term A and term B and propose merge/rename/deprecate action."
- Activate term:
  - "Use `dx-ul-maintain` to review term X and set status to `active` if conflict checks pass."

## Worked Examples

### Example A: Add New Berlin Term

1. Unknown Berlin term appears during curriculum harvest.
2. Check duplicate/overlap in registry.
3. Add entry as `proposed` with:
   - `group: berlin_curriculum`
   - `canonical: true`
   - `term` in German
   - `definition_en`
   - `source_url`
   - `updated_at`
4. After review, set status to `active` and mirror into `berlin-curriculum.md` table.

### Example B: Product Term Overlaps Berlin Concept

1. Product term is detected as same concept as Berlin term.
2. Raise cross-group concept conflict.
3. Keep/return product term to `proposed` or deprecate if already `active`.
4. Preserve wording as alias only when useful.

### Example C: Deprecate Replaced Product Term

1. Canonical term exists and old term is no longer preferred.
2. Mark old term `deprecated`.
3. Update aliases or references to canonical term.
4. Mirror status change in product terms markdown table.

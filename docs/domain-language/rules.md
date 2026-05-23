---
title: Domain Language Rules
status: draft
updated_at: 2026-05-23
---

# Domain Language Rules

## Canonical Rules

1. One concept maps to one canonical term.
2. Official Berlin curriculum labels are canonical in German and must not be translated.
3. Every term must include a brief English explanation (`definition_en`).
4. Non-curriculum terms can be English.
5. Near-duplicates must be flagged as conflicts and blocked from automatic add.
6. New terms default to `proposed` until review.
7. Product terms must not duplicate an existing Berlin curriculum concept.

## Source Of Truth

- `docs/domain-language/index.yaml` is the canonical machine-readable registry.
- Markdown files are human-readable views and must stay consistent with reviewed registry terms.

## Operational Flow

1. Unknown term appears.
2. Add term as `proposed`.
3. Run duplicate/conflict checks.
4. Review outcome:
   - approve -> set to `active` and persist in markdown plus YAML
   - reject/merge/rename -> keep or update `proposed` until resolved

## Term Lifecycle

- `proposed`: candidate term not approved for broad use.
- `active`: approved canonical term for use.
- `deprecated`: replaced or retired term; do not use for new entries.

## Required Fields

- `id`
- `term`
- `group` (`berlin_curriculum` | `product`)
- `canonical`
- `definition_en`
- `status` (`proposed` | `active` | `deprecated`)
- `updated_at`

Required for `berlin_curriculum` only:

- `source_url`

Optional:

- `aliases`

## Conflict Handling

Raise conflict when any of the following is true:

- term label duplicates an existing active term in same group
- term concept duplicates an existing active term across groups
- aliases overlap with another active term label or alias
- definition indicates same concept as another active term with different label

When conflict is raised:

1. Do not auto-add or auto-activate.
2. Keep candidate in `proposed`.
3. Resolve by merge, rename, or explicit rejection.

## Berlin-Product Overlap Policy

If a Berlin curriculum term overlaps with an internal product term for the same concept:

1. Berlin curriculum term is canonical for that concept.
2. Product term cannot be canonical for the same concept.
3. If product term is `proposed`, keep it blocked and resolve by merge or rename.
4. If product term is already `active`, mark it `deprecated` and migrate references.
5. Product wording may be preserved only as an alias on the canonical concept when useful.

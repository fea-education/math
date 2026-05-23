---
title: Domain Language
status: draft
updated_at: 2026-05-23
---

# Domain Language

## Purpose

Define canonical math domain terms for this project so curriculum facts, product behavior, and future content work use one shared language.

## Scope

- Official Berlin curriculum labels are canonical in German and are not translated.
- Every term includes a brief English explanation.
- Non-curriculum product terms may be English.
- Duplicate or redundant concepts are not allowed, including across groups.

## Structure

- `docs/domain-language/rules.md`
- `docs/domain-language/berlin-curriculum.md`
- `docs/domain-language/product-terms.md`
- `docs/domain-language/index.yaml`

## Source Of Truth

`docs/domain-language/index.yaml` is the machine-readable source of truth.
The markdown files are human-readable views and must stay consistent with reviewed registry terms.

## Operational Flow

1. Load glossary before domain-heavy tasks.
2. Add unknown terms as `proposed`.
3. Run duplicate/conflict check.
4. On review approval, mark term `active` and persist in markdown plus YAML.

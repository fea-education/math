---
title: Session Plan
status: draft
updated_at: 2026-05-23
---

# Session Plan

## Purpose

Capture the agreed plan so work can continue in a new session without losing decisions, constraints, or execution steps.

## Locked Decisions

1. No AI/agent-generated exercise content as technical foundation. Content generation must be rules/template based and curriculum-aligned.
2. Berlin curriculum language is the core domain language.
3. Official Berlin terms are canonical and must not be translated (e.g., `Leitidee`, `Niveaustufe`).
4. Every domain term must include a brief English explanation.
5. Non-curriculum terms can be English, but no duplicate/redundant terms are allowed.
6. Data collection rule: exhaustive above, scoped below.
   - High-level fields: collect all possible values.
   - POC path fields: only collect values relevant to Grade 2 subtraction.

## Domain Language Plan (Ready for Execution)

### Target Structure

- `docs/domain-language/README.md`
- `docs/domain-language/rules.md`
- `docs/domain-language/berlin-curriculum.md`
- `docs/domain-language/product-terms.md`
- `docs/domain-language/index.yaml`

### Term Model (for `index.yaml`)

- `id`
- `term`
- `group` (`berlin_curriculum` | `product`)
- `canonical` (boolean)
- `definition_en`
- `aliases` (optional)
- `source_url` (required for berlin_curriculum)
- `status` (`proposed` | `active` | `deprecated`)
- `updated_at`

### Governance Rules

1. One concept -> one canonical term.
2. If a near-duplicate is found, raise conflict and block automatic add.
3. New terms default to `proposed` until reviewed.
4. Berlin term labels remain in German; explanation is in English.

### Integration Mechanism

Use both:

1. `AGENTS.md` routing rule (lightweight, scalable)
2. `dx-ul-*` skills for retrieval and maintenance

Operational flow:

1. Domain task starts -> load glossary (`dx-ul-retrieve`).
2. Unknown term appears -> add as `proposed` (`dx-ul-maintain`).
3. Run duplicate/conflict check -> if conflict, raise immediately.
4. On acceptance -> persist to markdown + `index.yaml`.

## Next Workstream 1

### Goal

Structure and persist all conventions, and add selective retrieval mechanism.

### Tasks

1. Create `docs/conventions/`.
2. Move current convention set into versioned docs.
3. Add a compact index file for conventions (for selective loading).
4. Update `AGENTS.md` context table with load triggers for:
   - domain language docs
   - conventions docs
5. Define conflict/escalation rule for contradictory conventions.

### Conventions to Persist (Current)

1. Source-first: no curriculum fact without source URL.
2. Provenance required: store `source_url`, `source_id` (if available), `retrieved_at`.
3. Exhaustive-above / scoped-below:
   - high-level fields: collect all possible values
   - POC path fields: only Grade 2 subtraction relevant values
4. Stable IDs: every node uses stable machine ID (`snake_case`).
5. One concept per field; no mixed meaning fields.
6. Separate `source_fact` from `app_interpretation`.
7. Unknowns must be explicit (`unknown`), never implicit blanks.
8. Domain-language rule:
   - Berlin curriculum terms are canonical and must not be translated
   - every term requires a brief English explanation
   - non-curriculum terms can be English
   - no duplicate/redundant terms
9. Scope tagging on nodes (`global`, `grade_2_path`, `poc_only`).
10. Agent-safe canonical data: no accepted entry without provenance fields.

### Output

- Convention docs that are human-readable.
- Retrieval triggers that keep context lean.

## Next Workstream 2

### Goal

Fetch Berlin curriculum data and build/fill hierarchical POC data model for Grade 2 subtraction.

### Data Source Priority

1. RLP Online math pages:
   - `https://bildungsserver.berlin-brandenburg.de/rlp-online/c-faecher/mathematik`
   - `https://bildungsserver.berlin-brandenburg.de/rlp-online/c-faecher/mathematik/themen-und-inhalte`
   - `https://bildungsserver.berlin-brandenburg.de/rlp-online/c-faecher/mathematik/kompetenzen-und-standards`
   - `https://bildungsserver.berlin-brandenburg.de/rlp-online/c-faecher/einzelansicht-der-standards/<id>`
2. Supporting materials and linked official files (PDF/DOCX) from same portal.
3. IQB task collections as secondary reference:
   - `https://www.iqb.hu-berlin.de/de/schule/aufgaben/primar/`
   - `https://www.iqb.hu-berlin.de/de/schule/aufgaben/primar/vera-3-mathematik/`
   - `https://www.iqb.hu-berlin.de/de/schule/aufgaben/primar/lernaufgaben-mathematik-primar/`

### Model-Build Rule

Follow path from top to POC:

1. Include all values for high-level fields (e.g., grade levels, Leitideen, Niveaustufen).
2. For concept/skill/sub-skill layers, include only Grade 2 subtraction relevant entries.
3. Every harvested fact must carry provenance (`source_url`, `source_id`, `retrieved_at`).

### Initial POC Output Target

- `grade2_subtraction_curriculum_slice.json` (name can be adjusted later)

## Execution Order (Recommended)

1. Build domain language files + term rules.
2. Add retrieval and maintenance mechanism.
3. Persist conventions and add convention retrieval index.
4. Start curriculum harvest and first POC data slice.

## Handoff Notes for Next Session

- Keep responses brief and simple.
- Do not introduce translated replacements for Berlin terms.
- Prefer selective loading over full-document loading.
- Raise conflicts explicitly (term duplication or convention contradiction).

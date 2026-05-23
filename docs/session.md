---
title: Session Plan
status: draft
updated_at: 2026-05-23
---

# Session Plan

## Purpose

Track only the remaining work after domain language and conventions setup.

## Remaining Workstream 1

### Goal

Add practical retrieval and maintenance execution for glossary operations in active workflows.

### Tasks

Completed. See `docs/domain-language/runbook.md` for practical glossary execution workflow.

## Remaining Workstream 2

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

## Immediate Next Step

Start curriculum harvest from RLP Online and produce first draft of `grade2_subtraction_curriculum_slice.json` with provenance on every fact.

## Handoff Notes

- Keep responses brief and simple.
- Do not introduce translated replacements for Berlin terms.
- Prefer selective loading over full-document loading.
- Raise conflicts explicitly (term duplication or convention contradiction).

---
title: 'AGENTS'
---

## Context
Use this table as a selective context-loading index. Only load a document when the current task clearly matches its `When to load` trigger; otherwise keep it unloaded to avoid unnecessary context bloat.

| Location | Summary | When to load |
| -------- | ------- | ------------ |
| `docs/domain-language/README.md` | Overview of glossary purpose, scope, structure, and operational flow for domain language management. | Load at the start of every session. |
| `docs/domain-language/rules.md` | Canonical term rules, required fields, lifecycle states, and conflict handling policy. | Load when adding, reviewing, deduplicating, or deprecating terms. |
| `docs/domain-language/berlin-curriculum.md` | Human-readable list and notes for canonical Berlin curriculum terms in German with English explanations. | Load when working with Berlin curriculum terminology or validating canonical German labels. |
| `docs/domain-language/product-terms.md` | Human-readable list and notes for product-specific terms and definitions. | Load when introducing or reviewing internal product vocabulary and model terms. |
| `docs/domain-language/index.yaml` | Machine-readable glossary index used as the canonical term registry and status tracker. | Load at the start of every session. |
| `docs/conventions/README.md` | Overview of operational conventions scope and document structure for data work. | Load at the start of data-model or curriculum-harvest tasks to align on convention set. |
| `docs/conventions/index.md` | Compact selective-loading index for conventions documents. | Load at the start of every session. |
| `docs/conventions/data-collection.md` | Source-first and provenance rules, scoped collection depth, and unknown handling policy. | Load when harvesting curriculum facts or normalizing source-derived data. |
| `docs/conventions/modeling.md` | Stable ID, field semantics, scope-tagging, and fact-vs-interpretation modeling rules. | Load when creating or editing schema/model nodes and field definitions. |
| `docs/conventions/governance.md` | Acceptance gate and contradiction escalation policy for convention conflicts. | Load when deciding acceptance readiness or resolving contradictory conventions. |
| `docs/research/1-overview-existing-apps.md` | Comparative analysis of existing German elementary math apps, what makes them effective, and the main product gap in the market. | Load when evaluating competitors, benchmarking feature patterns, or deciding which existing product strengths and weaknesses to emulate or avoid. |
| `docs/research/2-educational-plan-alignment.md` | Explains how a German elementary math app should align to KMK standards, state curricula, Berlin-Brandenburg `Niveaustufen`, and teacher-facing diagnostic expectations. | Load when defining curriculum alignment, content metadata, teacher reporting, diagnostics, or any Germany/Berlin educational standards requirement. |
| `docs/research/3-gamification-features.md` | Synthesizes evidence on child-safe gamification features that improve learning and engagement without coercion, dark patterns, or risky data practices. | Load when designing motivation loops, rewards, progression, social features, streaks, or evaluating whether gamification is safe and educationally justified. |

## Documentation
Apply these rules whenever creating or editing repository documentation files.

- Every `.md` or `.mdx` file must include a frontmatter block with at least a `title`.
- Keep documentation titles brief and compact.

## Local Tooling
- Use the repo-local game-studio script symlink at `.agents/skills/game-studio/scripts/game-studio`.

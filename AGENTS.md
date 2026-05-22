---
title: 'AGENTS'
---

## Context
Use this table as a selective context-loading index. Only load a document when the current task clearly matches its `When to load` trigger; otherwise keep it unloaded to avoid unnecessary context bloat.

| Location | Summary | When to load |
| -------- | ------- | ------------ |
| `docs/research/1-overview-existing-apps.md` | Comparative analysis of existing German elementary math apps, what makes them effective, and the main product gap in the market. | Load when evaluating competitors, benchmarking feature patterns, or deciding which existing product strengths and weaknesses to emulate or avoid. |
| `docs/research/2-educational-plan-alignment.md` | Explains how a German elementary math app should align to KMK standards, state curricula, Berlin-Brandenburg `Niveaustufen`, and teacher-facing diagnostic expectations. | Load when defining curriculum alignment, content metadata, teacher reporting, diagnostics, or any Germany/Berlin educational standards requirement. |
| `docs/research/3-gamification-features.md` | Synthesizes evidence on child-safe gamification features that improve learning and engagement without coercion, dark patterns, or risky data practices. | Load when designing motivation loops, rewards, progression, social features, streaks, or evaluating whether gamification is safe and educationally justified. |

## Documentation
Apply these rules whenever creating or editing repository documentation files.

- Every `.md` or `.mdx` file must include a frontmatter block with at least a `title`.
- Keep documentation titles brief and compact.

## Local Tooling
- Use the repo-local game-studio script symlink at `.agents/skills/game-studio/scripts/game-studio`.

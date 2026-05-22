---
title: Risk Register
status: draft
project: elementary-math-app
updated_at: 2026-05-22
---

# Risk Register - Elementary Math App

## Purpose

Track all known risks across the full project lifecycle. Every open question that is not blocking a phase must be accepted as a risk and recorded here.

## Risk Status Vocabulary

- `open` — active risk, not yet mitigated.
- `accepted` — known and consciously accepted.
- `mitigated` — addressed with a confirmed solution.
- `resolved` — no longer a risk.
- `blocking` — blocks phase progression until resolved.

## Severity Vocabulary

- `critical` — threatens project viability or core vision.
- `high` — significant impact on scope, quality, or schedule.
- `medium` — manageable with attention.
- `low` — minor or speculative.

## Risks

<!-- Add a new entry for each risk. Increment ID sequentially. -->

### RISK-001

| Field | Value |
|---|---|
| **Description** | If the product expands beyond Grade 2 too early, Berlin-aligned curriculum and content scope may become too large for a solo builder on the stated budget. |
| **Category** | scope |
| **Phase Introduced** | 01-idea-intake |
| **Status** | accepted |
| **Severity** | medium |
| **Confidence** | high |
| **Mitigation** | Keep the first release strictly limited to Grade 2. Treat expansion to other grades as a later product decision after the Grade 2 slice is complete. |
| **Owner Role** | producer |
| **Blocks Progression** | no |
| **Updated** | 2026-05-17 |

---

### RISK-002

| Field | Value |
|---|---|
| **Description** | A garden freshness or drying mechanic could accidentally recreate streak pressure or guilt if it feels like loss, neglect, or punishment. |
| **Category** | design |
| **Phase Introduced** | 01-idea-intake |
| **Status** | accepted |
| **Severity** | medium |
| **Confidence** | high |
| **Mitigation** | Keep all changes reversible, slow, private, and framed as gentle care opportunities rather than penalties; never remove mastery or core unlocks. |
| **Owner Role** | creative-product-lead |
| **Blocks Progression** | no |
| **Updated** | 2026-05-17 |

---

### RISK-003

| Field | Value |
|---|---|
| **Description** | A simple linear mapping such as level 1-3 equals grade 1 and level 4-7 equals grade 2 may oversimplify Berlin's differentiated progression and produce misleading grade coverage claims. |
| **Category** | design |
| **Phase Introduced** | 01-idea-intake |
| **Status** | accepted |
| **Severity** | medium |
| **Confidence** | high |
| **Mitigation** | Use richer metadata than a single level number alone; likely combine category, grade expectation, curriculum tags, and mastery evidence when deriving coverage and recommendations. |
| **Owner Role** | creative-product-lead |
| **Blocks Progression** | no |
| **Updated** | 2026-05-17 |

---

### RISK-004

| Field | Value |
|---|---|
| **Description** | The product may become confusing or overloaded if it tries to serve a very simple child-facing garden experience and a detailed parent-facing curriculum reassurance layer in the same early release without clear separation. |
| **Category** | design |
| **Phase Introduced** | 02-vision-definition |
| **Status** | accepted |
| **Severity** | medium |
| **Confidence** | medium |
| **Mitigation** | Keep the child view motivational and simple, and treat parent reassurance as a clearly separated secondary view with tightly limited scope in version one. |
| **Owner Role** | creative-product-lead |
| **Blocks Progression** | no |
| **Updated** | 2026-05-18 |

---

### RISK-005

| Field | Value |
|---|---|
| **Description** | Even with Grade 2-only scope, the product may still feel repetitive within one or two weeks if the first content slice lacks enough variation in review mix, representations, and challenge patterns. |
| **Category** | design |
| **Phase Introduced** | 03-concept-stress-test |
| **Status** | accepted |
| **Severity** | high |
| **Confidence** | medium |
| **Mitigation** | Start with a narrow but meaningfully varied Grade 2 slice, use mixed review and representation changes, and validate repeat-session appeal before expanding breadth. |
| **Owner Role** | game-designer |
| **Blocks Progression** | no |
| **Updated** | 2026-05-22 |

---

### RISK-006

| Field | Value |
|---|---|
| **Description** | The garden motivation loop may fail if sleeping states feel emotionally flat and ignorable, or if they feel like pressure, neglect, or loss. |
| **Category** | design |
| **Phase Introduced** | 03-concept-stress-test |
| **Status** | accepted |
| **Severity** | high |
| **Confidence** | medium |
| **Mitigation** | Prototype the sleeping and thriving states early, keep all inactivity effects reversible and low-stakes, and test the emotional effect before scaling the system. |
| **Owner Role** | creative-product-lead |
| **Blocks Progression** | no |
| **Updated** | 2026-05-22 |

---

<!-- Duplicate the block above for each additional risk. -->

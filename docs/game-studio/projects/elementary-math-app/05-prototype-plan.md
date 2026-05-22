---
title: Prototype Plan
status: approved
owner_role: engineering-lead
contributors:
  - game-designer
  - producer
  - creative-product-lead
inputs:
  - 02-vision-brief.md
  - 04-design-package.md
  - 00-risk-register.md
open_questions:
  - How much evidence is enough to declare the sleeping-state presentation emotionally safe?
  - What minimum quality threshold should automated or semi-automated content meet to count as viable?
  - What minimum asset-production workflow quality is acceptable before art becomes the bottleneck?
approved_by: human (2026-05-22)
updated_at: 2026-05-22
---

# 05 - Prototype Plan

## Purpose

Identify the smallest tests for the biggest risks. Prototypes are not production work — they are questions made executable. Every prototype must map to a specific risk in the risk register.

## Risks Requiring Validation

<!-- Pull from 00-risk-register.md. List only risks that require prototyping to resolve. -->

| Risk ID | Description | Severity | Why prototype? |
|---|---|---|---|
| RISK-007 | The project may not be viable if curriculum-aligned content cannot be produced or expanded in a meaningfully automated or semi-automated way. | critical | This is a make-or-break delivery risk and requires an executable test of content generation plus metadata fit. |
| RISK-008 | The project may become too expensive or too slow if visual assets require too much bespoke illustration work. | high | This needs a practical workflow test, not just an abstract art-direction discussion. |
| RISK-006 | The garden motivation loop may fail if sleeping states feel emotionally flat and ignorable, or if they feel like pressure, neglect, or loss. | high | This depends on emotional response to concrete interaction and visuals, which should be tested only after the likely art workflow is better understood. |

## Prototype Backlog

<!-- One entry per prototype. Order by risk priority. -->

### PROTO-001: Content-Generation Viability Prototype

- **Risk addressed:** RISK-007
- **Question to answer:** Can the team produce a small set of Grade 2 tasks with meaningful automation or semi-automation while preserving curriculum alignment, metadata consistency, and acceptable quality?
- **Smallest valid test:** generate one narrow Grade 2 content slice across a few categories and representations, attach the proposed metadata, and review the outputs for correctness, clarity, variation, and tagging consistency.
- **Pass criteria:** the workflow produces enough acceptable content with manageable cleanup effort, the metadata model supports it cleanly, and the resulting tasks are good enough to use in later prototypes.
- **Fail criteria:** generated content is too error-prone, too repetitive, too costly to clean up, or requires metadata and review effort comparable to full manual authoring.
- **Effort estimate:** medium.
- **Dependencies:** initial metadata schema, narrow target category set, and review rubric for quality and curricular fit.
- **Method:** code or tooling prototype plus structured review exercise.

### PROTO-002: Asset-Production Workflow Probe

- **Risk addressed:** RISK-008
- **Question to answer:** Can plant states and a small supporting UI asset set be produced through a repeatable, low-burden workflow rather than bespoke illustration for every variation?
- **Smallest valid test:** create one representative plant family across seed, sprout, young, mature, thriving, awake, and sleeping states plus one or two UI-adjacent decorative assets using the proposed workflow.
- **Pass criteria:** the workflow yields a coherent, reusable asset family at reasonable effort, and future variations look feasible without a full custom illustration pass each time.
- **Fail criteria:** each additional state or asset still behaves like bespoke art work, or quality drops too far when trying to reuse the process.
- **Effort estimate:** medium.
- **Dependencies:** a provisional visual language and one selected plant family.
- **Method:** art probe.

### PROTO-003: Sleeping-State Emotional Probe

- **Risk addressed:** RISK-006
- **Question to answer:** Can a sleeping-plant state create a gentle return hook without producing guilt, pressure, or emotional flatness?
- **Smallest valid test:** build a lightweight interactive or semi-interactive probe showing one plant across awake, sleeping, waking, and thriving states with a minimal mission loop around it, using the art direction and asset workflow proven viable by PROTO-002.
- **Pass criteria:** observers describe the sleeping state as resting, calm, or inviting rather than damaged or punishing; waking the plant feels pleasant and worth returning for.
- **Fail criteria:** observers interpret sleeping as failure, neglect, or loss, or they find the state so weak that it does not meaningfully motivate return.
- **Effort estimate:** low to medium.
- **Dependencies:** representative plant-state visuals and one tiny mission flow, informed by PROTO-002.
- **Method:** design exercise plus lightweight interactive prototype.

## Sequencing

<!-- In what order should prototypes run? Which are parallel? Which are blocked? -->

1. Run PROTO-001 first, because content-generation viability is the most critical make-or-break delivery risk.
2. Run PROTO-002 second, because the emotional sleeping-state probe should be informed by a plausible asset workflow rather than speculative visuals.
3. Run PROTO-003 after PROTO-002 establishes a likely visual direction and sustainable asset approach.
4. If PROTO-001 fails, revisit the product's delivery model before further expansion.
5. If PROTO-002 fails, simplify the art system before deeper production planning.
6. If PROTO-003 fails, revise the garden-state expression before execution planning.

## Test Strategy

<!-- How will prototype results be evaluated? -->
<!-- Who runs them? What is recorded? What counts as evidence? -->

Each prototype must end with a short written result that records the question tested, the artefact used, the observed results, the explicit pass or fail judgment, and the recommended next action. Results should be judged against the pass and fail criteria already defined in each prototype entry, not against general enthusiasm or surface polish.

For PROTO-001, evidence should include reviewed sample outputs, metadata consistency checks, estimated cleanup effort, and a concrete proposal for how final game content could be produced. That proposal must state the recommended production workflow, how automated or semi-automated it is, which dependencies it introduces, and a probability rating for whether the workflow is viable for this team setup.

For PROTO-002, evidence should include a representative asset family, rough production effort notes, reuse potential, consistency observations, and a concrete proposal for how final game art assets could be produced. That proposal must state the recommended asset-production workflow, how automated, reusable, or manual it is, which dependencies it introduces, and a probability rating for whether the workflow is viable for this team setup.

For PROTO-003, evidence should include observed emotional reactions, structured feedback, and a clear judgment about whether the sleeping-state expression feels gentle, motivating, and non-punitive. Emotional findings should be recorded separately from visual-style preference so the team does not confuse taste with loop validity.

## Recommendation

Recommendation: `proceed with prototypes`
Reasoning:

The current risks cannot be responsibly retired through discussion alone. The approved design package is narrow enough that three focused prototypes can answer the highest-value unknowns without drifting into production work.

## Alternatives

### Alternative A
Description: Skip the art and content workflow probes and only test the sleeping mechanic.
Trade-offs: Faster in the short term, but leaves the two biggest viability risks unresolved and could waste time on a concept that cannot scale.

### Alternative B
Description: Collapse the three prototypes into one broader vertical-slice prototype.
Trade-offs: Produces a more integrated artefact, but mixes too many questions together and makes pass or fail interpretation much weaker.

## Open Questions

1. What exact Grade 2 categories should seed the narrow prototype content slice?
2. Who will review generated content quality and by what rubric?
3. What level of emotional evidence is enough to trust the sleeping-state result?
4. What evidence is enough to judge the proposed asset-production workflow as sustainable for this team?

## Acceptance Criteria

- [x] Every prototype maps to a specific risk ID.
- [x] Pass/fail criteria are explicit for each prototype.
- [x] Sequencing is clear.
- [x] Human approval recorded before any prototype work begins.

## Approval Status

Status: `approved`
Approved by: human (2026-05-22)
Notes: Approved for progression to Production Planning. The prototype plan intentionally limits Phase 05 to three targeted prototypes and prioritizes them in this order: content-generation viability, asset-production sustainability, then emotional validation of sleeping states. Each prototype should produce a short written result with the tested question, the exact artefact used, observations, pass or fail judgment, and resulting change recommendations. Evidence should be concrete rather than impressionistic: reviewed outputs for content generation, comparative effort notes for asset production, and observed emotional reactions or structured feedback for the sleeping-state probe.

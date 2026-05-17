---
title: Idea Brief
status: approved
owner_role: creative-product-lead
contributors:
  - producer
inputs:
  - user interview (2026-05-17)
  - user reference: Conni Mathe app experience
  - docs/research/2-educational-plan-alignment.md
  - docs/research/3-gamification-features.md
open_questions:
  - What is the safest and most effective way to represent category decay or upkeep without creating pressure?
  - What visual style should the garden use in the eventual product UI?
  - How should Berlin curriculum expectations map to internal mastery levels and grade coverage signals?
approved_by: human (2026-05-17)
updated_at: 2026-05-17
---

# 01 - Idea Brief

## Purpose

Capture the raw game idea in enough structured form to support Vision Definition. Not a commitment — an invitation to investigate.

## Logline

<!-- One sentence: genre + core mechanic + player fantasy. -->
<!-- Example: "A turn-based tactics game where the player commands a failing empire by deciding which wars to lose gracefully." -->

A web-based math practice app for Berlin elementary school students that starts with Grade 3 math content and uses harmless gamification to motivate regular practice and measurable improvement.

## Genre and Platform Assumptions

- Genre: Gamified education app
- Platform: Web for desktop, tablet, and phone
- Session length hypothesis: Short, repeatable practice sessions of roughly 5 to 15 minutes

## Target Player Hypothesis

<!-- Who is this for? What do they want to feel? What games do they already love? -->

Primary launch players are Berlin elementary school students working on Grade 3 math content who need regular practice that feels achievable, supportive, and worth returning to. They want to feel capable, see visible progress, and avoid the boredom or frustration common in repetitive drill tools. Later expansion to other grades remains open.

## Core Fantasy

<!-- The emotional promise. What feeling should the player have that they can only get from this game? -->

"I am helping my garden thrive while getting better at math, and practicing feels caring, rewarding, and never punishing."

## Initial References

<!-- 2–5 games, films, books, or experiences that capture some aspect of the intended feeling. -->
<!-- For each: what to take from it, what to avoid. -->

| Reference | Take | Avoid |
|---|---|---|
| Conni Mathe app | Clear skill categories, short practice sets, visible progression, optional harder mode | Repetition fatigue, speed rewards, perfect-run rewards, shallow long-term retention |
| Berlin-Brandenburg curriculum expectations | Differentiated progression, multiple representations, explanation, diagnosis | Grade-locked or drill-only design |
| Child-safe educational gamification patterns | Mastery progress, private progress visibility, non-punitive feedback, light quests | Leaderboards, coercive streaks, random rewards |

## Structure Options Under Consideration

The following structure options are still open and should be treated as concept inspiration rather than final visual commitments:

1. Unified garden plus separate grade passport view.
2. Unified garden with visible grade paths.
3. Domain-based garden with grade coverage overlay.

Reference concept sketches live in `concepts/` and are exploratory only.

## Underlying Learning Model Hypothesis

The product should lock an underlying domain and mastery data model before it locks any specific child-facing UI structure. Garden, passport, path, or overlay views should all be possible presentations of the same curriculum-aligned learning state.

This direction is agreed as the current Phase 01 structural hypothesis.

Working model:

1. Every exercise is tagged with curriculum and presentation-relevant metadata.
2. Grade coverage is derived from tagged exercises and mastery evidence, not from a hard-wired grade-specific UI.
3. The child-facing garden is a motivational layer on top of the learning model, not the source of truth.
4. The same mastery state should be renderable as a garden, a parent grade summary, or another future interface.

Initial metadata directions:

1. Category or skill family
2. Grade expectation or grade band
3. Internal level or mastery stage
4. Berlin curriculum alignment tags
5. Difficulty and support level
6. Representation
7. Optional process competence

Likely additional metadata needed later:

1. Leitidee or domain
2. Prerequisites or dependency links

## Known Constraints

<!-- Platform, engine, team size, budget, timeline, technology, or personal scope limits already known. -->

1. Team size: 1 engineer with support from LLM-powered agents.
2. Budget: ideally free, maximum 10 EUR per month.
3. Delivery form: web app only.
4. Input and interaction must work well on desktop, tablet, phone, and touch-driven devices.
5. The product should prioritize strong curriculum fit and good exercises over novelty.
6. The first release should focus on Grade 3 only. Expansion to other grades will be decided later.

## Unknowns

<!-- What do we not yet know that matters most for deciding whether to pursue this? -->

1. The exact garden-based core loop that best combines learning quality, repeat use, and harmless motivation.
2. How much teacher-facing diagnostic depth belongs in the first release.

## Open Questions

<!-- Questions that must be answered before Vision Definition can proceed. -->

1. Should garden upkeep be tied to gentle freshness states, spaced review prompts, or another non-stress mechanic?

## Provisional Direction

The exact visual representation is intentionally left open for now. Phase 01 should lock the underlying motivational and pedagogical model first. The key requirement is a structure that can show confidence around current-grade expected content while still allowing review below grade level and exploration above grade level.

Current working direction: use a curriculum-aligned domain and mastery data model underneath, treat garden-style UI concepts as interchangeable views over that model, and focus the first release on Grade 3 content.

## Core Loop Hypothesis

The child practices math through category-based exercise sets that plant and grow parts of a personal garden. Each practice session helps seeds sprout, grow, and flourish; sustained practice keeps plants healthy and expressive; long breaks lead only to gentle loss of freshness, never permanent loss. The garden acts as a caring reflection of practice habits, while the underlying system uses mastery and review to strengthen retention.

Working concept details:

1. Starting a new exercise category plants seeds in the garden.
2. Completing exercises in that category waters the related plants and helps them grow.
3. Reaching a defined mastery threshold fully grows the plant.
4. Continued practice after mastery keeps the plant thriving through healthy, expressive states such as flowers, fruit, sparkle, or companion details.
5. Long inactivity never damages mastery; instead, the plant can become sleeping rather than awake.
6. Returning to practice wakes the plant back up quickly.
7. Special long-term care can unlock bonus plants, fruit trees, or decorative rewards.

Plant growth states:

1. Seed
2. Sprout
3. Young
4. Mature
5. Thriving

The plant can also be shown as awake or sleeping, with sleeping used as a gentle inactivity signal instead of drying or decay.

## Acceptance Criteria

- [x] The idea can be explained in one paragraph.
- [x] The target player is named.
- [x] The core fantasy is explicit.
- [x] Major unknowns are listed.
- [x] Human has reviewed and approved progression to Vision Definition.

## Approval Status

Status: `approved`
Approved by: human (2026-05-17)
Notes: Approved for progression to Vision Definition. Core loop direction is a garden-based mastery and review loop with awake/sleeping plant states. The Phase 01 structural direction is a curriculum-aligned domain and mastery data model, while leaving the exact garden structure and visual treatment open. The first release is explicitly limited to Grade 3.

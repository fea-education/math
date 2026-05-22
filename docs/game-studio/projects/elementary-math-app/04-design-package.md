---
title: Design Package
status: draft
owner_role: game-designer
contributors:
  - creative-product-lead
  - engineering-lead
  - art-director
  - producer
inputs:
  - 02-vision-brief.md
  - 03-concept-stress-test.md
  - 00-risk-register.md
open_questions:
  - What is the smallest Grade 2 content slice that still feels varied over repeated sessions?
  - What is the gentlest visual and interaction expression for sleeping versus awake plants?
  - What adult-facing progress view is enough for trust in version one?
  - What level of automated or semi-automated content production is required for the project to stay viable beyond prototype scope?
approved_by:
updated_at: 2026-05-22
---

# 04 - Design Package

## Purpose

Turn the approved vision into a compact, decision-grade design shape. Not a complete GDD — the minimum structure needed to validate the design is sound before Prototype Planning or Production Planning begins.

## Core Loop

<!-- What does the player do every 10 seconds, 1 minute, 10 minutes? -->
<!-- Format: verb — action — consequence — repeat motivation -->

**10-second loop:** read a simple prompt, answer one Grade 2 math task, get immediate supportive feedback, and see a small garden response.

**1-minute loop:** complete a short cluster of related tasks with light variation in representation or challenge, recover from mistakes through hints or scaffolds, and move one plant or mission forward.

**10-minute loop:** enter the app, accept or choose a short practice mission, complete a compact mix of core practice plus review, wake or grow garden elements, and leave with a clear sense of progress and a light reason to return.

## Target Aesthetics

<!-- Which MDA aesthetics is this game primarily targeting? -->
<!-- sensation | fantasy | narrative | challenge | fellowship | discovery | expression | submission | competition -->

Primary: competence, fantasy, discovery
Secondary: challenge

## Essential Mechanics

<!-- The rules that produce the core loop. Each mechanic must justify its existence. -->

### Mechanic: Short Practice Missions
- **Player verb:** choose or accept a short mission and solve a compact set of tasks.
- **Target aesthetic:** competence, clarity, low-friction challenge.
- **Minimal rules:** each mission contains 5 to 8 tasks, mixes one core skill target with light review or representation variation, and ends quickly.
- **Expected dynamics:** repeatable sessions feel manageable rather than exhausting; children can return often without needing long attention spans.
- **Comparable precedent:** lightweight exercise sets in educational apps, but narrowed to a more curated mission format.
- **Risk/unknowns:** too little variation will feel repetitive; too much variation will feel unfocused.

### Mechanic: Immediate Non-Punitive Feedback
- **Player verb:** answer, retry, inspect hints, and continue.
- **Target aesthetic:** safety, competence, calm persistence.
- **Minimal rules:** incorrect answers never remove meaningful progress; feedback gives hints, scaffolds, or alternate representations before moving on.
- **Expected dynamics:** children are more willing to continue after mistakes, and the app feels supportive rather than judgmental.
- **Comparable precedent:** mastery-learning systems with hint-based retries.
- **Risk/unknowns:** feedback can become verbose or slow if not tightly designed for young children.

### Mechanic: Plant Growth and Sleep States
- **Player verb:** grow, revisit, and wake plants through practice.
- **Target aesthetic:** care, delight, gentle return motivation.
- **Minimal rules:** practicing a tagged category grows its plant through seed to thriving states; inactivity can move a plant from awake to sleeping, but never removes mastery or destroys growth.
- **Expected dynamics:** the garden becomes a living reflection of recent practice, creating a soft reason to return without fear of punishment.
- **Comparable precedent:** care and collection loops in light simulation or educational wrappers.
- **Risk/unknowns:** sleeping may feel either emotionally flat or like loss depending on presentation.

### Mechanic: Mastery-Based Progress Signals
- **Player verb:** complete enough meaningful evidence in a category to see it become solid.
- **Target aesthetic:** competence, reassurance, earned progress.
- **Minimal rules:** progress is based on repeated evidence across tasks, not one lucky completion; adult-facing summaries derive from mastery state, not raw activity count.
- **Expected dynamics:** child and parent trust the signals more than static completion badges.
- **Comparable precedent:** mastery maps in learning products.
- **Risk/unknowns:** if the rules are opaque, parents may not understand the signal and children may not feel rewarded.

### Mechanic: Bounded Choice
- **Player verb:** choose from a small number of suitable missions or representations.
- **Target aesthetic:** autonomy, calm discovery.
- **Minimal rules:** the app offers 2 to 3 equivalent mission choices at key moments, never an overwhelming free-for-all.
- **Expected dynamics:** children feel some agency without losing curricular direction.
- **Comparable precedent:** curated quest selection in child-friendly learning products.
- **Risk/unknowns:** too little choice feels rigid; too much choice weakens guidance.

## Systems Outline

<!-- Supporting systems: progression, economy, rewards, difficulty, social. -->
<!-- Each with: purpose, key inputs/outputs, key risks. -->

### System: Content and Metadata System
- Purpose: tag every activity with the curricular and design metadata needed for recommendations, mastery, and reporting.
- Key inputs/outputs: inputs include category, grade expectation, representation, difficulty, and curriculum alignment; outputs include recommendation eligibility, plant linkage, and adult-facing progress summaries.
- Key risks: metadata may become too complex too early, too weak to support trustworthy progress claims, or insufficiently structured for automated or semi-automated content generation.

Design note: Prototype Planning should include a targeted content prototype to test whether exercises can be produced or expanded in a partially automated way without breaking curriculum alignment, quality, or metadata consistency.

### System: Recommendation and Review System
- Purpose: choose the next short mission by balancing core Grade 2 progression, review of older material, and enough variation to avoid repetition.
- Key inputs/outputs: inputs include recent accuracy, mastery state, category recency, and representation history; outputs are mission suggestions and wake or growth opportunities.
- Key risks: poor tuning may create repetition, weak challenge, or misleading progress.

Design note: after prototype validation, this system should support an A/B test between a recommended-first 10-minute loop entry and a small-choice-set-first entry. That implies some future analytics capability, but analytics design is intentionally out of scope for the current phase.

### System: Garden State System
- Purpose: translate practice patterns into plant growth, thriving, and sleeping states.
- Key inputs/outputs: inputs include category-linked practice evidence and recency; outputs include visual state changes and low-pressure return hooks.
- Key risks: emotional effect may be too weak or too pressuring.

### System: Adult Progress View
- Purpose: provide a limited trust layer showing whether Grade 2 expectations are solid, in progress, or ready for review.
- Key inputs/outputs: inputs include mastery evidence by category and expectation; outputs include a simple summary rather than full analytics.
- Key risks: can become overly complex or imply more precision than the underlying evidence supports.

## Progression and Motivation

- **Short-term (session):** finish one short mission, get supportive feedback, and see a plant wake, grow, or become more lively.
- **Mid-term (hours):** build several category plants from seed to mature states, revisit sleeping plants, and unlock a richer but still bounded garden.
- **Long-term (mastery/completion):** earn trustworthy signals that core Grade 2 expectations are solid while building a living garden that reflects genuine sustained practice rather than one-time completion.

## Onboarding Plan

<!-- What must the player understand in the first 2 minutes? -->
<!-- How does the game teach through play rather than text? -->

1. In the first 30 seconds, the child should understand that answering math tasks helps a plant grow.
2. In the first 2 minutes, the child should complete one very short mission with at least one friendly feedback moment and one visible plant response.
3. The app should teach mission flow through interaction and visual response, not text-heavy explanation.
4. Adult-facing meaning should stay out of the child onboarding path and live in a separate, simple summary view.

## Pacing Outline

<!-- Tension/release rhythm. Novelty cadence. Session arc. -->
<!-- Where are the peaks? Where are the rests? -->

Each session should begin with a low-friction entry beat so the child can start quickly and feel early success. The middle of the session should combine one core skill focus with at least one small variation, such as a different representation, a review item, or a slightly different challenge shape, so the loop stays fresh without becoming noisy. The session should end with a calm payoff beat such as plant growth, waking a sleeping plant, or a clear progress confirmation. Across repeated sessions, pacing should alternate between growth, maintenance, and wake-up moments so the garden feels alive without relying on spectacle or constant novelty.

## Art Direction Summary

<!-- Visual identity in plain language. Shape language, colour logic, silhouette rules. -->
<!-- Readability requirements for key gameplay elements. -->

The visual direction should feel warm, readable, and emotionally safe for second-graders. Plants may be lightly personified, but expressions must stay gentle and avoid sadness or guilt cues; sleeping should read as resting, not withering. The garden should feel alive enough to reward return visits, while task screens remain clean and legible with strong separation between problem content and decorative elements.

Key readability requirements:
1. Math tasks must remain more visually prominent than decorative garden elements.
2. Plant state changes must be understandable at a glance, especially the difference between growing, thriving, and sleeping.
3. Corrective feedback must be easy to parse on phones and tablets without overwhelming the child.
4. Adult-facing progress summaries must be simple, low-density, and clearly separate from the child play surface.

## Technical Assumptions

<!-- What technical choices are assumed in this design? -->
<!-- Each assumption that turns out to be false creates rework. Be explicit. -->

1. The first release can be delivered as a responsive web app without native-only features.
2. A small, explicit metadata model can support recommendations and progress summaries without full adaptive-learning infrastructure.
3. The initial gameplay prototype can use manually authored content, but the long-term product cannot depend on fully manual content production as its scaling model.
4. Plant states and progress visuals should be feasible with modest animation or even static state changes if interaction polish becomes too expensive.
5. Early prototypes should test emotional effect and loop clarity before expensive visual polish.
6. Phase 05 should include a content-generation prototype that tests whether the metadata model can support automated or semi-automated authoring.

## Design Risks

<!-- Top risks from a design perspective. -->
<!-- Dominant strategies, boredom zones, confusion points, balance traps. -->

| Risk ID | Description | Mitigation |
|---|---|---|
| RISK-007 | The project may be non-viable if curriculum-aligned content cannot be produced in a meaningfully automated or semi-automated way. | Use Phase 05 to run a dedicated content-generation prototype and harden the metadata model based on the results. |
| RISK-005 | The narrow Grade 2 slice may still feel repetitive if mission variation is too shallow. | Keep the first slice narrow but require variation across review mix, representations, and challenge patterns. |
| RISK-006 | Sleeping plants may feel emotionally wrong if they imply neglect or loss. | Prototype several sleeping-state presentations before locking the loop. |
| RISK-004 | Adult reassurance may overload the product if it leaks too much complexity into the child flow. | Keep adult-facing progress in a separate, tightly bounded summary view. |

## Open Questions

1. Which specific Grade 2 categories should be in the first narrow content slice?
2. What rules are enough to classify a category as solid, in progress, or ready for review?
3. Which constraints should govern a future A/B test between recommended-first and choice-first 10-minute loop entry?
4. What minimum viable automated or semi-automated content pipeline is needed for the project to stay viable?

## Risk Register Updates

1. Added RISK-007 on project viability if content production cannot be automated or semi-automated enough to scale beyond prototype scope.

## Acceptance Criteria

- [x] Core loop is explicit at all three time horizons.
- [x] All essential mechanics are named and justified.
- [x] Progression structure is addressed.
- [x] Onboarding approach is specified.
- [x] Technical assumptions are explicit.
- [x] The package is compact enough to be revised easily.
- [ ] Human approval recorded.

## Approval Status

Status: `draft`
Approved by:
Notes: Drafted to stay within the approved proceed-with-conditions verdict. The design package intentionally keeps the content slice, adult-facing layer, and garden expression narrow so those items can be validated before broader build-out. A future A/B test on 10-minute loop entry has been noted, analytics planning remains out of scope for this phase, and Phase 05 must also validate whether content production can be automated or semi-automated enough for the project to stay viable.

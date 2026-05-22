---
title: Concept Stress Test
status: approved-with-conditions
owner_role: producer
contributors:
  - creative-product-lead
  - game-designer
  - engineering-lead
  - art-director
inputs:
  - 01-idea-brief.md
  - 02-vision-brief.md
  - 00-risk-register.md
open_questions:
  - What is the minimum content breadth needed inside Grade 2 to make the loop feel varied over multiple weeks?
  - What adult-facing progress visibility is sufficient for trust without creating a heavy reporting product?
approved_by: human (2026-05-22)
updated_at: 2026-05-22
---

# 03 - Concept Stress Test

## Purpose

Challenge the concept before design work begins. Expose scope, feasibility, market, and creative risks early when they are cheap to address. Kill weak ideas. Strengthen good ones.

## Strengths

<!-- What is genuinely strong about this concept? What makes it worth pursuing? -->

1. The concept solves a real observed problem: short-term math practice gains that collapse when repetition becomes boring or motivation fades.
2. The Grade 2-first scope is narrow enough to be believable for a solo builder, while still large enough to test the full product loop.
3. The garden metaphor is emotionally appropriate for young children and fits the approved pillar of motivation without pressure.
4. The domain-and-mastery data model is a strong architectural choice because it preserves flexibility across future UI, grade expansion, and reporting needs.
5. Berlin curriculum alignment creates a credible trust position with parents and a clearer product standard than generic drill apps.

## Fatal Risks

<!-- Risks that would kill the project if unresolved. Must be addressed before Production Planning. -->

| Risk ID | Description | Mitigation Path |
|---|---|---|
| RISK-005 | If the app cannot provide enough varied, high-quality Grade 2 content to keep sessions meaningful over multiple weeks, the retention promise collapses and the product becomes another short-lived drill app. | Keep scope tightly limited to a few core Grade 2 strands first, design for spaced review and mixed practice, and prove repeat use on a narrow slice before expanding breadth. |
| RISK-006 | If the garden loop either feels too shallow to motivate return or too pressuring to feel safe, the core differentiation fails. | Prototype the sleeping and thriving states early, test emotional response with children and parents, and keep all inactivity effects reversible, private, and low-stakes. |

## Scope Risks

<!-- Features or ambitions that are likely to exceed the team's realistic capacity. -->

1. Trying to cover too many Grade 2 domains, representations, and exercise types in v1 could still overwhelm a solo builder.
2. Adding strong parent-facing reporting too early could pull the product toward analytics complexity rather than child practice quality.
3. Creating multiple garden structures, heavy narrative layers, or too many decorative reward systems would increase UX and content scope without proving learning value.
4. Supporting both school and home use deeply in version one could create conflicting workflow needs.

## Technical Risks

<!-- Engineering concerns surfaced by Engineering Lead. -->

<!-- Feasibility status: green | amber | red -->
Feasibility status: `amber`

1. A metadata-driven content model is feasible, but only if the first schema stays minimal and avoids pretending one flat level captures all progression.
2. Deriving trustworthy Grade 2 progress signals from mastery evidence will require careful rules and likely iterative tuning.
3. Responsive, touch-friendly web UX is feasible, but polished garden interactions and content authoring workflows may take more time than the surface concept suggests.
4. The product is technically viable as a web app, but content tooling and tagging discipline are likely bigger risks than raw implementation difficulty.

## Art Burden Risks

<!-- Visual direction concerns surfaced by Art Director. -->

1. Personified plants with multiple growth states, awake and sleeping variants, and category-specific identity can become a hidden asset burden very quickly.
2. If the art is too plain, the garden may feel emotionally weak; if it is too elaborate, it can become expensive and slow to maintain.
3. Decorative rewards such as flowers, fruit, and bonus plants must be constrained so they enrich the loop without creating a large content pipeline.

## Design Risks

<!-- Core loop or mechanics concerns surfaced by Game Designer. -->

1. The sleeping mechanic is promising, but even a gentle inactivity signal can still feel like loss if the presentation is poorly tuned.
2. The garden layer can become decorative rather than motivating if it is not tightly connected to meaningful practice and review.
3. Grade 2 alignment plus flexible progression is a good concept, but it will be easy to confuse children or parents if grade coverage and free exploration are not clearly separated.
4. The concept may still become repetitive if sessions do not meaningfully vary by review mix, representation, or challenge type.

## Differentiation Check

<!-- How is this distinct from comparable titles? -->
<!-- Is the differentiation meaningful and defensible? -->

| Comparable | How we differ | Risk if they dominate |
|---|---|---|
| Conni Mathe and similar drill apps | Stronger emphasis on harmless motivation, spaced return value, and trustworthy mastery signals rather than repetition, speed, and static completion | If the app does not actually feel more durable or more useful, the differentiation becomes theoretical only |
| Generic curriculum drill tools | Calmer emotional framing, living garden metaphor, and clearer mastery-driven structure | If content quality is not clearly better, generic tools may win on familiarity and breadth |
| Heavier adaptive or school-facing products | Simpler child experience and narrower Grade 2-first focus | If adult reassurance is too weak, the product may feel less trustworthy than more formal tools |

## Market and Audience Fit

<!-- Does the intended audience exist and is it reachable? -->
<!-- Is the game type commercially viable for a solo or small team? -->

The intended audience clearly exists: parents and children already use repetitive drill apps, but the user reference shows frustration with shallow retention and rapid novelty decay. A Berlin-focused Grade 2 launch is narrow but realistic, gives the product a concrete trust claim, and matches the team's capacity better than a broad elementary rollout. The main audience-fit risk is not audience absence but whether the product can prove it is both more motivating and more educationally trustworthy than simpler alternatives.

## Kill Criteria

<!-- Conditions under which we would stop this project. -->
<!-- Being explicit about kill criteria prevents sunk-cost continuation. -->

1. If the first narrow Grade 2 slice cannot sustain repeat use across multiple weeks in early testing, stop and redesign the loop before expanding content.
2. If the app cannot produce credible Grade 2 mastery signals without misleading parents, stop and simplify the progress claim.
3. If child testing shows the sleeping mechanic feels stressful or guilt-inducing, stop and replace that part of the loop before proceeding.
4. If content production for one high-quality Grade 2 slice is already too costly or slow, stop broadening scope and reassess the product shape.

## Recommendation

<!-- Primary recommendation: proceed | proceed-with-conditions | rework | park | reject -->

Recommendation: `proceed-with-conditions`
Reasoning:

The concept is worth pursuing because the product need is real, the Grade 2-first scope is now constrained enough, and the approved vision gives a strong filter against common failure modes. However, the project should only proceed if the next phases keep the initial content slice narrow, validate the emotional effect of the sleeping mechanic early, and avoid overbuilding adult-facing reporting before the core child loop proves repeat value.

## Alternatives

### Alternative A
Description: Strip the garden down to a lighter progress wrapper and focus almost entirely on curriculum-aligned mixed practice.
Trade-offs: Lower art and interaction burden, but weaker emotional differentiation and less chance of solving the boredom problem that motivated the concept.

### Alternative B
Description: Lean harder into a richer garden or narrative experience with more unlocks, collection depth, and environmental change.
Trade-offs: Potentially stronger child appeal, but much higher design, art, and content burden with greater risk of novelty over learning.

## Open Questions

1. What is the smallest Grade 2 content slice that can still demonstrate return-worthy variety?
2. What mastery evidence is sufficient for a trustworthy parent-facing "solid / in progress / review" signal?

## Risk Register Updates

<!-- New risks to add to 00-risk-register.md. -->

1. Added RISK-005 on retention failure if the Grade 2 content slice is too narrow or too repetitive.
2. Added RISK-006 on the garden loop failing if the sleeping mechanic feels either shallow or stressful.

## Acceptance Criteria

- [x] All major risk categories are addressed.
- [x] A clear verdict is stated.
- [x] Kill criteria are explicit.
- [x] Human can approve progression, request rework, reject, or park.

## Approval Status

Status: `approved-with-conditions`
Approved by: human (2026-05-22)
Notes: Approved with the verdict proceed-with-conditions. The strongest remaining risks are retention-proof content variety and the emotional tuning of the sleeping mechanic.

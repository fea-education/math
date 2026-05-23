---
title: Convention Governance
status: draft
updated_at: 2026-05-23
---

# Convention Governance

## Acceptance Gate

No entry is accepted as canonical if required provenance fields are missing.

Required provenance fields:

- `source_url`
- `retrieved_at`
- `source_id` when available from source

## Contradiction Escalation

If conventions conflict, apply this resolution order:

1. Safety and verifiability first (source/provenance requirements).
2. Canonical domain language policy.
3. Scope rules for current deliverable (exhaustive-above/scoped-below).

When conflict remains after applying order:

1. Mark the issue as blocked.
2. Record the conflicting conventions and concrete impact.
3. Escalate for explicit human decision before proceeding.

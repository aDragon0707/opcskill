# Human Thinking Layer

Use this reference when a conversation is meant to become a durable human-readable learning or decision asset.

## Core Rule

Preserve human thinking movement before writing machine structure.

A full asset must show:

- what the user originally thought;
- where the user's understanding broke;
- what action repaired the break;
- what the user understood afterward;
- how the same method can be reused later.

If these cannot be extracted, downgrade to receipt instead of filling a schema with thin text.

## Human Thinking Gate

Run this after Worth-Keeping Gate and before full asset drafting.

```yaml
human_thinking_gate:
  pass_when:
    - user confusion, objection, preference, self-explanation, or changed judgment is visible
    - the source shows how the user solved, reframed, rejected, or repaired a problem
    - the asset can answer "how did the human move from old understanding to new understanding?"
  fail_when:
    - only task output is visible
    - only model proposals are visible
    - the user gave no meaningful thinking signal
    - the output would be a timeline, not a human learning asset
```

## Thought Breakpoints

Use this shape for each important cognitive break:

```yaml
thought_breakpoints:
  - before: "What the user seemed to believe or expect before the break."
    break: "The exact confusion, contradiction, failure, objection, or surprise."
    struggle_signal: "Short evidence from the user."
    repair_action: "What the user did to fix understanding: ask, reject, test, compare, run, rewrite, explain back."
    after: "New understanding or new method after the repair."
    reusable_pattern: "How this can help in a future task."
    evidence_quote: "Short quote, redacted if needed."
    confidence: high | medium | low
```

Do not replace this with generic "turning points". A turning point says what changed; a thought breakpoint explains how the human repaired the change.

## User Problem-Solving Pattern

Extract the user's repeatable method:

```yaml
user_problem_solving_pattern:
  - pattern:
    trigger:
    action:
    evidence_quote:
    why_it_worked:
    reuse_when:
```

Common patterns:

- rejecting an agent route that does not match the real goal;
- asking for lower-level mechanisms instead of accepting fluent explanation;
- using a small experiment to make an abstraction observable;
- switching tools when the medium blocks learning;
- explaining back in the user's own words;
- turning a local problem into a reusable workflow.

## Human Layer before Machine Layer

For `full_asset`, write the first major section for a human reader.

Recommended order:

```markdown
# Human Layer

## What Really Happened
## Original Understanding
## Thought Breakpoints
## How the User Solved It
## New Judgments
## Reusable Human Method
## Next Similar Situation

# Machine Layer

## Decision Ledger
## Prompt Cards
## Task Packet
## Retention Review
## Validation
```

The machine layer is still required, but it must not be the first thing the human sees.

## Failure Test

A `full_asset` fails if it cannot answer:

- What did the user originally think?
- Where did the user's understanding break?
- How did the user discover the real problem?
- What did the user do to repair or test the understanding?
- What method can the user reuse next time?

When uncertain, keep the point as `unknown` or ask the user instead of inventing a clean story.

# Human Decision Gate

Use this reference to decide whether a statement can be recorded as a human decision.

## Core Rule

Do not record unaccepted model suggestions as human decisions.

A decision may be labeled `human` only when the user explicitly chooses, rejects, confirms, accepts, or states a preference.

Use two axes:

- `decided_by`: who accepted, rejected, or owns the decision.
- `proposal_origin`: where the option or wording first came from.

## Labels

```yaml
decided_by:
  human: user explicitly chose, rejected, confirmed, accepted, or stated a preference
  model_proposal: assistant suggested it, but user did not clearly accept
  inferred: likely from context, but not explicitly confirmed
  unknown: unclear or unsupported
proposal_origin:
  human_statement: user introduced the option or wording
  model_proposal: assistant introduced the option or wording
  mixed: user accepted the direction but changed, narrowed, or reframed it
  unknown: origin cannot be determined from the source
```

## Human Signals

Treat these as possible human decisions when tied to a concrete proposal:

- "我决定..."
- "我选择..."
- "我不要..."
- "我更倾向..."
- "可以，就这样"
- "按这个来"
- "这个方向对"
- "先做这个"
- "不要做那个"

Short confirmations such as "ok", "可以", "对" count only when the immediately preceding proposal is specific enough to bind.

## Accepted Model Proposals

If the assistant proposes a concrete option and the user clearly accepts it, record the accepted decision as `human` and preserve the model origin:

```yaml
decision: accepted direction or option
decided_by: human
proposal_origin: model_proposal
evidence_quote: short user confirmation
```

If the user accepts the direction but not exact public wording, keep the direction as `human` and put the exact wording in `unknown` or `ask_user`.

Unaccepted suggestions remain `decided_by: model_proposal`.

## Required Fields

Every `human` decision must include:

```yaml
decision:
proposal_origin:
reason:
evidence_quote:
confidence: high | medium | low
```

If reason is not explicit, write `reason: not_explicit` and do not invent one.

## Rejected Options

Capture rejected options when present:

```yaml
rejected_options:
  - option:
    why_rejected:
    evidence_quote:
```

If the user did not reject an option, do not fabricate rejection.

## Safety

When uncertain, prefer `unknown` over `human`. A missed decision is safer than a false human decision.

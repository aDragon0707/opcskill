# Retention Gate

Use this reference when deciding what can enter long-term OPC assets.

## Core Rule

Keep human core thinking and decisions. Remove or question material that is private, low-value, unconfirmed, or unsafe for long-term storage.

## Labels

```yaml
retention_review:
  keep: confirmed decisions, reasons, tradeoffs, reusable prompts, task packets, lessons
  redact: useful structure with private or credential-like details replaced by [REDACTED_SECRET]
  discard: filler, duplicate chat, emotional noise, transient setup chatter
  ask_user: valuable but private, ambiguous, or not clearly approved for long-term storage
```

## Keep

Keep:

- explicit human decisions and preferences;
- reasons, tradeoffs, rejected options, and principles;
- reusable prompts, task packets, validators, and stop rules;
- lessons, failure modes, and next-run bootstrap;
- evidence quotes needed to support a decision.

## Redact

Use `[REDACTED_SECRET]` for credential-like values or sensitive private details while preserving the useful structure.

Redact rather than discard when the pattern matters but the literal value does not.

## Discard

Discard:

- duplicate assistant wording;
- casual filler that does not affect future work;
- abandoned scratch text with no reusable lesson;
- model fluency that adds no evidence, decision, prompt, task, or open loop.

## Ask User

Ask the user when:

- a detail looks private but may be essential context;
- a model proposal may be worth saving but the user did not confirm it;
- a future-facing claim could affect product, public writing, RAG, eval, or training data;
- the source is a large private archive.

When uncertain, prefer `ask_user` or `redact` over silently keeping risky details.

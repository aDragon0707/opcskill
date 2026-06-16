# Skill Collaboration Map

Use this reference when deciding whether OPCSkill should coordinate with other skills.

## Human Choice First

The user decides what kind of asset this conversation should become. Do not automatically load every related skill.

| User wants | Use |
|---|---|
| Understand concepts, mechanisms, and structure | `lijie` |
| Compile a prompt, task packet, validator, or stop rule | `token-prompt-compiler` |
| Write a durable Markdown report | `evaluation` |
| Capture after-action continuity or next-run handoff | `audit-evolution` |
| Turn dense assets into a visual review or export surface | `claude-code-html-skill` |

## Default Staged Pipeline

Use only when the user requests a full asset pipeline:

```text
1. lijie -> concept structure
2. token-prompt-compiler -> prompt/task contract
3. evaluation -> Markdown asset
4. audit-evolution -> continuity receipt, if execution happened
5. claude-code-html-skill -> optional visual review surface, if the user asks for HTML
```

Markdown remains the durable source of truth. HTML is a review, comparison, and export layer.

## Fallback

If these skills are not available, use OPCSkill's built-in simplified workflow:

```text
extract -> decision gate -> asset schema -> validation
```

## Guardrails

- Do not make another skill a hard dependency for public use.
- Do not turn skill collaboration into automatic over-reading.
- Do not execute downstream tasks unless the user explicitly asks.
- Do not treat a generated report as a human-confirmed decision.
- Do not treat a generated HTML artifact as the long-term memory source.

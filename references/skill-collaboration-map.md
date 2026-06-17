# Skill Collaboration Map

Use this reference when deciding whether OPCSkill should coordinate with other skills.

## Human Choice First

The user decides what kind of asset this conversation should become. Do not automatically load every related skill.

## OPCSkill Role

OPCSkill is the connective layer for a one-person-company skill stack. It records how human intent moves through companion skills and becomes reusable assets.

Human messy idea comes first. Companion skills clarify, compile, execute, preserve, continue, or visualize different parts of the work. OPCSkill connects the stages, preserves decision authority, records evidence, and keeps Markdown as the durable source of truth.

Do not make OPCSkill replace companion skills. Use it to summarize their collaboration trace, route the asset, and validate human decisions, retention, and next-run continuity.

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
Human messy idea
-> lijie: concept structure
-> token-prompt-compiler: executable prompt/task contract
-> AI session: execution, dialogue, exploration, conflict, correction
-> evaluation: durable Markdown asset from human-AI interaction
-> audit-evolution: long-task, multi-window, or next-run continuity
-> claude-code-html-skill: optional visual review/export surface
-> OPCSkill: collaboration trace, decision authority, retention review, next reuse path
```

Markdown remains the durable source of truth. HTML is a review, comparison, and export layer.

## Collaboration Trace

When the user asks how these skills work together, output a compact trace:

| Field | Meaning |
|---|---|
| `human_input` | The user's messy thought, decision, or task need. |
| `stage_skill` | Which companion skill handled this stage. |
| `stage_output` | Concept map, task packet, Markdown asset, receipt, or HTML plan. |
| `opcskill_record` | What OPCSkill keeps: human decision, evidence, retention status, or next run. |
| `do_not_claim` | Claims that are not confirmed, such as RAG/training/full automation. |

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

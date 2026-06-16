# Execution Protocol

Use this reference when deciding how OPCSkill should execute on a request.

## Input Classifier

Classify before extracting:

| source_kind | Signals | Action |
|---|---|---|
| `raw_conversation` | Pasted chat, transcript excerpt, unprocessed session | Extract decisions, proposals, prompts, tasks, open loops. |
| `already_synthesized_asset` | Existing report, evaluation note, synthesis note, lesson writeup | Run asset audit and reuse packaging; avoid another long summary. |
| `prompt_archive` | Many prompts, prompt notes, prompt folder, prompt library | Build index or sample first; do not deep-process everything at once. |
| `multi_session_request` | Many windows, many days, long archive, batch cleanup | Produce scope, sampling plan, stop rules, and first-sample task. |
| `visual_export_request` | HTML, diagram, showcase, cards, visual workspace | Produce `visual_export_plan` from confirmed Markdown assets. |

## Output Mode

Default mode is `full_asset`.

```yaml
output_mode:
  full_asset: default for valuable conversations and selected samples
  receipt: quick closeout or low reusable value after Worth-Keeping Gate
  visual_export_plan: for HTML or visual artifacts
```

## Worth-Keeping Gate

Run this before writing a full asset.

```yaml
worth_keeping_gate:
  full_asset_when:
    - explicit human decision, rejection, preference, or tradeoff
    - cognitive turning point or corrected misunderstanding
    - reusable prompt, task packet, validator, checklist, or workflow
    - evidence for why one option was chosen over another
    - next-run bootstrap, open loop, or future action
  downgrade_to_receipt_when:
    - mostly chronological chat
    - mostly duplicated model output
    - mostly raw tool logs
    - no clear human decision or reusable lesson
    - no future action or reuse path
```

Do not turn a weak transcript into a full asset by filling the schema with generic text.

## Human Thinking Gate

Run this after Worth-Keeping Gate and before machine-readable extraction.

```yaml
human_thinking_gate:
  pass_when:
    - user original understanding is visible
    - user confusion, objection, reversal, or self-explanation is visible
    - user repair action is visible
    - reusable human method can be extracted
  downgrade_to_receipt_when:
    - only task output is visible
    - only model suggestions are visible
    - no thought breakpoint can be supported by evidence
  ask_user_when:
    - the result looks valuable but the user's thinking movement is unclear
```

For `full_asset`, preserve Thought Breakpoints and User Problem-Solving Pattern before decision ledger or task packet.

## Evaluation-Grade Quality Gate

Use this gate for Obsidian Markdown, learning assets, durable reports, or quality/evidence audits.

A durable Markdown asset should include:

- Human Layer before Machine Layer;
- thought breakpoints;
- user problem-solving pattern;
- conversation map;
- turning points;
- logic conflicts or judgment points;
- reusable lessons;
- better prompts or task packets;
- correctness and privacy risks;
- final condensed version or next-run bootstrap.

If these cannot be extracted from the source, downgrade to receipt and label the thread as low asset value instead of producing a thin report.

## Execution Chain

```text
classify input
-> Worth-Keeping Gate
-> Human Thinking Gate
-> Thought Breakpoints
-> User Problem-Solving Pattern
-> safety audit
-> choose output mode
-> extract signals
-> Human Decision Gate
-> Retention Gate
-> asset output
-> self-check
```

## Already Synthesized Assets

For reports, evaluation notes, and synthesis notes:

- Do not re-summarize the whole document.
- Identify source scope, human core, reusable outputs, and open loops.
- Preserve useful structure.
- Mark uncertain claims as `unknown`.
- Package for next use: prompt cards, task packets, next-run bootstrap, or visual export hints.
- If it is already thin or low signal, produce an audit receipt instead of rewriting it as another long report.
- If it contains human reflection, write a human-readable layer first and keep the machine layer second.

## Batch Boundary

For `prompt_archive` and `multi_session_request`:

- Do not claim batch cleaning is complete.
- Start with an index, sample selection criteria, and first-sample plan.
- Ask for confirmation before processing private archives.
- Keep RAG, eval, and training as downstream uses of confirmed clean assets.

## Visual Export Boundary

For `visual_export_request`:

- Markdown assets remain the source of truth.
- HTML is a review, comparison, thinking, and export surface.
- Use confirmed assets only; do not convert raw chat directly into visual claims.
- Output non-claims for anything not implemented, verified, or confirmed.

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
  receipt: quick closeout only
  visual_export_plan: for HTML or visual artifacts
```

## Execution Chain

```text
classify input
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

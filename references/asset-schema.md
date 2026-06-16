# Asset Schema

Use this reference when producing structured OPCSkill assets.

## Dialogue Asset

```yaml
dialogue_asset:
  title:
  source_kind: raw_conversation | already_synthesized_asset | prompt_archive | multi_session_request | visual_export_request
  output_mode: full_asset | receipt | visual_export_plan
  source_scope:
  why_keep:
  asset_types:
    - decision_ledger
    - prompt_card
    - task_packet
    - knowledge_note
    - next_run_bootstrap
```

## Decision Ledger

```yaml
decision_ledger:
  - decision:
    decided_by: human | model_proposal | inferred | unknown
    proposal_origin: human_statement | model_proposal | mixed | unknown
    reason:
    evidence_quote:
    rejected_options:
      - option:
        why_rejected:
        evidence_quote:
    tradeoff:
    reversibility: reversible | hard_to_reverse | irreversible | unknown
    expected_result:
    observed_result:
    next_review_trigger:
    do_not_claim:
```

## Prompt Card

```yaml
prompt_card:
  name:
  use_when:
  prompt:
  variables:
  expected_output:
  validator:
  do_not_use_when:
```

## Task Packet

```yaml
task_packet:
  goal:
  role:
  read_first:
  do:
  verify:
  do_not:
  stop_if:
  output:
```

## Knowledge Note

```yaml
knowledge_note:
  core_question:
  primitives:
  mechanisms:
  constraints:
  useful_patterns:
  failure_modes:
  reuse_context:
```

## Next-Run Bootstrap

```yaml
next_run_bootstrap:
  read_first:
  current_state:
  decisions_to_preserve:
  open_loops:
  next_action:
  avoid:
```

## Retention Review

```yaml
retention_review:
  keep:
    - item:
      reason:
  redact:
    - item:
      reason:
      replacement: "[REDACTED_SECRET]"
  discard:
    - item:
      reason:
  ask_user:
    - question:
      why_it_matters:
      default_if_no_answer: redact | discard | keep_as_unknown
```

## Validation Fields

Every output should include:

```yaml
validation:
  human_decision_gate:
  retention_gate:
  evidence_coverage:
  uncertainty:
  next_reuse_path:
```

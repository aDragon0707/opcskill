# Asset Schema

Use this reference when producing structured OPCSkill assets.

## Dialogue Asset

```yaml
dialogue_asset:
  title:
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

## Validation Fields

Every output should include:

```yaml
validation:
  human_decision_gate:
  evidence_coverage:
  uncertainty:
  next_reuse_path:
```


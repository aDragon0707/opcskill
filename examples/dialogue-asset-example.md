# 示例：对话资产化

## Input

```text
我觉得这个东西不要叫 founder-dialogue-compiler，太没美感。
不如都叫 OPCSkill，后续一个一个进行更改就行，因为可能不止加进来这些 skill。
```

## Output

```yaml
dialogue_asset:
  why_keep: 命名和产品边界发生了明确转向。
  source_scope: user-provided excerpt
  decision_ledger:
    - decision: 外层仓库和品牌使用 OPCSkill，而不是 founder-dialogue-compiler。
      decided_by: human
      reason: 用户认为单一功能名不够美观，且未来可能加入不止一个 skill。
      evidence_quote: "不如都opcskill，后续一个一个进行更改就行，因为可能不止加进来这些skill"
      rejected_options:
        - option: founder-dialogue-compiler
          why_rejected: 名字缺少美感，且过窄。
          evidence_quote: "一点美感都没有啊，你起的名字"
      expected_result: 保持外层品牌统一，允许内部能力逐步演化。
      observed_result: unknown
      next_review_trigger: 当第一个 skill 之外出现第二个能力模块时复查命名结构。
      do_not_claim: 不要声称 OPCSkill 已经包含完整 RAG、训练或批量清洗系统。
    - decision: 使用 founder-dialogue-compiler 作为最终产品名。
      decided_by: model_proposal
      reason: assistant 曾提出该名称，但用户明确认为它缺少美感且过窄。
      evidence_quote: "一点美感都没有啊，你起的名字"
  reusable_assets:
    prompt_cards:
      - name: OPCSkill naming review
        use_when: 为一人公司 skill collection 做命名或边界选择时。
        prompt: "请基于 OPCSkill 的长期扩展性，评估这个命名是否过窄、是否有美感、是否便于后续增加 skill。"
    task_packets:
      - goal: 设计 OPCSkill 第一版仓库结构。
        role: Codex implementation agent
        do:
          - 保持外层 repo 名为 opcskill。
          - 先实现一个主 SKILL.md 和核心 references。
          - 不把 RAG、训练和批量清洗做进 v0.1。
        verify:
          - README 解释 OPCSkill 是 skill collection 的外层品牌。
          - SKILL.md 不把任何本地 skill 写成硬依赖。
    knowledge_notes:
      - core_question: 为什么外层品牌名应该比第一版功能更宽？
        useful_patterns:
          - 仓库名承载长期 collection。
          - 子能力可以后续拆分和重命名。
          - 黑客松叙事优先清楚和可扩展。
    next_run_bootstrap:
      current_state: 已决定外层名为 OPCSkill。
      next_action: 写中文 README、SKILL.md、Human Decision Gate 和 Asset Schema。
  open_loops:
    - question: 第一个内部能力是否需要单独命名？
      owner: human
      next_action: 等 v0.1 用真实样本跑通后再命名。
```

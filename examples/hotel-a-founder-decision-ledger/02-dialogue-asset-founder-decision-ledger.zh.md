# Dialogue Asset 草稿：创始人决策账本

```yaml
dialogue_asset:
  title: "从 AI worklog 到创始人拥有的决策资产"
  source_kind: already_synthesized_asset
  output_mode: full_asset
  public_status: candidate_not_approved
  source_scope:
    primary_case: "创始人决策账本建立"
    sensitive_business_context: "Hotel A 账户级销售决策，已强脱敏"
    full_raw_sources_included: false
  worth_keeping_gate:
    result: full_asset
    signals:
      - 明确的人类治理决策
      - 清楚说明为什么 AI worklog 不够
      - 区分 Thinking Inbox、Decision Log、Retrospective Log
      - 保留 AI 执行边界和升级规则
      - 可复用的一人公司运行模式
    reason: "这个来源捕捉到一个可长期复用的创始人判断：AI 执行痕迹不能替代人的决策权。"
  human_thinking_gate:
    result: pass
    reason: "材料展示了从“我的决策存在哪里？”到“建立创始人决策账本和 AI 治理规则”的清晰思维转变。"
```

# Human Layer

## 真实发生了什么

创始人在推进一个真实的一人公司项目。项目已经有多个 AI 员工，也已经产生了 worklog、dashboard、handoff、商业执行文件和证据材料。

问题在于：系统能记住 AI 做了什么，但不一定能记住创始人真正想了什么、决定了什么、后来改变了什么判断，以及未来 AI 应该服从什么决策。

这次样本的核心判断不是“再多建一个文档”，而是：

```text
AI worklog 是执行记录，不是权威记录。
```

因此修复动作是建立独立的创始人账本系统：

```text
Thinking Inbox -> Decision Log -> Retrospective Log
```

由此形成权威顺序：

```text
创始人判断
> 创始人 Decision Log
> 当前 dashboard
> AI worklog
> AI suggestions
```

## 原始理解

原来的系统已经有很多 AI worker 和操作文档。这样能让执行进度可见，但也会带来一个风险：系统越来越擅长记录 AI 活动，却不一定保存人的判断。

创始人的原始问题很直接：

```text
我的原始思考和决策应该存在哪里？
复盘应该存在哪里？
```

## 思维断点

```yaml
thought_breakpoints:
  - before: "项目主要依赖 AI worklog、dashboard 和 handoff 保存进度。"
    break: "创始人发现这些材料没有把创始人决策作为最高优先级来源保存下来。"
    struggle_signal: "作为 CEO，我是来做决策的。原始思考和决策在哪里存储？"
    repair_action: "建立 Thinking Inbox、Decision Log、Retrospective Log 三套账本。"
    after: "当旧 dashboard 或旧 worklog 与决策日志冲突时，以创始人决策日志为准。"
    reusable_pattern: "在 AI 协作公司里，必须把执行记忆和决策权威分开。"
    evidence_quote: "AI worklog 不能替代 CEO 决策。"
    confidence: high

  - before: "AI 输出很有用，但没有治理时可能被误当成决策。"
    break: "材料明确禁止 AI 把自己的建议当作创始人决策。"
    struggle_signal: "AI 不得把自己的建议当作 CEO 决策。"
    repair_action: "只有创始人明确确认后，才能进入正式 Decision Log。"
    after: "AI 可以提议、执行、记录，但决策权仍属于创始人。"
    reusable_pattern: "把 AI 建议写入长期资产前，先过 Human Decision Gate。"
    evidence_quote: "只有 CEO 明确拍板，或 AI-01 根据 CEO 明确话语整理并等待确认后，才能写入。"
    confidence: high

  - before: "业务执行已经进入真实账户级触达。"
    break: "客户承诺、价格、证据声明和公开叙事都不能由 AI 自行决定。"
    struggle_signal: "最终商业判断、客户承诺、价格、公开叙事由 CEO 决定。"
    repair_action: "高风险业务动作进入审查和升级流程，最终发送和承诺权保留给创始人。"
    after: "AI 分工被明确约束：销售草稿、证据核对、政策审查、PMO 同步都不能替代最终决策权。"
    reusable_pattern: "当 AI 工作触及客户、价格、法律声明或证据结论时，必须升级给人。"
    evidence_quote: "AI 是员工和执行系统，不是 CEO。"
    confidence: high
```

## 创始人是怎么解决的

```yaml
user_problem_solving_pattern:
  - pattern: "把人的决策权和 AI 执行痕迹分开。"
    trigger: "项目里有大量 AI worklog，但没有清楚的创始人决策来源。"
    action: "创建创始人拥有的 decision ledger，并让它覆盖旧 dashboard 和旧 worklog。"
    evidence_quote: "如果本文件和旧 worklog 冲突，以本文件为准。"
    why_it_worked: "它防止 AI 生成的执行记录变成意外的公司战略。"
    reuse_when: "适用于多个 AI agent 为一人公司或创始人项目生成材料的场景。"

  - pattern: "使用 草稿 -> 确认 -> 正式决策 的晋级链路。"
    trigger: "某个想法很重要，但还没有完全决定。"
    action: "先放入 Thinking Inbox 或 Draft Decision Inbox，只有明确确认后才进入 Decision Log。"
    evidence_quote: "写在这里不等于已经正式生效。"
    why_it_worked: "它允许未成形想法被保存，同时避免它们和正式决策混在一起。"
    reuse_when: "适用于战略、定价、客户承诺、产品定位和公开叙事决策。"

  - pattern: "让 AI 角色遵守升级规则。"
    trigger: "AI 任务涉及客户、价格、法律结论、证据结论、合同或收款。"
    action: "要求 AI 在行动前升级给创始人。"
    evidence_quote: "最终商业判断、客户承诺、价格、公开叙事由 CEO 决定。"
    why_it_worked: "它保留了 AI 的执行速度，同时避免高风险商业决策失控。"
    reuse_when: "适用于任何 AI 参与真实外部利益相关方的业务流程。"
```

## 新判断

- AI worklog 是必要的，但不充分。
- 创始人的决策需要独立、持久、可复查的账本。
- 原始想法、草稿决策和正式决策不能混在一起。
- 复盘应该记录判断如何变化，而不只是记录完成了什么。
- AI 可以执行、总结、起草和审查，但不能拥有最终客户承诺、价格、公开叙事或法律 / 政策判断。
- Founder Decision Log 应该覆盖过期 dashboard、旧计划和 AI worklog。

## 可复用的人类方法

```text
raw founder thought
-> draft decision
-> explicit founder confirmation
-> decision log
-> AI execution requirements
-> prohibited actions
-> retrospective
-> next run bootstrap
```

中文表达：

```text
原始思考
-> 草稿决策
-> 创始人明确确认
-> 正式决策日志
-> AI 必须执行什么
-> AI 禁止做什么
-> 复盘
-> 下一轮 AI 接续
```

## 下次遇到类似情况

当创始人使用多个 AI agent 时，不要让公司记忆变成 AI 输出堆。先定义人的思考、正式决策和复盘分别存在哪里，再要求所有 AI 在重要任务前读取这层决策资产。

# Machine Layer

## 对话 / 材料地图

```yaml
conversation_map:
  - stage: "治理问题出现"
    signal: "项目已有 AI worklog，但没有独立的创始人思考 / 决策 / 复盘存储。"
  - stage: "人类权威被明确"
    signal: "创始人判断被定义为最高优先级来源。"
  - stage: "账本系统被建立"
    signal: "Thinking Inbox、Decision Log、Retrospective Log 被分开。"
  - stage: "AI 执行规则被加入"
    signal: "所有 AI 在重要任务前必须读取 Decision Log。"
  - stage: "真实业务压力验证规则"
    signal: "账户级销售决策需要证据边界、审查门和创始人最终承诺权。"
```

## 决策账本

```yaml
decision_ledger:
  - decision: "建立独立的创始人账本系统。"
    decided_by: human
    proposal_origin: mixed
    reason: "项目已经有多个 AI 员工和大量 worklog；如果没有创始人决策日志，公司记忆会偏向 AI 执行，而不是创始人判断。"
    evidence_quote: "AI worklog 不能替代 CEO 账本。"
    rejected_options:
      - option: "让 AI worklog 充当主要公司记忆。"
        why_rejected: "worklog 记录 AI 做了什么，不记录创始人最终决定了什么。"
        evidence_quote: "公司记忆会偏向 AI 执行，而不是 CEO 判断。"
    tradeoff: "增加少量人工治理步骤，但避免战略漂移。"
    reversibility: reversible
    expected_result: "未来 AI 工作服从明确的创始人决策。"
    observed_result: "CEO ledger 文件被创建，并链接进操作文档。"
    next_review_trigger: "当 AI 开始依据旧 dashboard 或旧 worklog 行动，而不是读取 Decision Log。"
    do_not_claim:
      - "不要声称这已经是自动化 RAG 系统。"
      - "不要声称历史决策已经全部回填完成。"

  - decision: "Decision Log 覆盖旧 dashboard、旧 worklog 和旧计划。"
    decided_by: human
    proposal_origin: mixed
    reason: "最新、明确的创始人决策必须成为权威来源。"
    evidence_quote: "如果本文件和旧 worklog 冲突，以本文件为准。"
    rejected_options:
      - option: "让每个 AI 根据自己的 worklog 推断优先级。"
        why_rejected: "这会让公司记忆碎片化。"
    tradeoff: "要求 AI 在重要工作前读取 Decision Log。"
    reversibility: reversible
    expected_result: "减少 AI 之间的冲突和旧计划错误。"
    observed_result: "AI 公司操作系统要求重要任务前读取决策日志。"
    next_review_trigger: "增加新的 AI 员工或工作流时。"
    do_not_claim:
      - "没有确认时，不要把 AI 建议当作人类决策。"

  - decision: "AI 是员工和执行系统，不是 CEO。"
    decided_by: human
    proposal_origin: human_statement
    reason: "最终商业判断、客户承诺、价格和公开叙事都是高风险创始人决策。"
    evidence_quote: "AI 是员工和执行系统，不是 CEO。"
    rejected_options:
      - option: "让 AI 默认发送客户承诺或价格。"
        why_rejected: "外部承诺需要人类权威。"
    tradeoff: "比完全自动外发慢，但更适合真实业务。"
    reversibility: reversible
    expected_result: "AI 加速执行，创始人保留战略控制。"
    observed_result: "系统增加了法律、定价、证据、合同和身份风险的升级规则。"
    next_review_trigger: "客户要求承诺、降价、法律结论或修改证据结论时。"
    do_not_claim:
      - "不要声称 AI 可以脱离创始人决策来运营公司。"

  - decision: "用复盘记录判断变化。"
    decided_by: human
    proposal_origin: mixed
    reason: "创始人需要记录哪些判断变了、哪里可能错了、下一步怎么改。"
    evidence_quote: "复盘不是汇报漂亮成果，而是记录判断如何变化。"
    rejected_options:
      - option: "只记录完成了什么。"
        why_rejected: "完成事项不能解释学习和判断变化。"
    tradeoff: "需要定期反思，但能形成可复用学习资产。"
    reversibility: reversible
    expected_result: "未来 AI session 继承推理，而不只是继承状态。"
    observed_result: "复盘草稿记录了治理问题和下一步动作。"
    next_review_trigger: "每天结束或重大业务 / 技术决策之后。"
    do_not_claim:
      - "不要声称所有历史决策已经被回填。"
```

## 可复用资产

```yaml
prompt_cards:
  - name: "Founder Decision Capture"
    use_when: "一段对话里混有创始人决策、AI 建议和执行日志。"
    prompt: |
      只提取已确认的创始人决策。
      区分 raw thoughts、draft decisions、confirmed decisions、AI proposals、worklog facts。
      每条已确认决策都要包含 reason、scope、required AI action、prohibited actions、review trigger 和 evidence。
      除非创始人明确接受，否则不要把 AI 建议记录为创始人决策。
    variables:
      - source_excerpt
      - project_context
      - public_redaction_level
    expected_output:
      - thinking_inbox_candidates
      - decision_ledger
      - retrospective_items
      - retention_review
      - next_run_bootstrap
    validator:
      - "每条 human decision 都有证据。"
      - "未接受的 AI 建议必须标为 model_proposal 或 unknown。"
      - "隐私 / 客户细节已脱敏。"
    do_not_use_when: "来源里没有人类决策、偏好、拒绝或判断变化。"

task_packets:
  - goal: "把 AI worklog 和创始人笔记转化为创始人拥有的决策资产。"
    role: "OPCSkill extraction agent"
    read_first:
      - "Founder thinking inbox"
      - "Founder decision log"
      - "Founder retrospective log"
      - "AI worklog for execution evidence"
      - "Operating rules that define AI boundaries"
    do:
      - "将来源分类为 already_synthesized_asset。"
      - "只提取可复用的治理决策。"
      - "脱敏客户、联系人、本地路径和账户策略。"
      - "保持 founder authority 高于 AI execution records。"
      - "输出公开安全 demo source 和本地 private source map。"
    verify:
      - "公开文件里没有原始本地路径或客户联系方式。"
      - "Decision Log 权威性明确。"
      - "复盘捕捉了判断变化。"
      - "AI 角色边界被保留。"
    do_not:
      - "不要包含原始客户外发正文。"
      - "不要公开联系人姓名、邮箱、电话或私有触达路线。"
      - "不要声称这是 RAG、training 或全自动公司。"
    stop_if:
      - "无法把决策权追溯到创始人确认。"
      - "敏感业务细节无法安全匿名化。"
```

## 知识笔记

```yaml
knowledge_notes:
  - core_question: "当 AI agent 生成大量材料时，什么应该成为公司记忆？"
    primitives:
      - founder thinking
      - draft decision
      - confirmed decision
      - AI worklog
      - retrospective
      - escalation rule
    mechanisms:
      - separate ledgers
      - decision authority precedence
      - AI read-before-work rule
      - escalation gate for customer/legal/pricing/evidence risks
    constraints:
      - AI output is not authority
      - unresolved thoughts are not confirmed decisions
      - public demo must redact customer/account details
    useful_patterns:
      - worklog != decision
      - founder confirmation gate
      - retrospective as judgment-change record
    failure_modes:
      - AI 建议变成意外公司政策
      - 旧 dashboard 覆盖新决策
      - AI 未经授权草拟客户承诺
      - 复盘变成汇报，而不是学习
    reuse_context:
      - one-person companies
      - AI employee systems
      - founder-led product/business workflows
      - Obsidian-based company memory
```

## Retention Review

```yaml
retention_review:
  keep:
    - item: "创始人权威规则。"
      reason: "这是核心可复用治理决策。"
    - item: "Thinking Inbox / Decision Log / Retrospective Log 三层分离。"
      reason: "这是可复用操作模式。"
    - item: "AI 角色边界和升级规则。"
      reason: "它们防止 AI 自主性越界。"
    - item: "匿名化 Hotel A 决策背景。"
      reason: "它证明这套规则来自真实业务压力。"
  redact:
    - item: "本地路径。"
      reason: "公开 demo 不需要。"
      replacement: "[LOCAL_PATH]"
    - item: "酒店 / 客户名、联系人姓名、邮箱、电话、LinkedIn 路线。"
      reason: "敏感账户和触达细节。"
      replacement: "Hotel A / senior commercial route / operational contact"
    - item: "销售邮件正文和账户级路线表。"
      reason: "商业敏感，且不是证明 OPCSkill 价值所必需。"
      replacement: "strongly anonymized business context"
  discard:
    - item: "完整 dashboard 行、长外发草稿和原始证据 artifact 路径。"
      reason: "它们会让 demo 偏离创始人决策捕捉。"
    - item: "AI 实现噪音。"
      reason: "demo 应展示决策资产，而不是文件堆。"
  ask_user:
    - question: "匿名化 Hotel A 背景是否可以放进公开 README demo？"
      why_it_matters: "它能增强真实业务感，但仍然来自真实商业场景。"
      default_if_no_answer: "redact"
    - question: "公开 demo 是否提 ShadowBuyer 名字，还是使用通用 one-person-company？"
      why_it_matters: "具体品牌更可信，但可能暴露私有项目上下文。"
      default_if_no_answer: "keep_as_unknown"
```

## Validation

```yaml
validation:
  worth_keeping_gate: pass
  human_thinking_gate: pass
  human_decision_gate: pass_with_source_evidence
  retention_gate: pass_with_public_redaction_required
  evidence_coverage: "治理决策证据强；业务背景已故意匿名化。"
  uncertainty:
    - "这个 asset 基于已整理项目文件，不是原始聊天 transcript。"
    - "公开发布需要创始人确认匿名化尺度。"
    - "源 worklog 明确说明历史决策回填尚未完成。"
  next_reuse_path:
    - "创始人审查这个候选 asset。"
    - "如果确认，生成更短的公开 README case。"
    - "再从 Markdown asset 生成 HTML visual review surface。"
    - "private source map 只保留本地。"
```


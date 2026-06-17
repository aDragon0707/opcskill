# OPCSkill 协作轨迹包：Hotel A Founder Decision Ledger

```yaml
collaboration_trace:
  title: "从人的混乱想法到可视化决策资产"
  public_status: "redacted_demo"
  durable_source: "Markdown"
  visual_layer: "HTML review/export surface"
  source_case: "Hotel A，一人公司真实业务样本的脱敏版本"
  do_not_claim:
    - "不声称已经实现 RAG。"
    - "不声称已经实现 training 或训练数据流水线。"
    - "不声称已经完成 full batch cleaning。"
    - "不声称 HTML 是长期真源。"
    - "不把模型建议标记为 human_decision。"
```

## 1. 人类发起：混乱想法和判断压力

```yaml
human_input:
  situation: "创始人正在推进一个真实业务项目。"
  messy_thought:
    - "我有很多想法、担忧和判断，但它们还没有形成稳定结构。"
    - "我需要让 AI 帮我执行，但执行前必须先弄清楚自己到底想要什么。"
    - "执行后留下的材料不能只保存 AI 的流畅输出，还要保存人的取舍和判断。"
  risk:
    - "模型建议可能被误当成人的决策。"
    - "临时想法可能被误写成长期结论。"
    - "私有业务细节可能被带进公开材料。"
```

OPCSkill 记录：

```yaml
opcskill_record:
  source_kind: "multi_stage_skill_stack"
  human_decision_gate: "pending until explicit user choice or evidence"
  retention_gate: "keep | redact | discard | ask_user"
```

## 2. `lijie`：先把人的想法梳理清楚

```yaml
stage:
  stage_skill: "lijie"
  input: "创始人的混乱想法、概念疑问、业务判断压力。"
  action:
    - "用 Feynman 解释把问题讲简单。"
    - "用 first principles 拆出事实、假设、机制、限制和后果。"
    - "把想法之间的关系画成结构：顺序、并列、依赖、反馈、开放循环。"
  stage_output:
    - "concept_map"
    - "open_loops"
    - "unclear_terms"
    - "human_confusion_points"
  opcskill_record:
    keep:
      - "人的原始困惑"
      - "关键概念结构"
      - "尚未解决的问题"
    ask_user:
      - "哪些判断已经确认，哪些只是想法。"
```

价值：这一步防止后续 prompt 只是在放大混乱，而不是澄清任务。

## 3. `token-prompt-compiler`：把想法转换成可执行任务

```yaml
stage:
  stage_skill: "token-prompt-compiler"
  input:
    - "lijie 产出的概念结构"
    - "用户确认的目标、边界、验证方式"
  action:
    - "编译成 SACP / Prompt IR / Task Packet。"
    - "明确 objective、boundary、output、validator、repair、stop rule。"
    - "控制上下文，避免把全部历史塞给执行模型。"
  stage_output:
    - "executable_prompt"
    - "task_packet"
    - "validator"
    - "stop_rules"
  opcskill_record:
    keep:
      - "可复用 prompt"
      - "任务边界"
      - "验证方式"
    do_not_claim:
      - "没有执行前，不声称任务已经完成。"
```

价值：这一步让“我大概想做什么”变成另一个 AI agent 能执行、能验证、能停止的任务。

## 4. `evaluation`：保存人与 AI 交互博弈后的思考资产

```yaml
stage:
  stage_skill: "evaluation"
  input:
    - "AI session 的对话、产物、修正和用户反馈"
    - "执行前的 task packet"
  action:
    - "提取 conversation map、turning points、logic conflicts。"
    - "区分 human understanding、model assumptions、unverified claims。"
    - "写成 Obsidian 可读的 Markdown 报告。"
  stage_output:
    - "durable_markdown_report"
    - "reusable_lessons"
    - "better_prompts"
    - "correctness_risks"
  opcskill_record:
    human_layer:
      - "原来的理解"
      - "思维断点"
      - "破局动作"
      - "新理解"
    machine_layer:
      - "Decision Ledger"
      - "Prompt Card"
      - "Task Packet"
      - "Next-Run Bootstrap"
```

价值：这一步保存的不是“模型答得很好”，而是人和 AI 交互后留下的判断、纠错、取舍和可复用方法。

## 5. `audit-evolution`：多窗口、长任务和接续

```yaml
stage:
  stage_skill: "audit-evolution"
  input:
    - "本轮修改结果"
    - "测试结果"
    - "用户纠正"
    - "下一轮风险"
  action:
    - "生成 Tiny Audit、Evidence Receipt 或 Clean-State Packet。"
    - "保留最少但足够的上下文。"
    - "记录 next_run_bootstrap。"
  stage_output:
    - "continuity_receipt"
    - "next_run_bootstrap"
    - "risk_notes"
  opcskill_record:
    keep:
      - "任务完成证据"
      - "下一轮入口"
      - "用户修正过的原则"
    discard:
      - "重复执行日志"
      - "无法复用的噪音"
```

价值：这一步让多个窗口和长任务不会断掉，也不会把完整聊天历史反复塞回上下文。

## 6. `claude-code-html-skill`：把 Markdown 转成可视化资产

```yaml
stage:
  stage_skill: "claude-code-html-skill"
  input:
    - "已确认的 Markdown 资产"
    - "视觉导出计划"
  action:
    - "生成单文件、离线、可审查的 HTML。"
    - "把 dense Markdown 转成流程图、对照卡片、筛选视图和导出界面。"
    - "保留 Copy as Markdown / export path。"
  stage_output:
    - "html_review_surface"
    - "visual_decision_map"
    - "export_controls"
  opcskill_record:
    keep:
      - "HTML 是 review/export surface"
      - "Markdown 是长期真源"
    do_not_claim:
      - "不把 HTML 当数据库。"
      - "不把 HTML 当训练数据管线。"
```

价值：这一步让人能看懂和审查资产，而不是只让机器读取字段。

## 7. OPCSkill 汇总：把五步结果连接成资产

```yaml
opcskill_summary:
  role:
    - "汇总层"
    - "连接层"
    - "资产路由器"
  preserves:
    - "human_decision"
    - "decision_reason"
    - "evidence_quote"
    - "rejected_options"
    - "retention_review"
    - "next_reuse_path"
  validates:
    - "human decision 不被 model_proposal 替代"
    - "敏感信息进入 redact 或 ask_user"
    - "低价值材料不硬包装成 full_asset"
    - "Markdown 是长期真源"
```

最终结果不是一个更长的摘要，而是一条可复用工作流：

```text
人类混乱想法
-> 概念结构
-> 可执行 prompt
-> AI 交互和执行
-> Markdown 思考资产
-> 多窗口接续
-> HTML 可视化审查
-> OPCSkill 协作轨迹包
-> 下一轮更好的 AI 协作
```

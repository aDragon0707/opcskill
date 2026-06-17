# README Demo 段落草稿

## 3 分钟看懂：从 AI 工作记录到创始人决策资产

OPCSkill 不是把聊天记录简单总结成 Markdown。它解决的是一个更具体的问题：

```text
当一个人同时指挥多个 AI 员工时，系统很快会产生大量 worklog、dashboard、handoff 和草稿。
但这些东西记录的是 AI 做了什么，不等于记录了创始人真正决定了什么。
```

这个 demo 来自一个真实的一人公司项目，已脱敏为 `Hotel A` 案例。

### 原始问题

创始人发现：

```text
AI worklogs 已经很多，
但 CEO 的原始思考、正式决策和复盘没有独立账本。
如果不处理，公司记忆会偏向 AI 执行记录，而不是人的判断。
```

### OPCSkill 提取出的核心资产

```text
Thinking Inbox
-> 未成形想法、担忧、直觉、问题

Decision Log
-> 创始人确认过的正式决策
-> 决策原因
-> 适用范围
-> AI 必须执行什么
-> AI 禁止做什么

Retrospective Log
-> 哪个判断变了
-> 哪里做对了
-> 哪里可能错了
-> 下一步怎么改
```

### 关键决策

```text
AI worklogs cannot replace founder decisions.
```

中文：

```text
AI 工作记录不能替代创始人决策。
```

因此系统规则变成：

```text
Founder judgment
> Founder Decision Log
> current dashboard
> AI worklog
> AI suggestions
```

### 为什么这不是 RAG

RAG 关注“以后怎么检索资料”。

OPCSkill 关注的是更早一步：

```text
哪些对话、判断、取舍和复盘值得进入长期资产？
哪些必须脱敏？
哪些只是 AI 生成的执行噪音？
哪些需要创始人确认？
```

RAG、eval、训练数据都可以是后续用途，但 OPCSkill 首先是一条对话资产化和决策沉淀管线。

### 输出结果

这个 demo 会生成：

```text
01-redacted-demo-source.zh.md
02-dialogue-asset-founder-decision-ledger.zh.md
04-visual-export-plan.zh.md
```

其中 Markdown 是长期真源；HTML 只是审查、对照和展示界面。


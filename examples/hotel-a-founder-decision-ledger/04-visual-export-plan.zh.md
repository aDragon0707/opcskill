# 可视化导出计划：创始人决策账本 Demo

source_kind: visual_export_request
output_mode: visual_export_plan
public_status: candidate_not_approved

## Source Assets

```yaml
source_assets:
  primary_markdown:
    path: "02-dialogue-asset-founder-decision-ledger.zh.md"
    role: "长期真源"
  source_demo:
    path: "01-redacted-demo-source.zh.md"
    role: "公开安全的源材料摘录"
  private_map:
    path: "private-source-map.local.zh.md"
    role: "本地私有来源追踪，不发布"
```

## First Viewport

目的：

```text
让审查者在 10 秒内理解：OPCSkill 可以把 AI 密集型项目痕迹，转化为创始人拥有的决策资产。
```

布局：

```text
左侧：源问题
- AI worklog 很多
- 缺少创始人拥有的决策层
- 真实业务压力，已匿名化

中间：决策权威层级
- 创始人判断
- Decision Log
- Dashboard
- AI worklog
- AI suggestions

右侧：保留审查
- 保留创始人决策
- 脱敏客户 / 账户细节
- 丢弃低价值 AI 执行文本
- 公开前需要创始人确认
```

主信息：

```text
OPCSkill 保存谁做了决定、为什么重要、AI 必须做什么、AI 不能声称什么。
```

## Sections

```yaml
sections:
  - id: source_problem
    title: "源问题"
    content:
      - "AI worklog 记录执行。"
      - "它们不会自动保存创始人权威。"
      - "创始人需要独立的思考、决策和复盘账本。"

  - id: human_layer
    title: "Human Layer"
    content:
      - "真实发生了什么"
      - "思维断点"
      - "创始人如何修复问题"
      - "可复用方法"

  - id: decision_ledger
    title: "Decision Ledger"
    content:
      - "建立创始人账本"
      - "Decision Log 覆盖旧 worklog"
      - "AI 是员工，不是 CEO"
      - "用复盘记录判断变化"

  - id: retention_review
    title: "Retention Review"
    content:
      - "keep: 创始人判断、决策层级、AI 边界"
      - "redact: 客户名、联系方式、本地路径、触达路线"
      - "discard: 原始销售邮件正文和 dashboard 噪音"
      - "ask_user: 公开命名和业务背景暴露尺度"

  - id: next_reuse
    title: "Next Reuse"
    content:
      - "作为 README 里的 3 分钟 demo。"
      - "Markdown 进入 Obsidian 作为真源。"
      - "HTML 用作审查 / 导出界面。"
```

## Interaction Controls

```yaml
filters:
  - "只看 human decisions"
  - "查看 AI proposals / execution records"
  - "查看 retention labels"
  - "查看 public-safe excerpts"
toggles:
  - "show evidence quotes"
  - "hide sensitive business context"
  - "compact demo mode"
  - "show decision hierarchy"
comparison_controls:
  - "Source excerpt -> OPCSkill asset"
  - "AI worklog -> founder decision"
  - "private source map -> public redaction"
```

## Non-Claims

- 不声称这个 demo 已经实现自动化 RAG。
- 不声称历史决策回填已经完成。
- 不声称 OPCSkill 可以在没有人类确认的情况下发布私有业务数据。
- 不声称 AI 拥有最终商业判断。
- 不把 HTML 当成长期真源。


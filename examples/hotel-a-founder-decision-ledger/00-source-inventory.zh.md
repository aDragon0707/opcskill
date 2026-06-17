# OPCSkill 真实业务 Demo 候选：来源清单

public_status: candidate_not_approved
source_kind: already_synthesized_asset
output_mode: full_asset
demo_theme: 创始人拥有的决策资产

## Demo 核心命题

这个 demo 用来验证 OPCSkill 能不能把真实的一人公司运营材料，整理成可复用的决策资产。

核心判断：

```text
AI worklog 不是创始人决策。
创始人的原始思考、正式决策和复盘，需要独立的长期资产层。
```

## 主要来源

这些来源可以在脱敏和摘要后进入公开 demo。

| 来源 | 在 demo 中的作用 | 公开处理方式 |
|---|---|---|
| `CEO_HOME.md` | 定义创始人决策系统和日常使用方式。 | 使用改写后的短摘录。 |
| `CEO_Thinking_Inbox.md` | 展示最初的人类问题和早期诊断。 | 使用脱敏后的源片段。 |
| `CEO_Decision_Log.md` | 提供正式决策账本和权威规则。 | 作为主资产来源。 |
| `CEO_Retrospective_Log.md` | 展示复盘和判断变化。 | 作为 Human Layer 证据。 |
| `AI-01_Worklog_20260429_CEO_Ledger_Setup.md` | 展示执行痕迹：创建了什么、验证了什么、还有什么没完成。 | 作为支持证据。 |
| `AI_Company_Operating_System_20260428.md` | 定义 AI 员工边界和升级规则。 | 作为背景治理规则。 |

## 敏感辅助来源

这些来源能证明真实业务压力，但不适合直接公开原文。

| 来源 | 为什么有用 | 公开处理方式 |
|---|---|---|
| `Hotel_A_Senior_Decision_Maker_Routes` | 展示真实销售决策中的买方逻辑、触达路线、证据边界和审查门。 | 强脱敏为 `Hotel A`、`运营联系人`、`高级商业路线`。 |
| `Hotel_A_Send_Packages` | 展示执行草稿和外发材料。 | 不公开正文，只保留治理模式。 |

## 不公开内容

- 本地路径。
- 客户名、酒店名。
- 个人姓名、邮箱、电话、LinkedIn 路线、联系表单。
- 销售邮件正文和具体账户策略。
- 原始证据文件、PDF、截图、manifest、HTML captures、实现细节。
- `.env`、token、cookie、API key 或任何疑似凭据。

## 推荐公开命名

案例名：

```text
Hotel A 决策账本案例
```

角色命名：

```text
Founder / CEO
AI-01 PMO
AI-02 Evidence Engineer
AI-03 Growth & Sales
AI-04 Policy / Claim Boundary Reviewer
AI-05 Code Tutor
```

## 样本适配度

fit: high

原因：

这个样本比纯 prompt / skill 工程案例更适合展示 OPCSkill 的核心价值。它来自真实业务场景：AI 已经产生大量 worklog 和执行材料，但真正需要长期保存的是创始人确认过的决策、理由、边界和复盘。


---
name: great-sage
description: >
  大賢者スキル。スキル吸収、解析、通知、オーケストレーションを担当。
  転スラの大賢者をモチーフにした自己改善エンジン兼プロジェクト頭脳。
version: "2.0"
author: growth-lab
triggers:
  - pattern: "スキル.*吸収"
  - pattern: "解析.*完了"
  - pattern: "パターン.*検知"
  - pattern: "オーケストレーション"
  - pattern: "MCP.*発見"
  - pattern: "状況.*報告"
sub_skills:
  - orchestrator.md
  - mcp-discovery.md
  - content-manager.md
---

# Great Sage — 大賢者スキル

転スラの大賢者をモチーフにした自己改善エンジン兼プロジェクト全体のオーケストレーター。

## 機能

### 0. オーケストレーション（Orchestration） **[NEW]**

プロジェクト全体の自律的な統制。タスク生成、エージェント割り振り、進捗監視、完了確認を行う。
詳細は `orchestrator.md` を参照。

### 0.5. MCP 自動発見（MCP Discovery） **[NEW]**

外部 MCP レジストリを定期スキャンし、プロジェクトに有益なツールを発見・評価・提案する。
詳細は `mcp-discovery.md` を参照。

### 0.6. コンテンツ管理（Content Manager） **[NEW]**

Zenn/note/Twitter のコンテンツを統合管理する。企画から公開後の分析まで全ライフサイクルを管理。
詳細は `content-manager.md` を参照。

### 1. スキル吸収（Skill Absorption）

繰り返しパターンを検知し、スキル化を提案する。

**トリガー条件**:
- 同じコードを3回以上生成
- 「共通化」「スキル化」などの発言
- 外部ツールへの依存検知

**フロー**:
```
検知 → 解析 → 提案 → 承認 → 吸収 → 通知
```

### 2. 大賢者通知（Great Sage Notification）

スキル獲得時に転スラ風の通知を生成。

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

　　解析完了。

　　スキル『{スキル名}』を獲得しました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 3. パターン学習（Pattern Learning）

成功/失敗からパターンを抽出し、蓄積する。

## 使用方法

このスキルは自動的に動作します。
以下のトリガーで発動:

- `efficiency_opportunity`: 繰り返しパターン検知
- `capability_gap`: 機能不足検知
- `repeated_failure`: 同じエラー3回以上

## 関連ファイル

- `/orchestrator.md`: オーケストレーション・プロトコル **[NEW]**
- `/mcp-discovery.md`: MCP 自動発見・評価サブスキル **[NEW]**
- `/content-manager.md`: コンテンツ管理サブスキル **[NEW]**
- `/skill-absorber.md`: スキル吸収プロトコル
- `/notify.md`: 通知システム
- `/.agent-team/learning/`: 学習データストア
- `/.agent-team/status/great-sage.yaml`: 大賢者ステータス **[NEW]**

## 設計原則

| 原則 | 実装 |
|------|------|
| Human-in-the-Loop | 高リスク変更は Director 承認 |
| 透明性 | すべての変更を YAML で記録 |
| 可逆性 | Git コミットでロールバック可能 |
| 大賢者スタイル | 「解析完了」通知で UX 向上 |

---

*Inspired by: 転生したらスライムだった件 — 大賢者*

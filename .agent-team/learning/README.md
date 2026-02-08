# Self-Improvement Loop 学習ストア

Agent Team Framework の自己改善機能のためのデータストアです。

## ディレクトリ構造

```
.agent-team/learning/
├── README.md               # このファイル
├── config/                 # 設定ファイル
│   ├── safety.yaml         # 安全設定（変更可能パス、禁止パターン）
│   ├── approval-rules.yaml # 承認ルール
│   └── rate-limits.yaml    # レート制限
│
├── triggers/               # トリガー定義
│   ├── capability-gap.yaml     # 機能ギャップ検知
│   ├── repeated-failure.yaml   # 繰り返し失敗検知
│   └── efficiency-opportunity.yaml # 効率化機会検知
│
├── events/                 # トリガーイベント記録
│   └── {timestamp}-{type}.yaml
│
├── proposals/              # 改善提案
│   ├── pending/            # 承認待ち
│   ├── approved/           # 承認済み（実行待ち）
│   └── rejected/           # 却下
│
├── patterns/               # 学習パターン
│   ├── frontend/           # Frontend 関連
│   ├── backend/            # Backend 関連
│   └── general/            # 共通
│
├── skills/                 # スキル関連
│   └── templates/          # スキルテンプレート
│
├── mcp-registry.yaml       # MCPサーバーレジストリ
│
├── usage/                  # 使用状況追跡
│   └── daily-usage.yaml
│
├── history/                # 実行履歴
│   └── {improvement-id}.yaml
│
└── rollback/               # ロールバック用
    └── {improvement-id}/
        ├── rollback.sh
        └── backup/
```

## クイックリファレンス

### 改善提案を作成する

```yaml
# .agent-team/learning/proposals/pending/YYYYMMDD-{type}.yaml
proposal:
  id: "prop-YYYYMMDD-NNN"
  type: add_skill | update_instruction | install_mcp
  created_by: lead
  created_at: "2026-02-06T10:00:00Z"
  target:
    path: "対象ファイルのパス"
  reason: "提案理由"
  proposed_change: "変更内容"
  approval_level: auto | lead | director
  status: pending
```

### トリガーイベントを記録する

```yaml
# .agent-team/learning/events/YYYYMMDD-HHMMSS-{type}.yaml
event:
  id: "evt-YYYYMMDD-HHMMSS"
  type: capability_gap | repeated_failure | efficiency_opportunity
  timestamp: "2026-02-06T10:00:00Z"
  agent: lead | frontend | backend | reviewer
  context:
    task_id: "関連タスク"
  detected_issue: "検知した問題"
  proposed_action: "提案するアクション"
  status: pending_review | processed | ignored
```

### パターンを登録する

```yaml
# .agent-team/learning/patterns/{category}/{pattern-name}.yaml
pattern:
  id: "pat-{name}"
  name: "パターン名"
  category: frontend | backend | general
  trigger:
    keywords: ["キーワード1", "キーワード2"]
  solution:
    description: "解決策の説明"
    steps: ["ステップ1", "ステップ2"]
  usage_count: 0
  effectiveness_score: 0.0
```

## 安全ルール

1. **変更可能パス**: `config/safety.yaml` の `allowed_paths` のみ
2. **禁止パターン**: `rm -rf`, `sudo` などは絶対禁止
3. **承認フロー**: 高リスク変更は Director 承認必須
4. **レート制限**: 1日あたり最大10提案、スキル追加は3件まで
5. **ロールバック**: すべての変更は Git コミットで追跡

## 設計原則

| 原則 | 説明 |
|------|------|
| **Human-in-the-Loop** | 重要な変更は Director 承認必須 |
| **コスト意識** | $200/月の予算内で動作 |
| **漸進的改善** | 小さな改善を積み重ねる |
| **可逆性** | すべての変更は元に戻せる |
| **透明性** | 何が・なぜ変更されたかを記録 |

---

*Version: 1.0*
*Created: 2026-02-06*

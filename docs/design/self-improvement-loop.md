# Self-Improvement Loop 設計ドキュメント

## Agent Team Framework 自己改善ループ

---

## 1. 概要

### 1.1 目的

Agent Team Framework に「自己改善ループ（Self-Improvement Loop）」を追加し、エージェントが以下を自律的に実行できるようにする:

1. **スキルの更新**: カスタムスラッシュコマンド（`.claude/commands/`）の作成・更新
2. **MCPサーバーの発見**: 新しいツールの発見とインストール提案
3. **指示書の更新**: ロール定義（`.md`ファイル）の改善
4. **成功/失敗からの学習**: パターンの蓄積と活用

### 1.2 設計原則

| 原則 | 説明 |
|------|------|
| **Human-in-the-Loop** | 重要な変更は必ず Director（人間）の承認を経る |
| **コスト意識** | $200/月の Claude Max 予算内で動作 |
| **漸進的改善** | 一度に大きな変更をせず、小さな改善を積み重ねる |
| **可逆性** | すべての変更は元に戻せる（バージョン管理） |
| **透明性** | 何が・なぜ変更されたかを常に記録 |

---

## 2. アーキテクチャ概要

```
┌─────────────────────────────────────────────────────────────────┐
│                    Self-Improvement Loop                         │
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐        │
│  │   Trigger   │───▶│   Analyze   │───▶│   Propose   │        │
│  │  Detection  │    │   Context   │    │ Improvement │        │
│  └─────────────┘    └─────────────┘    └──────┬──────┘        │
│                                               │                │
│                                               ▼                │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐        │
│  │   Learn &   │◀───│   Execute   │◀───│   Review    │        │
│  │   Store     │    │   Change    │    │  (Human/AI) │        │
│  └─────────────┘    └─────────────┘    └─────────────┘        │
│         │                                                      │
│         ▼                                                      │
│  ┌─────────────────────────────────────────────────────┐      │
│  │              .agent-team/learning/                   │      │
│  │  patterns/ | skills/ | proposals/ | history/         │      │
│  └─────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. トリガー条件

### 3.1 トリガーの種類

| トリガー | 説明 | 優先度 | 自動/手動 |
|----------|------|--------|-----------|
| **capability_gap** | 必要な機能がないことを検知 | 高 | 自動 |
| **repeated_failure** | 同じタイプのエラーが3回以上 | 高 | 自動 |
| **efficiency_opportunity** | 繰り返しパターンを検知 | 中 | 自動 |
| **explicit_request** | Director が改善を指示 | 最高 | 手動 |
| **post_task_review** | タスク完了後のレトロスペクティブ | 中 | 自動 |

### 3.2 トリガー検知の例

```yaml
# .agent-team/learning/triggers/capability-gap.yaml
trigger:
  type: capability_gap
  patterns:
    - phrase: "このツールがあれば"
    - phrase: "MCPサーバーが必要"
    - error_pattern: "Tool not found"
  action: create_improvement_proposal
  auto_approve: false
```

---

## 4. 改善アクション

### 4.1 スキル（カスタムコマンド）の追加

```markdown
# /optimize-image

画像ファイルを最適化するスキル。

## Usage
/optimize-image <path> [--quality=85] [--format=webp]

## Steps
1. 指定されたパスの画像を読み込む
2. 品質設定に基づいてリサイズ・圧縮
3. 指定形式で出力
```

### 4.2 MCPサーバーの発見

```yaml
# .agent-team/learning/mcp-registry.yaml
known_servers:
  - name: "@anthropic/filesystem"
    installed: true
  - name: "@anthropic/image-tools"
    installed: false
    discovered_by: frontend
    use_case: "画像最適化機能で必要"
```

### 4.3 指示書の更新提案

```yaml
# .agent-team/learning/proposals/update-frontend-md.yaml
proposal:
  type: instruction_update
  target_file: "agent-team/templates/dev-team/roles/frontend.md"
  reason: "画像処理のベストプラクティスを追加"
  proposed_addition: |
    ## 画像処理ガイドライン
    - WebP形式を優先
    - 品質は85%をデフォルトに
```

---

## 5. 安全機構

### 5.1 多層防御

```
Layer 1: Scope Limits    → 変更可能なパスを限定
Layer 2: Validation      → 構文チェック、危険パターン検出
Layer 3: Approval Gate   → 高リスク変更は Director 承認必須
Layer 4: Rollback        → Git コミットで全変更を追跡
Layer 5: Rate Limiting   → 1日あたりの改善回数制限
```

### 5.2 変更可能スコープ

```yaml
safety:
  allowed_paths:
    - ".claude/commands/**"
    - ".claude/prompts/**"
    - "agent-team/templates/**"
    - ".agent-team/learning/**"
  forbidden_paths:
    - "CLAUDE.md"
    - ".claude/settings.json"
    - "*.env*"
```

### 5.3 レート制限

```yaml
rate_limits:
  daily:
    max_improvements: 10
    max_skill_additions: 3
  budget:
    max_daily_token_budget: 50000  # 約$2.50/日
```

---

## 6. ディレクトリ構造

```
.agent-team/learning/
├── config/
│   ├── safety.yaml
│   ├── approval-rules.yaml
│   └── rate-limits.yaml
├── triggers/
├── events/
├── proposals/
│   ├── pending/
│   ├── approved/
│   └── rejected/
├── patterns/
├── mcp-registry.yaml
├── history/
└── rollback/
```

---

## 7. 実装ロードマップ

| Phase | 期間 | 目標 |
|-------|------|------|
| 1 | Week 1-2 | 学習ストアとトリガー検知の基盤 |
| 2 | Week 3-4 | 提案・承認フローの実装 |
| 3 | Week 5-6 | パターン学習エンジン |
| 4 | Week 7-8 | スキル自動生成 |
| 5 | Week 9-10 | MCP発見・統合 |
| 6 | Week 11-12 | 統合・最適化 |

---

## 8. ワークフロー例

### スキル自動生成フロー

```
1. トリガー検知: frontend の履歴に同じコードが3回以上
2. コンテキスト分析: 共通パターン = 画像最適化
3. 提案生成: /optimize-image コマンドの作成
4. 承認フロー: Lead が承認
5. 実行: .claude/commands/optimize-image.md を作成
6. 学習: パターンを登録
```

---

## 9. コスト設計

| アクション | 推定トークン | 頻度 | 月間消費 |
|-----------|-------------|------|----------|
| トリガー検知 | 500 | 50回 | 25,000 |
| コンテキスト分析 | 1,500 | 30回 | 45,000 |
| 提案生成 | 2,000 | 20回 | 40,000 |
| **合計** | | | **127,500** |

**予算内**: $200/月の約4%相当

---

## 10. 次のアクション

1. [ ] Phase 1 の実装を開始（学習ストア構造の作成）
2. [ ] 安全設定ファイルの初期版を作成
3. [ ] トリガー検知の PoC を実装
4. [ ] Twitter/X で Self-Improvement Loop の開発開始を宣言

---

*Last updated: 2026-02-06*
*Version: Draft 1.0*

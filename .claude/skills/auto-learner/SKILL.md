---
name: auto-learner
description: >
  自動学習スキル。コードレビュー・デバッグ・実装から
  学習したパターンを自動的に記録・更新する。
version: "1.0"
author: growth-lab
memory: project
triggers:
  - event: code_review_complete
  - event: bug_fix_complete
  - event: test_pass_after_fail
---

# Auto-Learner — 自動学習スキル

## 概要

コードレビュー・デバッグ・実装から学習したパターンを
自動的に記録・更新するスキル。

## トリガー

| イベント | 説明 |
|----------|------|
| `code_review_complete` | コードレビュー完了時 |
| `bug_fix_complete` | バグ修正完了時 |
| `test_pass_after_fail` | テスト失敗→成功の遷移時 |

## 動作

1. 今回の作業から汎用的なパターンを抽出
2. 既存パターンと重複チェック
3. `patterns/` ディレクトリに追記
4. CLAUDE.md の関連セクションを更新（オプション）

## パターン記録フォーマット

```yaml
# patterns/{category}/{pattern-name}.yaml
pattern:
  name: "{パターン名}"
  category: "{frontend|backend|general}"

  context: |
    いつ適用するか

  problem: |
    何が起きたか

  solution: |
    どう対処したか

  root_cause: |
    なぜ起きたか

  discovered_at: "YYYY-MM-DD"
  usage_count: 0
  effectiveness_score: 0.0
```

## Memory 活用

`memory: project` により、学習したパターンはセッション間で永続化される。

次回のセッションで:
- 類似パターンを自動提案
- 過去の解決策を参照
- 効果的なパターンを優先表示

## パターンカテゴリ

| カテゴリ | 内容 |
|----------|------|
| `frontend` | UI/UX、React、CSS 関連 |
| `backend` | API、DB、認証関連 |
| `general` | 共通パターン、設計原則 |
| `security` | セキュリティ関連 |
| `performance` | パフォーマンス最適化 |

## 現在登録済みパターン

パターンは `patterns/` ディレクトリに蓄積されます。

---

*このスキルは Memory フィールドを活用してセッション間で学習を継続します*

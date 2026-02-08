---
name: mcp-explorer
description: >
  MCP サーバー探索・評価スキル。利用可能な MCP サーバーを
  探索・評価し、プロジェクトに最適なツール構成を提案する。
version: "1.0"
author: growth-lab
model: haiku
memory: user
tools:
  - Read
  - Glob
  - Grep
  - Bash
  - WebFetch
---

# MCP Explorer — MCP 探索スキル

## 概要

利用可能な MCP サーバーを探索・評価し、
プロジェクトに最適なツール構成を提案する。

## 探索対象

1. **npm/GitHub 上の新しい MCP サーバー**
2. **既存 MCP サーバーのアップデート**
3. **プロジェクトに不足しているツール統合**

## 評価基準

| 基準 | 重み | 説明 |
|------|------|------|
| プロジェクト関連性 | 高 | 現在のタスクに必要か |
| コミュニティ活発さ | 中 | GitHub Stars、最終更新日 |
| コンテキスト影響 | 高 | ツール数 < 80 を維持 |
| セキュリティ | 高 | OAuth 2.1、TLS 対応 |
| コスト | 中 | $200/月予算内か |

## 制約（重要）

```
⚠️ MCP サーバーは 10 個以下を維持
⚠️ ツール総数は 80 個以下
⚠️ コンテキストウィンドウを 70K 以上保持
```

MCP サーバーが多すぎると、コンテキストウィンドウが
200K から 70K 以下に縮小する場合があります。

## 現在のレジストリ

詳細は `/.agent-team/learning/mcp-registry.yaml` を参照。

### インストール済み

| サーバー | カテゴリ | 用途 |
|----------|----------|------|
| filesystem | core | ファイル操作 |
| git | core | Git 操作 |
| memory | core | 永続メモリ |
| web-fetch | network | Web 取得 |
| database | data | DB 操作 |

### 発見済み（未インストール）

| サーバー | カテゴリ | 用途 | 優先度 |
|----------|----------|------|--------|
| @anthropic/image-tools | media | 画像処理 | 低 |
| @anthropic/puppeteer | automation | ブラウザ自動化 | 低 |
| @anthropic/slack | communication | 通知 | 中 |

## 使用方法

```
「新しい MCP サーバーを探索して」
「画像処理に使える MCP を調べて」
「現在の MCP 構成を最適化して」
```

## 出力

推奨する追加/削除/更新をレポートとして
`registry.md` に記録。

---

*このスキルは Haiku モデルで軽量・高速に動作します*

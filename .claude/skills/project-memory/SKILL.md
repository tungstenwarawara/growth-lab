---
name: project-memory
description: >
  プロジェクト記憶スキル。技術的決定、解決済みバグ、
  コーディング規約をセッション間で永続化する。
version: "1.0"
author: growth-lab
memory: project
---

# Project Memory — プロジェクト記憶スキル

## 概要

プロジェクト固有の知識をセッション間で永続化し、
一貫性のある開発を支援する。

## 記憶カテゴリ

### 1. 技術的決定（decisions.md）

アーキテクチャ決定記録（ADR）を蓄積。

```yaml
decision:
  id: "ADR-001"
  title: "YAML ファイル通信の採用"
  date: "2026-02-05"
  status: accepted

  context: |
    エージェント間通信でトークン消費を抑えたい

  decision: |
    API ベースではなく YAML ファイルベースの通信を採用

  consequences:
    positive:
      - トークン消費ゼロ
      - デバッグしやすい
    negative:
      - リアルタイム性は低い
```

### 2. 解決済みバグ（bugs-resolved.md）

頻出バグとその解決策を記録。

```yaml
bug:
  id: "BUG-001"
  title: "Tailwind CSS v4 border-border エラー"
  date: "2026-02-05"
  severity: high

  symptom: |
    ReferenceError: border-border is not defined

  root_cause: |
    Tailwind v3 の書き方を v4 で使用

  solution: |
    @theme ブロックで CSS 変数を定義

  prevention: |
    メジャーバージョンアップ時は公式ドキュメント優先
```

### 3. コーディング規約（conventions.md）

プロジェクト固有のルールを記録。

```yaml
convention:
  category: typescript
  rules:
    - "strict: true を維持"
    - "any 禁止、unknown を使用"
    - "interface を type より優先"
    - "エクスポート関数は明示的な戻り値型"
```

## Memory フィールドの活用

`memory: project` により:

- **セッション開始時**: 過去の決定・バグ・規約を自動読み込み
- **作業中**: 新しい知見を自動蓄積
- **セッション終了時**: 変更を永続化

## 使用例

```
「過去にこのエラーを解決した記録はある？」
→ bugs-resolved.md を検索して回答

「このプロジェクトの命名規則は？」
→ conventions.md から回答

「なぜ YAML 通信を選んだ？」
→ decisions.md から ADR を参照
```

## 関連ファイル

| ファイル | 内容 |
|----------|------|
| `decisions.md` | ADR（技術的決定） |
| `bugs-resolved.md` | 解決済みバグ |
| `conventions.md` | コーディング規約 |

---

*このスキルは project Memory を活用してセッション間で知識を共有します*

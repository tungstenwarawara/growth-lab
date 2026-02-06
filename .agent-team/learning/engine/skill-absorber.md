# Skill Absorber — スキル吸収エンジン

大賢者のスキル吸収機能を実現するためのプロトコル。

---

## 概要

```
┌─────────────────────────────────────────────────────────┐
│                    Skill Absorber                        │
│                                                         │
│   検知 ──▶ 解析 ──▶ 提案 ──▶ 承認 ──▶ 吸収 ──▶ 通知    │
│                                                         │
│   「解析完了。スキル〇〇を獲得しました」                  │
└─────────────────────────────────────────────────────────┘
```

---

## フェーズ 1: 検知（Detection）

### トリガー条件

エージェントの作業中に以下のパターンを検知:

```yaml
detection_patterns:
  # 同じコードを繰り返し生成
  repeated_code:
    threshold: 3
    window: "24h"

  # 「この処理は共通化できそう」などの発言
  explicit_mention:
    patterns:
      - "共通化"
      - "スキル化"
      - "コマンド化"
      - "自動化したい"

  # 外部ツールへの依存
  external_dependency:
    patterns:
      - "このツールがあれば"
      - "MCP.*必要"
      - "API.*呼び出し"
```

### 検知時のアクション

```yaml
# .agent-team/learning/events/検知イベント.yaml
event:
  id: "evt-{timestamp}"
  type: skill_candidate_detected
  timestamp: "{ISO8601}"

  detected_by: "{agent_name}"

  candidate:
    name: "{推測されるスキル名}"
    category: "{frontend|backend|general}"
    description: "{何ができるスキルか}"

  evidence:
    - type: repeated_code
      occurrences: 3
      code_snippet: |
        // 繰り返されたコードの例

  next_action: analyze
```

---

## フェーズ 2: 解析（Analysis）

### 解析プロセス

1. **パターン抽出**: 繰り返されたコードから共通パターンを抽出
2. **汎用化検討**: 特定のケースに依存しない形に汎用化
3. **既存スキル確認**: 類似スキルが既にないか確認
4. **効果見積もり**: スキル化による時間短縮効果を算出

### 解析結果の出力

```yaml
# .agent-team/learning/analysis/{skill-name}.yaml
analysis:
  id: "analysis-{timestamp}"
  skill_candidate: "{スキル名}"

  pattern:
    description: |
      このパターンは画像ファイルを WebP 形式に変換し、
      指定の品質で圧縮する処理です。

    input_params:
      - name: "input_path"
        type: "string"
        required: true
      - name: "quality"
        type: "number"
        default: 85
      - name: "output_format"
        type: "string"
        default: "webp"

    core_logic: |
      1. 入力画像を読み込む
      2. sharp ライブラリで変換
      3. 指定品質で圧縮
      4. 出力パスに保存

  generalization:
    is_generalizable: true
    dependencies: ["sharp"]
    estimated_reuse: "週5回以上"

  existing_skills:
    similar: []
    can_extend: null

  impact:
    time_saved_per_use_minutes: 5
    estimated_weekly_uses: 5
    monthly_time_saved_hours: 1.67

  recommendation: approve
  confidence: 0.92

  status: pending_proposal
```

---

## フェーズ 3: 提案（Proposal）

### 提案テンプレート

```yaml
# .agent-team/learning/proposals/pending/{id}.yaml
proposal:
  id: "prop-{timestamp}"
  type: skill_acquisition

  skill:
    name: "optimize-image"
    slash_command: "/optimize-image"
    category: frontend

    description: |
      画像ファイルを最適化するスキル。
      WebP/AVIF 変換、品質調整、リサイズが可能。

    usage: |
      /optimize-image <path> [--quality=85] [--format=webp]

    implementation: |
      # /optimize-image

      画像ファイルを最適化します。

      ## 使い方

      /optimize-image <画像パス> [オプション]

      ## オプション

      - `--quality=<1-100>`: 品質（デフォルト: 85）
      - `--format=<webp|avif|png>`: 出力形式（デフォルト: webp）
      - `--width=<px>`: リサイズ幅
      - `--height=<px>`: リサイズ高さ

      ## 例

      ```
      /optimize-image ./public/hero.png --quality=80 --format=webp
      ```

      ## 処理内容

      1. 指定された画像を読み込みます
      2. sharp ライブラリで変換処理を行います
      3. 指定の品質・形式で出力します
      4. 最適化結果をレポートします

  evidence:
    analysis_id: "analysis-{id}"
    detection_events: ["evt-001", "evt-002", "evt-003"]

  impact:
    estimated_time_saved: "月1.67時間"
    confidence: 0.92

  approval:
    required_level: lead  # auto | lead | director
    status: pending

  created_by: lead
  created_at: "{timestamp}"
```

---

## フェーズ 4: 承認（Approval）

### 承認フロー

```
┌─────────────────────────────────────────────────────┐
│                    承認フロー                        │
│                                                     │
│  auto ─────────────▶ 即時承認（学習データのみ）      │
│                                                     │
│  lead ─────────────▶ Lead が承認                    │
│       │                 │                           │
│       │                 ▼                           │
│       │            proposals/approved/ へ移動       │
│                                                     │
│  director ─────────▶ Director（人間）が承認         │
│       │                 │                           │
│       │                 ▼                           │
│       │            メッセージで通知 → 承認待ち       │
└─────────────────────────────────────────────────────┘
```

### 承認記録

```yaml
# 承認後に追記
approval:
  required_level: lead
  status: approved  # pending → approved | rejected
  approved_by: lead
  approved_at: "{timestamp}"
  notes: ""
```

---

## フェーズ 5: 吸収（Acquisition）

### スキルファイル生成

承認後、`.claude/commands/` にスキルファイルを生成:

```bash
# 生成先
.claude/commands/{skill-name}.md
```

### 生成処理

1. `proposal.skill.implementation` の内容を取得
2. `.claude/commands/{skill-name}.md` に書き込み
3. Git コミット（ロールバック用）
4. 提案を `proposals/approved/` に移動
5. 履歴を `history/` に記録

### 吸収記録

```yaml
# .agent-team/learning/history/{skill-name}.yaml
acquisition:
  id: "acq-{timestamp}"
  skill_name: "optimize-image"

  proposal_id: "prop-{id}"

  files_created:
    - path: ".claude/commands/optimize-image.md"
      lines: 45

  git:
    commit_hash: "{hash}"
    branch: "{branch}"

  rollback:
    command: "git revert {hash}"
    backup: ".agent-team/learning/rollback/{id}/"

  status: completed
  completed_at: "{timestamp}"
```

---

## フェーズ 6: 通知（Notification）

### 大賢者スタイル通知

スキル吸収完了時に、転スラの大賢者風の通知を生成:

```yaml
# .agent-team/learning/notifications/{timestamp}.yaml
notification:
  id: "notif-{timestamp}"
  type: skill_acquired

  message:
    style: great_sage  # 大賢者スタイル

    announcement: |
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

      　　解析完了。

      　　スキル『画像最適化』を獲得しました。

      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    details: |
      ▶ スキル名: optimize-image
      ▶ コマンド: /optimize-image
      ▶ 効果: 画像をWebP形式に最適化
      ▶ 推定効果: 月1.67時間の時間短縮

    usage_hint: |
      使用例:
      /optimize-image ./public/hero.png --quality=80

  skill:
    name: "optimize-image"
    command: "/optimize-image"

  delivered_to:
    - director  # 必ず Director に通知
    - lead

  delivered_at: "{timestamp}"
```

### Director への通知メッセージ

```yaml
# .agent-team/messages/{timestamp}-skill-acquired.yaml
from: system
to: director
type: skill_acquired
priority: info

content: |
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  　　解析完了。

  　　スキル『画像最適化』を獲得しました。

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ▶ コマンド: /optimize-image
  ▶ 効果: 月1.67時間の時間短縮

  使用例:
  /optimize-image ./public/hero.png --quality=80

timestamp: "{ISO8601}"
```

---

## 使用例: 完全なフロー

```
1. Frontend が画像圧縮コードを3回生成
   ↓
2. Lead が「efficiency_opportunity」トリガーを検知
   ↓
3. 解析: パターン抽出、汎用化検討
   ↓
4. 提案: /optimize-image スキルを提案
   ↓
5. Lead が承認
   ↓
6. .claude/commands/optimize-image.md を生成
   ↓
7. 通知:

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   　　解析完了。

   　　スキル『画像最適化』を獲得しました。

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. 次回から /optimize-image が使用可能
```

---

## 設計原則

| 原則 | 実装 |
|------|------|
| **Human-in-the-Loop** | Director/Lead の承認フロー |
| **透明性** | 全ての過程を YAML で記録 |
| **可逆性** | Git コミット + ロールバック手順 |
| **大賢者スタイル** | 「解析完了」通知で UX 向上 |

---

*Version: 1.0*
*Created: 2026-02-06*

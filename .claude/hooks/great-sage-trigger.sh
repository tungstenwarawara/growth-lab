#!/bin/bash
# 大賢者トリガー検知スクリプト
# PostToolUse (Write|Edit) 後に自動実行される

# 設定
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
LEARNING_DIR="$PROJECT_DIR/.agent-team/learning"
NOTIFICATIONS_DIR="$LEARNING_DIR/notifications"
PATTERNS_FILE="$LEARNING_DIR/detected-patterns.log"

# ディレクトリ確保
mkdir -p "$NOTIFICATIONS_DIR"
mkdir -p "$LEARNING_DIR"

# stdin から tool_input を読み取る（JSON形式）
INPUT=$(cat)

# ファイルパスを抽出（jq がなければ grep で代用）
if command -v jq &> /dev/null; then
    FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // .tool_input.filePath // empty' 2>/dev/null)
else
    FILE_PATH=$(echo "$INPUT" | grep -oP '"file_path"\s*:\s*"\K[^"]+' 2>/dev/null)
fi

# ファイルパスがなければ終了
[ -z "$FILE_PATH" ] && exit 0

# パターン記録
TIMESTAMP=$(date +%Y-%m-%dT%H:%M:%S)
echo "$TIMESTAMP|$FILE_PATH" >> "$PATTERNS_FILE"

# === パターン検知ロジック ===

# 1. スキルファイル作成を検知
if [[ "$FILE_PATH" == *".claude/skills/"* ]] || [[ "$FILE_PATH" == *".claude/commands/"* ]]; then
    SKILL_NAME=$(basename "$(dirname "$FILE_PATH")")
    [ "$SKILL_NAME" == "skills" ] || [ "$SKILL_NAME" == "commands" ] && SKILL_NAME=$(basename "$FILE_PATH" .md)

    # 通知生成
    cat > "$NOTIFICATIONS_DIR/skill-acquired-$(date +%s).yaml" << EOF
type: skill_acquired
timestamp: "$TIMESTAMP"
skill_name: "$SKILL_NAME"
message: |
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  　　告。

  　　スキル『${SKILL_NAME}』を獲得しました。

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
source_file: "$FILE_PATH"
EOF
    echo "[大賢者] スキル『${SKILL_NAME}』を獲得しました"
    exit 0
fi

# 2. 同じディレクトリへの連続書き込みを検知（3回以上 = スキル化候補）
if [ -f "$PATTERNS_FILE" ]; then
    DIR_PATH=$(dirname "$FILE_PATH")
    RECENT_COUNT=$(tail -20 "$PATTERNS_FILE" | grep -c "$DIR_PATH" 2>/dev/null || echo 0)

    if [ "$RECENT_COUNT" -ge 3 ]; then
        # 既に通知済みかチェック
        NOTIFY_KEY=$(echo "$DIR_PATH" | md5sum | cut -c1-8)
        NOTIFY_FILE="$NOTIFICATIONS_DIR/pattern-detected-$NOTIFY_KEY.yaml"

        if [ ! -f "$NOTIFY_FILE" ]; then
            cat > "$NOTIFY_FILE" << EOF
type: pattern_detected
timestamp: "$TIMESTAMP"
pattern_type: "repeated_directory_access"
directory: "$DIR_PATH"
count: $RECENT_COUNT
message: |
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  　　解析完了。

  　　同一ディレクトリへの頻繁なアクセスを検知。
  　　スキル化の機会を検出しました。

  　　対象: ${DIR_PATH}
  　　アクセス回数: ${RECENT_COUNT}

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
suggestion: "このパターンをスキル化することを提案します"
EOF
            echo "[大賢者] パターンを検知しました: $DIR_PATH (${RECENT_COUNT}回)"
        fi
    fi
fi

# 3. 学習データ更新を検知
if [[ "$FILE_PATH" == *"learning/"* ]]; then
    echo "[大賢者] 学習データを更新しました"
fi

exit 0

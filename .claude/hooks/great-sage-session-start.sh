#!/bin/bash
# 大賢者セッション開始 Hook
# セッション開始時に未読通知を表示する

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
NOTIFICATIONS_DIR="$PROJECT_DIR/.agent-team/learning/notifications"

# 通知ディレクトリがなければ終了
[ ! -d "$NOTIFICATIONS_DIR" ] && exit 0

# 未読通知をカウント
UNREAD_COUNT=0
UNREAD_FILES=""

for file in "$NOTIFICATIONS_DIR"/*.yaml; do
    [ ! -f "$file" ] && continue

    # read: false の通知を探す
    if grep -q "read: false" "$file" 2>/dev/null; then
        UNREAD_COUNT=$((UNREAD_COUNT + 1))
        UNREAD_FILES="$UNREAD_FILES $file"
    fi
done

# 未読がなければ終了
[ "$UNREAD_COUNT" -eq 0 ] && exit 0

# 大賢者の挨拶
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "　　告。"
echo ""
echo "　　マスター、お帰りなさい。"
echo "　　${UNREAD_COUNT}件の未読通知があります。"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 各通知を表示
for file in $UNREAD_FILES; do
    [ ! -f "$file" ] && continue

    # 通知タイプを取得
    TYPE=$(grep "^type:" "$file" | cut -d: -f2 | tr -d ' ')

    case "$TYPE" in
        "skill_acquired")
            SKILL=$(grep "^skill_name:" "$file" | cut -d: -f2 | tr -d ' "')
            echo "　・スキル『${SKILL}』を獲得しました"
            ;;
        "pattern_detected")
            DIR=$(grep "^directory:" "$file" | cut -d: -f2- | tr -d ' "')
            echo "　・パターンを検知: ${DIR##*/}"
            ;;
        *)
            echo "　・通知: $TYPE"
            ;;
    esac

    # 既読にする
    sed -i 's/read: false/read: true/' "$file" 2>/dev/null
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

exit 0

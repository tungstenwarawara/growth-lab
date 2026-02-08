# Hooks テスト

このファイルは Hooks の動作確認用です。

## 修正後のフォーマット

```json
"PreToolUse": [{
  "matcher": "Write|Edit",
  "hooks": [{ "type": "command", "command": "echo '[Hook] triggered'" }]
}]
```

## テスト履歴

1. 2026-02-08 初回: 設定フォーマットが間違っていた
2. 2026-02-08 修正後: 正しいフォーマットに更新

※ セッション中は設定再読み込みが必要な場合あり

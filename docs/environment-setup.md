# 環境セットアップガイド

**目的**: 私用PC・社用PCの環境差異を把握し、どちらでも作業できるようにする

---

## 1. 環境比較

| 項目 | 私用PC | 社用PC |
|------|--------|--------|
| Chrome MCP | 接続済み | 未設定 |
| filesystem MCP | 接続済み | 接続済み |
| git MCP | 接続済み | 接続済み |
| memory MCP | 接続済み | 接続済み |
| SNS巡回（Zenn/note/X/BOOTH） | Chrome MCP で可能 | **不可**（WebFetch は全サイト 403） |
| BOOTH管理画面（売上確認） | Chrome MCP で可能 | 不可 |

## 2. WebFetch の制限（2026-02-09 確認）

以下のサイトは WebFetch でアクセス不可（403 Forbidden）:

- `zenn.dev` — ボット検出でブロック
- `note.com` — ボット検出でブロック
- `booth.pm` — ボット検出でブロック
- `x.com` — ログイン必須のため取得不可

**結論**: SNS巡回・メトリクス取得には **Chrome MCP が必須**。
WebFetch はフォールバックとして機能しない。

## 3. Chrome MCP セットアップ手順

社用PCに Chrome MCP を追加する場合:

### 3.1 インストール

```bash
# Chrome MCP サーバーのインストール（具体的なパッケージは私用PCの設定を確認）
# 私用PCの .mcp.json から Chrome MCP の設定をコピーする
```

### 3.2 .mcp.json への追加

```jsonc
// .mcp.json の mcpServers に追加
{
  "chrome": {
    "command": "...",  // 私用PCの設定を転記
    "args": ["..."],
    "description": "Chrome ブラウザ操作（SNS巡回・投稿）"
  }
}
```

### 3.3 注意点

- Chrome MCP の設定は `.mcp.json` に記載すれば git で共有可能
- ただしブラウザのログインセッション（BOOTH管理画面等）は各PCで個別にログインが必要
- **TODO**: 私用PCの Chrome MCP 設定を `.mcp.json` に追記してコミットする

## 4. PC別の作業分担ガイド

| 作業内容 | 私用PC | 社用PC |
|---------|--------|--------|
| SNS巡回・メトリクス取得 | **推奨** | 不可 |
| BOOTH売上確認 | **推奨** | 不可 |
| X/note への投稿 | **推奨** | 不可 |
| コード実装・リファクタリング | 可能 | 可能 |
| ドキュメント作成・更新 | 可能 | 可能 |
| Skill 定義の編集 | 可能 | 可能 |
| 記事ドラフト作成 | 可能 | 可能 |
| registry.yaml の手動更新 | 可能 | 可能 |
| git push / PR 作成 | 可能 | 可能 |

## 5. 同期ルール

- 各PCで作業後は **必ず main にマージしてからプッシュ**する
- Chrome MCP 設定は `.mcp.json` で共有する（次回私用PCで対応）
- registry.yaml のメトリクス更新は私用PC（Chrome MCP あり）で実行

---

*作成: 2026-02-09*

# /optimize-image

画像ファイルを最適化します。WebP/AVIF形式への変換、品質調整、リサイズが可能です。

## 使い方

```
/optimize-image <画像パス> [オプション]
```

## オプション

| オプション | 説明 | デフォルト |
|-----------|------|-----------|
| `--quality=<1-100>` | 品質（1-100） | 85 |
| `--format=<形式>` | 出力形式（webp, avif, png, jpg） | webp |
| `--width=<px>` | リサイズ幅 | 元のサイズ |
| `--height=<px>` | リサイズ高さ | 元のサイズ |
| `--output=<パス>` | 出力先 | 元のパスに拡張子変更 |

## 例

### 基本的な使い方
```
/optimize-image ./public/hero.png
```
→ `./public/hero.webp` を生成（品質85%）

### 品質を指定
```
/optimize-image ./public/hero.png --quality=70
```

### AVIF形式で出力
```
/optimize-image ./public/hero.png --format=avif --quality=60
```

### リサイズして最適化
```
/optimize-image ./public/hero.png --width=800 --format=webp
```

## 処理内容

1. 指定された画像ファイルを読み込みます
2. sharp ライブラリで以下の処理を行います:
   - 形式変換（WebP/AVIF/PNG/JPG）
   - 品質調整
   - リサイズ（指定時）
3. 最適化された画像を出力します
4. 最適化結果をレポートします:
   - 元のサイズ
   - 最適化後のサイズ
   - 圧縮率

## 依存関係

- `sharp` パッケージが必要です
- インストール: `npm install sharp`

## 注意事項

- 元のファイルは上書きされません
- 大きな画像（10MB以上）は処理に時間がかかる場合があります
- AVIF形式は一部のブラウザで非対応です

---

*このスキルは Self-Improvement Loop によって自動生成されました*
*獲得日: 2026-02-06*
*提案ID: prop-20260206-001*

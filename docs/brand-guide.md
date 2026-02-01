# Growth Lab Brand Guide

## Overview

Growth Labは、Claude Codeを活用した個人開発プロジェクトです。「Build in Public」の精神で、開発過程と収益を透明に公開しながら、日本の開発者コミュニティに価値を提供します。

---

## Brand Identity

### Mission
Claude Codeの開発速度を活かし、ストック型収益を積み上げて投資を回収する。

### Values
1. **透明性** — 数字も失敗も隠さない
2. **スピード** — 完璧より出荷
3. **実用性** — 自分が使いたいものを作る
4. **共有** — 学びはコミュニティに還元

### Positioning
「Claude Codeで個人開発を加速する人」

---

## Visual Identity

### Colors

#### Primary
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Blue | `#1E40AF` | Primary actions, links |
| Electric Blue | `#3B82F6` | Hover states, accents |

#### Secondary
| Color | Hex | Usage |
|-------|-----|-------|
| Slate | `#475569` | Body text |
| Light Gray | `#F1F5F9` | Backgrounds |

#### Accent
| Color | Hex | Usage |
|-------|-----|-------|
| Emerald | `#10B981` | Success, positive metrics |
| Amber | `#F59E0B` | Warnings, attention |
| Rose | `#F43F5E` | Errors, urgent |

### Typography

#### Headings
- Font: **Inter** (or system-ui fallback)
- Weight: 600-700
- Tracking: -0.02em

#### Body
- Font: **Inter** (or system-ui fallback)
- Weight: 400-500
- Line height: 1.6

#### Code
- Font: **JetBrains Mono** (or monospace fallback)
- Size: 0.9em relative to body

### Tailwind Config
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3B82F6',
          dark: '#1E40AF',
          light: '#60A5FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  }
}
```

---

## Logo

### Primary Logo
テキストベースのシンプルなロゴ:
```
Growth Lab
```
- Font: Inter Bold
- Color: Deep Blue (#1E40AF)

### Icon (for favicon, social)
- Abstract "G" or growth chart icon
- Square format for social avatars

### Usage Rules
- Minimum size: 24px height
- Clear space: 1x logo height on all sides
- Don't stretch, rotate, or add effects

---

## Voice & Tone

### Personality
- **Professional but approachable** — 専門知識を共有しつつ、親しみやすく
- **Honest and transparent** — 成功も失敗も正直に
- **Practical and actionable** — 抽象論より具体的なアドバイス

### Writing Style

#### Do
- 一人称（私/僕）を使う
- 具体的な数字を示す
- 読者に直接語りかける
- シンプルな言葉を選ぶ

#### Don't
- 過度な敬語
- 曖昧な表現
- 自慢話
- 他者の批判

### Example Phrases

**Good:**
> 「Claude Codeで3日でMVPを作った。売上はまだ¥0だけど、ユーザーフィードバックは上々」

**Avoid:**
> 「革新的なソリューションを提供し、業界をリードします」

---

## Content Guidelines

### Twitter/X
- カジュアルなトーン
- 140文字以内推奨
- ハッシュタグ: #個人開発 #ClaudeCode #BuildInPublic
- 絵文字は控えめに

### Zenn
- やや丁寧なトーン
- 技術的正確性を重視
- コード例を豊富に
- SEOを意識した構成

### Product Pages
- ベネフィット重視
- 明確なCTA
- 社会的証明を活用

---

## Image Guidelines

### Screenshots
- Clean desktop with minimal distractions
- Consistent browser window (Chrome preferred)
- Retina resolution (2x)

### OG Images
- Size: 1200 x 630 px
- Include product name and tagline
- Use brand colors
- High contrast for readability

### Code Images
- Use consistent theme (VS Code Dark+)
- Include syntax highlighting
- Crop to relevant section only

---

## Templates

### Email Signature
```
藤原由大
Growth Lab — Build in Public Developer

Twitter: @[handle]
Web: [portfolio-url]
```

### Bio (Short)
```
Claude Codeで個人開発を加速中。¥610,000の投資回収チャレンジ実施中。Build in Public。
```

### Bio (Long)
```
会社員をしながら個人開発で収益化を目指すエンジニア。Claude Codeの開発速度を活かして、Micro-SaaSとテンプレート販売で¥610,000の投資回収に挑戦中。開発過程と数字を全て公開する「Build in Public」スタイルで発信しています。
```

---

*Last updated: 2026-02*

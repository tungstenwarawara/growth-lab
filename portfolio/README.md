# Growth Lab Portfolio

Personal portfolio site for the Growth Lab project.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Deploy to Vercel:

1. Connect your GitHub repository to Vercel
2. Set the root directory to `portfolio`
3. Deploy

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/           # Base UI components
│   │   └── sections/     # Page sections
│   └── lib/
│       └── utils.ts
├── public/
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Customization

1. Update metadata in `src/app/layout.tsx`
2. Modify hero text in `src/components/sections/hero.tsx`
3. Add products in `src/components/sections/products.tsx`
4. Update social links throughout

## License

MIT

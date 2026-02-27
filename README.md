<<<<<<< HEAD
# Lepley_Nutrition
=======
# Lepley Nutrition Marketing Site

Minimal, premium marketing website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Folder Structure

```text
.
├── app/
│   ├── apply/
│   │   └── page.tsx            # Apply page
│   ├── plans/
│   │   └── page.tsx            # Pricing tiers page
│   ├── program/
│   │   └── page.tsx            # Program page
│   ├── globals.css             # Global styles + theme tokens
│   ├── layout.tsx              # Root layout + shared metadata + header/footer
│   └── page.tsx                # Home page
├── components/
│   ├── forms/
│   │   └── ApplyForm.tsx       # Functional apply form (logs submit + success state)
│   ├── layout/
│   │   ├── SiteFooter.tsx      # Global footer
│   │   └── SiteHeader.tsx      # Global header/nav
│   └── ui/
│       ├── Button.tsx          # Reusable button/link component
│       ├── Container.tsx       # Shared max-width wrapper
│       └── Section.tsx         # Shared section spacing wrapper
├── lib/
│   └── plans.ts                # Plan types/data and future billing hook
├── public/
│   └── images/
│       └── README.md           # Required image filenames
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## Required Images

Place these files in `public/images/`:

- `kaylie-profile.jpg`
- `physique-1.jpg`
- `physique-2.jpg`
- `lifestyle-1.jpg`
- `client-1.jpg`
- `client-2.jpg`
- `client-3.jpg`
>>>>>>> 638cab4 (Initial site)

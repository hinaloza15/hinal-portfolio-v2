# Hinal Oza Portfolio

React + Vite portfolio for AI, analytics, and software engineering work.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

## If replacing an older broken copy

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

This version intentionally has **no lucide-react dependency**. All icons are local SVG React components in `src/components/Icons.jsx`, which avoids package-export compatibility issues.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Main sections

- Hero
- Featured Work
- About
- Experience
- Education
- Skills
- More Projects
- Beyond the Terminal
- Contact

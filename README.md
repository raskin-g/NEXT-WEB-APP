## Getting Started
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Without `src` directory
- `/app`

## With `src` directory
- `/src/app`

## Nextjs Routing
- `/app/[folder]` with `page.tsx` as your route file
- `layout.tsx` and `page.tsx`

## Rendering
- Every files is by default a server side component -> Build and render from server
- Any component having  `'use client';` this on top, is a client side component
- Only Server side component can be `async`
- Only `client side component` can have `hooks` inside the component
- Only server side component can have meta properties


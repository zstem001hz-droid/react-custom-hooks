# React Custom Hooks

## Description

A custom hooks implementation lab built with React and TypeScript, demonstrating reusable hook patterns for pagination and debounced search functionality.

## Features

- [📄] `usePagination` hook with full pagination logic
- [ ] `useDebounce` hook for debounced value updates
- [ ] `PaginationDemo` component showcasing usePagination
- [ ] `DebounceSearchDemo` component showcasing useDebounce

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vitejs.dev/)

## Project Structure

```
src/
├── components/
│   ├── PaginationDemo.tsx      ← demonstrates usePagination hook
│   └── DebounceSearchDemo.tsx  ← demonstrates useDebounce hook
├── hooks/
│   ├── usePagination.ts        ← pagination logic hook
│   └── useDebounce.ts          ← debounce logic hook
├── App.css                     ← cleared, reserved for future styles
├── App.tsx                     ← root component
├── index.css                   ← base reset and font styles
└── main.tsx                    ← React entry point
```

## Getting Started

```bash
npm install
npm run dev
```

## References

## References
- [useMemo — React Docs](https://react.dev/reference/react/useMemo)
- [Math.ceil — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
- [Math.min — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [Math.max — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

## Reflections

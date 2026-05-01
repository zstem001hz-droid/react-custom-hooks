# 📄 React Custom Hooks

## Description

A custom hooks implementation lab built with React and TypeScript, demonstrating reusable hook patterns for pagination and debounced search functionality.

## Features

- ✅ `usePagination` hook with full pagination logic
- ✅ `useDebounce` hook for debounced value updates
- ✅ `PaginationDemo` component showcasing usePagination
- 📜 `DebounceSearchDemo` component showcasing useDebounce

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

### React
- [useState — React Docs](https://react.dev/reference/react/useState)
- [useEffect — React Docs](https://react.dev/reference/react/useEffect)
- [useMemo — React Docs](https://react.dev/reference/react/useMemo)
- [useCallback — React Docs](https://react.dev/reference/react/useCallback)
- [Building Your Own Hooks — React Docs](https://react.dev/learn/reusing-logic-with-custom-hooks)

### JavaScript
- [setTimeout — MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [clearTimeout — MDN](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)
- [Math.ceil — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
- [Math.min — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [Math.max — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
- [Array.prototype.slice — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.from — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

### TypeScript
- [TypeScript Generics — TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/generics.html)

### Tools
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Reflections

Custom hooks allow complex logic to be extracted from components and reused anywhere in the application. The most important concept in this lab was understanding that hooks are just functions — the `use` prefix and the Rules of Hooks are what make them special.

`usePagination` demonstrated how `useMemo` can optimize derived calculations so they only rerun when their dependencies change, rather than on every render.

`useDebounce` demonstrated the cleanup pattern from Lesson 2 in a practical context — without `clearTimeout` in the cleanup function, every keystroke would stack timers and the debounce would not work correctly.

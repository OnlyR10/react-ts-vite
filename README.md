## Стек

| Категория      | Технология             |
| -------------- | ---------------------- |
| UI             | React 19               |
| Язык           | TypeScript 5           |
| Сборщик        | Vite 8                 |
| Стили          | Tailwind CSS 4         |
| Линтер         | ESLint 9 (flat config) |
| Форматирование | Prettier 3             |
| Git-хуки       | Husky + lint-staged    |
| SVG            | vite-plugin-svgr       |

В зависимостях зарезервированы `zustand` и `@tanstack/react-query` — подключаются при первом реальном use-case.

---

## Требования

- Node.js 20+
- npm 10+

---

## Быстрый старт

```bash
npm install
npm run dev
```

Dev-сервер: `http://localhost:3000`

---

## Структура проекта (FSD)

Слои расположены сверху вниз — каждый слой импортирует только из тех, что ниже.

```
src/
├── app/        # entrypoint, компоновка приложения
├── pages/      # сборка страниц из виджетов и фич
├── widgets/    # крупные UI-блоки
├── features/   # пользовательские сценарии
├── entities/   # бизнес-сущности
└── shared/     # UI-примитивы, утилиты, типы
```

Текущий демонстрационный поток:

```
app
└── pages/home
    ├── widgets/profile-panel
    │   ├── features/profile-greeting
    │   │   └── entities/profile
    │   └── entities/profile
    │       └── shared/ui/icons
    ├── features/profile-greeting
    └── entities/profile
```

---

## Alias-импорты

Для межслойных импортов используются только alias:

```
@app/*       →  src/app/*
@pages/*     →  src/pages/*
@widgets/*   →  src/widgets/*
@features/*  →  src/features/*
@entities/*  →  src/entities/*
@shared/*    →  src/shared/*
@/*          →  src/*
```

### Правила границ

Настроены в `eslint.config.js` через `no-restricted-imports`:

- `../` в чужой слой — ошибка;
- импорт из слоя выше текущего — ошибка;
- обе формы alias проверяются: `@shared/...` и `@/shared/...`.

## Команды

| Команда                | Описание                              |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Запуск dev-сервера                    |
| `npm run build`        | Production-сборка                     |
| `npm run preview`      | Просмотр production-сборки локально   |
| `npm run lint`         | Проверка ESLint                       |
| `npm run typecheck`    | Проверка TypeScript                   |
| `npm run format`       | Форматирование кода                   |
| `npm run format:check` | Проверка форматирования без изменений |

---

## Pre-commit

Перед каждым коммитом `.husky/pre-commit` запускает:

1. **lint-staged**
   - `*.{ts,tsx}` → `prettier --write` + `eslint --fix`
   - `*.{js,json,css,md}` → `prettier --write`
2. **typecheck** — если падает, коммит блокируется

---

## Проверка перед PR

```bash
npm run lint
npm run typecheck
npm run build
```

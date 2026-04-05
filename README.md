## Требования

- `Node.js` 20+
- `npm` 10+

## Быстрый старт

```bash
npm install
npm run dev
```

Приложение запускается на `http://localhost:3000`.

## Минимальная структура слоев

На старте проекта фиксируем 6 слоев:

- `src/app` - композиция приложения (entrypoint, роутинг, связка экранов/фич);
- `src/pages` - сборка экранов из widgets/features/entities;
- `src/widgets` - крупные UI-блоки, собирающие несколько features/entities;
- `src/entities` - бизнес-сущности, их модели и базовые представления;
- `src/features` - пользовательские сценарии и feature-модули;
- `src/shared` - переиспользуемые UI-элементы, утилиты и типы без бизнес-логики.

## Правила импортов через alias

Используем alias для межслойных импортов:

- `@app/*` -> `src/app/*`
- `@pages/*` -> `src/pages/*`
- `@widgets/*` -> `src/widgets/*`
- `@entities/*` -> `src/entities/*`
- `@features/*` -> `src/features/*`
- `@shared/*` -> `src/shared/*`
- `@/*` -> `src/*` (общий alias)

Ограничения:

- межслойные импорты через `../` запрещены (ESLint `no-restricted-imports`);
- `shared` не импортирует `app`, `pages`, `widgets`, `entities`, `features`;
- `entities` не импортирует `app`, `pages`, `widgets`, `features`;
- `features` не импортирует `app`, `pages`, `widgets`;
- `widgets` не импортирует `app`, `pages`;
- `pages` не импортирует `app`.

## Команды проекта

- `npm run dev` - запуск dev-сервера
- `npm run build` - production-сборка (`tsc -b && vite build`)
- `npm run preview` - локальный просмотр production-сборки
- `npm run lint` - проверка `eslint`
- `npm run typecheck` - проверка типов TypeScript
- `npm run format` - автоформатирование `prettier --write .`
- `npm run format:check` - проверка форматирования без изменений

## Правила pre-commit

Перед каждым коммитом автоматически выполняется `.husky/pre-commit`:

1. `npx lint-staged`
2. `npm run typecheck`

Что это означает на практике:

- для `*.{ts,tsx}` запускаются `prettier --write` и `eslint --fix`;
- для `*.{js,json,css,md}` запускается `prettier --write`;
- если типизация падает, коммит блокируется до исправления ошибок.

## Типовой порядок проверки перед PR

Рекомендуемый локальный прогон:

```bash
npm run lint
npm run typecheck
npm run build
```

Если нужно, затем привести формат:

```bash
npm run format
```

## Как чинить типовые ошибки

### 1. Падает pre-commit на `lint-staged`

Признаки: ошибки `eslint`/`prettier` в измененных файлах.

Порядок действий:

1. Применить автоисправления:
   ```bash
   npx lint-staged
   ```
2. Если остались ошибки, исправить вручную в указанных файлах.
3. Повторить коммит.

### 2. Падает pre-commit на `typecheck`

Признаки: ошибки TypeScript после шага `npm run typecheck`.

Порядок действий:

1. Запустить отдельно:
   ```bash
   npm run typecheck
   ```
2. Исправить ошибки типов (импорты, сигнатуры, null/undefined, несовместимые типы).
3. Повторно проверить:
   ```bash
   npm run typecheck
   ```
4. Повторить коммит.

### 3. Сборка не проходит

Признаки: `npm run build` падает, даже если `lint` и `typecheck` прошли.

Порядок действий:

1. Запустить:
   ```bash
   npm run build
   ```
2. Исправить ошибки сборки (чаще всего: некорректные импорты/пути, runtime-несовместимости).
3. Повторить полный цикл проверки перед PR.

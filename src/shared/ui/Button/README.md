# Button Guide

Компонент: `@/shared/ui/Button`

### Базовые правила

- Для визуального типа кнопки используем `variant`.
- Для размера используем `size`.
- Для кнопки-иконки используем `isIconOnly` и обязательно задаем `aria-label`.
- Для ошибочного состояния используем `isInvalid` (или напрямую `aria-invalid`).
- Для disabled-состояния используем стандартный `disabled`.
- Для рендера как другого элемента (например, ссылка) используем `asChild`.

### Варианты (`variant`)

- `default`
- `secondary`
- `destructive`
- `outline`
- `ghost`
- `link`

### Размеры (`size`)

- `default`
- `xs`
- `sm`
- `lg`

### API

- `variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"`
- `size?: "default" | "xs" | "sm" | "lg"`
- `isIconOnly?: boolean`
- `isInvalid?: boolean`
- `asChild?: boolean`
- `className?: string`
- `"aria-invalid"?: boolean | "true" | "false" | "grammar" | "spelling"`
- Все стандартные пропсы `button` (`type`, `disabled`, `onClick`, и т.д.)

### Примеры использования

```tsx
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/shared/ui/Button";

// Базовая
<Button>Default</Button>;

// Варианты
<Button variant="secondary">Secondary</Button>;
<Button variant="destructive">Delete</Button>;
<Button variant="outline">Outline</Button>;
<Button variant="ghost">Ghost</Button>;
<Button variant="link">Link</Button>;

// Размеры
<Button size="xs">XS</Button>;
<Button size="sm">SM</Button>;
<Button size="lg">LG</Button>;

// С иконкой
<Button>
  Next
  <ArrowRight />
</Button>;

// Только иконка
<Button isIconOnly aria-label="Go next">
  <ArrowRight />
</Button>;

// Ошибка и disabled
<Button isInvalid>Invalid state</Button>;
<Button disabled>Disabled</Button>;

// Рендер как ссылка
<Button asChild>
  <Link to="/">Back to home</Link>
</Button>;
```

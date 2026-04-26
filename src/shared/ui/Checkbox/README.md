# Checkbox Guide

Компонент: `@/shared/ui/Checkbox`

### Базовые правила

- Для disabled-состояния используем `isDisabled`.
- Для ошибок используем `isInvalid`.
- `label` и `description` отвечают за текстовую часть справа от чекбокса.
- Для контролируемого состояния используем пару `checked` + `onCheckedChange`.

### API

- `id?: string`
- `name?: string`
- `label?: ReactNode`
- `description?: ReactNode`
- `isInvalid?: boolean`
- `isDisabled?: boolean`
- `checked?: boolean | "indeterminate"`
- `onCheckedChange?: (checked: boolean | "indeterminate") => void`

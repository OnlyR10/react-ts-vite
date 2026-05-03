import { cva } from "class-variance-authority";

const buttonBase = [
  "inline-flex shrink-0 items-center justify-center rounded-4xl border border-transparent",
  "text-sm font-medium whitespace-nowrap transition-all outline-none select-none",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px",
  "disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3",
  "aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ");

export const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
      outline: "border-border bg-background hover:bg-muted",
      ghost: "hover:bg-muted hover:text-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 gap-1.5 px-3",
      xs: "h-6 gap-1 px-2.5 text-xs",
      sm: "h-8 gap-1 px-3",
      lg: "h-10 gap-1.5 px-4",
    },
    isIconOnly: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    { size: "default", isIconOnly: true, class: "size-9 px-2.5" },
    { size: "xs", isIconOnly: true, class: "size-6 px-2" },
    { size: "sm", isIconOnly: true, class: "size-8 px-2" },
    { size: "lg", isIconOnly: true, class: "size-10 px-3" },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    isIconOnly: false,
  },
});

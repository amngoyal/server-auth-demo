import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", disabled, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref as never}
        disabled={asChild ? undefined : disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "bg-foreground text-background hover:opacity-90 min-h-10 px-4 py-2",
          variant === "outline" &&
            "border border-foreground/20 bg-transparent hover:bg-foreground/5 min-h-10 px-4 py-2",
          variant === "ghost" && "hover:bg-foreground/5 min-h-9 px-3",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

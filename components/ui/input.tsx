import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border border-foreground/20 bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-foreground/30",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

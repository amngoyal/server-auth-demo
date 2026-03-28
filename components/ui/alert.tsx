import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Alert({
  className,
  variant = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" }) {
  return (
    <div
      role="alert"
      className={cn(
        "relative w-full rounded-lg border px-4 py-3 text-sm",
        variant === "default" &&
          "border-foreground/15 bg-foreground/5 text-foreground",
        variant === "destructive" &&
          "border-destructive/40 bg-destructive/10 text-destructive",
        className
      )}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  );
}

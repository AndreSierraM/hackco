import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "primary" | "success" | "warning" | "danger" | "purple" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "neutral",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    primary: "bg-blue-50 text-blue-700 border-blue-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    danger: "bg-rose-50 text-rose-700 border-rose-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    outline: "bg-transparent text-slate-700 border-slate-300",
  };

  const dotColors = {
    neutral: "bg-slate-400",
    primary: "bg-blue-600",
    success: "bg-emerald-600",
    warning: "bg-amber-600",
    danger: "bg-rose-600",
    purple: "bg-purple-600",
    outline: "bg-slate-400",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 rounded-md font-medium tracking-tight",
    md: "text-xs px-2.5 py-1 rounded-lg font-medium",
  };

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 border leading-none select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )
      )}
      {...props}
    >
      {dot && <span className={clsx("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])} />}
      {children}
    </span>
  );
}

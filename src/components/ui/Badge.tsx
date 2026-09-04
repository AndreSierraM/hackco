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
    neutral: "bg-[#F4F4F1] text-[#4A4B4F] border-[#E8E8E4]",
    primary: "bg-[#EEF4FF] text-[#1846A3] border-[#D3E2FE]",
    success: "bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]",
    warning: "bg-[#FFFBEB] text-[#92400E] border-[#FDE68A]",
    danger: "bg-[#FEF2F2] text-[#991B1B] border-[#FECACA]",
    purple: "bg-[#FAF5FF] text-[#6B21A8] border-[#E9D5FF]",
    outline: "bg-transparent text-[#3A3B40] border-[#D0D0C8]",
  };

  const dotColors = {
    neutral: "bg-[#71717A]",
    primary: "bg-[#2563EB]",
    success: "bg-[#10B981]",
    warning: "bg-[#F59E0B]",
    danger: "bg-[#EF4444]",
    purple: "bg-[#8B5CF6]",
    outline: "bg-[#71717A]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 rounded-full font-medium tracking-tight",
    md: "text-xs px-3 py-1 rounded-full font-medium",
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

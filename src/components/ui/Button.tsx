import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.985] select-none cursor-pointer tracking-tight";

    const variantStyles = {
      primary:
        "bg-[#141517] text-white hover:bg-[#222429] shadow-editorial hover:shadow-editorial-hover focus-visible:ring-[#141517] border border-transparent font-semibold",
      secondary:
        "bg-[#F4F4F1] text-[#1E2024] hover:bg-[#ECECE7] border border-[#E4E4DF] focus-visible:ring-[#141517]",
      outline:
        "bg-white/80 backdrop-blur-xs text-[#1E2024] border border-[#DCDCD5] hover:bg-white hover:border-[#141517] shadow-xs focus-visible:ring-[#141517]",
      ghost:
        "bg-transparent text-[#484A50] hover:bg-[#F0F0EB] hover:text-[#141517] focus-visible:ring-[#141517]",
      danger:
        "bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-editorial focus-visible:ring-[#DC2626] border border-transparent font-semibold",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5 font-medium",
      md: "text-sm px-4 py-2 rounded-xl gap-2 font-medium",
      lg: "text-sm sm:text-base px-5 py-2.5 rounded-xl gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(clsx(baseStyles, variantStyles[variant], sizeStyles[size], className))}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {!isLoading && leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

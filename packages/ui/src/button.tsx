"use client";

import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "lg" | "sm";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({
  size = "lg",
  variant = "primary",
  className = "",
  onClick,
  children,
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2";
  
  const sizeStyles = size === "lg" ? "px-5 py-2 text-base" : "px-3 py-1 text-sm";

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50"
      : variant === "secondary"
      ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 focus:ring-secondary/50"
      : "border border-input bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus:ring-accent/50";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

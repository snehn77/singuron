import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base = "inline-block px-6 py-3 text-sm font-medium rounded transition-colors";
  const variants = {
    primary: "bg-ink text-cream hover:bg-ink/90",
    ghost: "border border-ink/20 text-ink hover:border-ink/40",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

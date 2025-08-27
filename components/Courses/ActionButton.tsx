import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ 
  text, 
  onClick, 
  disabled = false, 
  className = "",
  type = "button" 
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-primary text-white py-2 px-4 rounded-md font-medium transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary ${className}`}
    >
      {text}
    </button>
  );
};
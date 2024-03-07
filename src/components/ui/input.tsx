"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
// import { useForm } from "react-hook-form";
import { useFormField } from "./form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { error } = useFormField();
    const borderInput =
      "flex h-10 w-80 lg:w-96 rounded-lg border bg-neutras-neutra pl-2 text-sm";
    return (
      <input
        type={type}
        className={cn(
          error
            ? `${borderInput} border-tertiary-error`
            : `${borderInput}border-neutras-gray100`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

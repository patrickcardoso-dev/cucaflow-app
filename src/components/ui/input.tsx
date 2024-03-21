"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
// import { useForm } from "react-hook-form";
import { useFormField } from "./form";
import { AlertCircle } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { error } = useFormField();
    // console.log("input:", error);
    const borderInput =
      "flex h-10 w-80 lg:w-96 rounded-lg border bg-neutras-neutra pl-2 text-sm";
    return (
      <div className="relative">
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
        {(error && type !== 'date') && (
          <AlertCircle
            size={18}
            color="#fe1b1b"
            strokeWidth={1.25}
            aria-hidden="true"
            className="absolute right-0 top-0 h-full mr-2 "
          />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

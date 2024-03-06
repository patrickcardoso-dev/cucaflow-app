'use client'
import * as React from "react";

import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,  ...props }, ref) => {
    const {  formState: { errors } } = useForm();
    return (
      <input
        type={type}
        className={cn(
          `${errors ? 'border border-tertiary-error' : 'border border-neutras-gray100'} flex h-10 w-80 lg:w-96 rounded-lg  bg-neutras-gray200 pl-2 text-sm`,
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

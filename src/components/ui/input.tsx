import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,  ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-80 lg:w-96 rounded-lg border border-neutras-gray100 bg-neutras-bgWhite pl-2 text-sm",
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

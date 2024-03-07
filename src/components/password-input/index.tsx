"use client";

import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import EyeOpen from "../icon/eyeOpen";
import { useFormField } from "../ui/form";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { error } = useFormField();
    const [showPassword, setShowPassword] = useState(false);
    const disabled =
      props.value === "" || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        {error ? (
          <AlertCircle
            size={18}
            color="#fe1b1b"
            strokeWidth={1.25}
            aria-hidden="true"
            className="absolute right-0 top-0 h-full mr-2 "
          />
        ) : (
          <Button
            type="button"
            variant="input"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 "
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeOpen aria-hidden="true" />
            ) : (
              <EyeOffIcon aria-hidden="true" />
            )}

            {error && (
              <AlertCircle
                size={16}
                color="#fe1b1b"
                strokeWidth={1.25}
                aria-hidden="true"
              />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </Button>
        )}

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };

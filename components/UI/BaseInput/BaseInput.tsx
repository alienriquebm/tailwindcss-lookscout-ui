import useInputError from "@/hooks/useInputError";
import React, { useCallback } from "react";

interface BaseInputProps {
  name: string;
  label?: string;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const BaseInput = ({
  children,
  label,
  fullWidth,
  className,
  name,
  disabled,
}: BaseInputProps) => {
  const error = useInputError(name);

  const textColor = useCallback(() => {
    if (disabled) {
      return "text-gray-200";
    }

    if (error) {
      return "text-red-500";
    }

    return "text-gray-500";
  }, [disabled, error]);

  return (
    <div
      className={`${
        fullWidth ? "w-full" : "w-[fit-content]"
      }  ${className} flex flex-col`}
    >
      {label && (
        <label
          className={`mb-1 font-inter text-xs font-medium ${textColor()}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      {children}
      {error && <div className="mt-2 text-xs text-red-500">{error}</div>}
    </div>
  );
};

export default BaseInput;

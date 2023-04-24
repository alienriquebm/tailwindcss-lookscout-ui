import useInputError from "@/hooks/useInputError";
import React, { InputHTMLAttributes } from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
  useFormContext,
} from "react-hook-form";
import BaseInput from "../../BaseInput/BaseInput";
import { InputLoadingIcon } from "@/assets/icons";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "children" | "name" | "defaultValue"
  > {
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  controllerProps?: Omit<UseControllerProps<FieldValues, string>, "name">;
  name: string;
  placeholder?: string;
  label?: string;
  loading?: boolean;
}

const Input = ({
  className,
  icon,
  fullWidth,
  name,
  label,
  controllerProps,
  placeholder,
  disabled,
  loading,
}: InputProps) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    ...controllerProps,
  });
  const error = useInputError(name);
  return (
    <BaseInput
      name={name}
      className={className}
      label={label}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <div className={`relative ${fullWidth ? "w-full" : "w-[fit-content]"}`}>
        <input
          {...field}
          disabled={disabled || loading}
          className={`${
            fullWidth ? "w-full" : "w-[fit-content]"
          }   rounded border-[1px] border-gray-300 py-2 pl-4 pr-[44px] font-inter text-sm text-gray-600 drop-shadow-input focus:border-transparent focus:text-gray-600 focus:outline-none disabled:bg-transparent disabled:text-gray-200
          ${
            error
              ? "border-red-500  focus:border-red-500"
              : "border-gray-300 focus:ring-1 focus:ring-blue-500"
          }
          disabled:border-gray-200
        `}
          type="text"
          placeholder={placeholder}
        />
        {icon && !loading && (
          <div
            className={`absolute right-[10px] top-[10px] 
              ${error ? "[&>svg]:text-red-500" : "[&>svg]:text-gray-500"}
              ${disabled ? "[&>svg]:text-gray-200" : "[&>svg]:text-gray-500"}
            `}
          >
            {icon}
          </div>
        )}
        {loading && (
          <div className="absolute right-[10px] top-[8px]">
            <InputLoadingIcon />
          </div>
        )}
      </div>
    </BaseInput>
  );
};

export default Input;

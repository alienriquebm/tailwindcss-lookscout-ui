import { InputLoadingIcon } from "@/assets/icons";
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  loading?: boolean;
  href?: string;
}

const Button = ({
  children,
  href,
  leadingIcon,
  trailingIcon,
  loading,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href}>
        <button
          disabled={loading || props.disabled}
          className="flex min-w-[114px] items-center justify-items-center rounded bg-blue-500 py-2 px-3 text-sm text-white duration-300 ease-in-out hover:bg-blue-300 hover:duration-300 hover:ease-in-out focus:border-blue-900 active:bg-blue-900 active:duration-300 active:ease-in-out disabled:bg-gray-300"
          {...props}
        >
          {leadingIcon && <span className="mr-2">{leadingIcon}</span>}
          <span className="w-full">{children}</span>
          {trailingIcon && <span className="ml-2">{trailingIcon}</span>}
        </button>
      </Link>
    );
  }

  return (
    <button
      disabled={loading || props.disabled}
      className="flex min-w-[114px] items-center justify-items-center rounded bg-blue-500 py-2 px-3 text-sm text-white duration-300 ease-in-out hover:bg-blue-300 hover:duration-300 hover:ease-in-out focus:border-blue-900 active:bg-blue-900 active:duration-300 active:ease-in-out disabled:bg-gray-300"
      {...props}
    >
      {leadingIcon && <span className="mr-2">{leadingIcon}</span>}
      <span className="w-full">{children}</span>
      {trailingIcon && !loading && <span className="ml-2">{trailingIcon}</span>}
      {loading && (
        <span className="ml-2">
          <InputLoadingIcon />
        </span>
      )}
    </button>
  );
};

export default Button;

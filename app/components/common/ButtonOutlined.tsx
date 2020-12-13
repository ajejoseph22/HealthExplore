import React from "react";
import clsx from "clsx";

export interface IButtonProps {
  className?: string;
  children?: React.ReactNode;
}
export const ButtonOutlined = (props: IButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-white border border-blue-500 text-blue-500 text-sm py-1.5 px-4 rounded-lg",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

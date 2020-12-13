import React from "react";

export interface IButtonProps {
  children?: React.ReactNode;
}
export const Button = (props: IButtonProps) => {
  return (
    <button className="bg-blue-500 text-white text-sm py-1.5 px-4 rounded-lg">
      {props.children}
    </button>
  );
};

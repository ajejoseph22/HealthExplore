import React from "react";

export interface ISearchInputProps {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchInput = (props: ISearchInputProps) => {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-8">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input
        type="search"
        name="q"
        className="py-4 text-sm text-gray-900 bg-white pl-14 pr-6 focus:outline-none w-full"
        placeholder={props.placeholder}
        onChange={(value) => {
          if (props.onChange) {
            props.onChange(value);
          }
        }}
      />
    </div>
  );
};

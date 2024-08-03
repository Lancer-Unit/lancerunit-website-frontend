import React from "react";

interface InputProps {
  id?: string;
  label: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  name,
  value,
  type = "text",
  placeholder = `${label}`,
  required = false,
  handleChange,
}) => (
  <div className="flex flex-col mb-4">
    <label
      htmlFor={id}
      className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-0.5"
    >
      {label}
    </label>
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
      required={required}
      name={name}
      value={value}
      onChange={handleChange}
    />
  </div>
);

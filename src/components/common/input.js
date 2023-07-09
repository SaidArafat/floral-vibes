import React from "react";

const Input = ({
  label,
  value,
  name,
  type,
  placeholder,
  onChange,
  error,
  focus = false,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="block mb-1 capitalize ml-2" htmlFor={label}>
        {label}
      </label>
      <input
        className="block w-full px-4 py-2 border border-primary rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
        id={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoFocus={focus}
        placeholder={placeholder}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Input;

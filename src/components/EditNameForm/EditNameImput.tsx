import React from "react";

type EditNameInputProps = {
  label: string;
  id: string;
  type: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
};

const EditNameInput: React.FC<EditNameInputProps> = ({
  label,
  id,
  type,
  value,
  handleChange,
  disabled,
  placeholder,
}) => {
  return (
    <div className='flex gap-4 items-center justify-between'>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        /*    placeholder={placeholder} */
        className={`border border-gray-300 rounded p-1
        ${disabled ? "text-gray-500 bg-gray-300" : ""}
        `}
        disabled={disabled}
      />
    </div>
  );
};

export default EditNameInput;

import React from "react";

type InputWrapperProps = {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWrapper: React.FC<InputWrapperProps> = ({
  label,
  type,
  id,
  value,
  onChange,
}) => (
  <div className='input-wrapper'>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputWrapper;

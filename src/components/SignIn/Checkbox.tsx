import React from "react";

type RememberMeCheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

const RememberMeCheckbox: React.FC<RememberMeCheckboxProps> = ({
  checked,
  onChange,
}) => (
  <div className='input-remember'>
    <input
      type='checkbox'
      id='remember-me'
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor='remember-me'>Remember me</label>
  </div>
);

export default RememberMeCheckbox;

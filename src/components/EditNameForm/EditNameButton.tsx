import React from "react";

type EditNameButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const EditnameButton: React.FC<EditNameButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='bg-primary text-white text-sm grow rounded'
    >
      {text}
    </button>
  );
};

export default EditnameButton;

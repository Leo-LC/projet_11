import React from "react";

type AccountDetailsLineProps = {
  label: string;
  content: React.ReactNode;
};

const AccountDetailsLine: React.FC<AccountDetailsLineProps> = ({
  label,
  content,
}) => {
  return (
    <div className='details_detailed_line grid grid-cols-custom gap-2'>
      <span>{label}</span>
      <span>{content}</span>
      <span></span>
      <span></span>
    </div>
  );
};

export default AccountDetailsLine;

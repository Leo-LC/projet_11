import React from "react";

type AccountDetailsSection = {
  lines: React.ReactNode[];
};

const AccountDetailsSection: React.FC<AccountDetailsSection> = ({ lines }) => {
  return (
    <div className='details_detailed col-span-5 grid grid-rows-3 gap-1'>
      {lines}
    </div>
  );
};

export default AccountDetailsSection;

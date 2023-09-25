import React from "react";

type AccountDetailsSection = {
  lines: React.ReactNode[];
  className?: string;
};

const AccountDetailsSection: React.FC<AccountDetailsSection> = ({
  lines,
  className,
}) => {
  return (
    <div
      className={`details_detailed col-span-5 grid grid-rows-3 gap-1 ${className}`}
    >
      {lines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

export default AccountDetailsSection;

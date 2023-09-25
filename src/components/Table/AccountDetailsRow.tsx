import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AccountDetailsRowProps = {
  date: string;
  description: string;
  amount: string;
  balance: string;
  onClick: () => void;
};

const AccountDetailsRow: React.FC<AccountDetailsRowProps> = ({
  date,
  description,
  amount,
  balance,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className='details_summary grid grid-cols-custom col-span-5 gap-4'
    >
      <span>{date}</span>
      <span>{description}</span>
      <span>{amount}</span>
      <span>{balance}</span>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};
export default AccountDetailsRow;

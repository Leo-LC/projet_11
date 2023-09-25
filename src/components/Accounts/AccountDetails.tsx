import { faChevronDown, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PopoverBasic from "../Basics/Popover";
import AccountDetailsLine from "../Table/AccountDetailsLine";
import AccountDetailsRow from "../Table/AccountDetailsRow";
import AccountDetailsSection from "../Table/AccountDetailsSection";

type AccountDetailsProps = {
  date: string;
  description: string;
  amount: string;
  balance: string;
};

const categories = ["Food", "Transport", "Health", "Leisure"];

const categoriesMenu = categories.map((category) => {
  return (
    <div
      className='text-left'
      key={category}
    >
      {category}
    </div>
  );
});

const textInput = (
  <input
    type='text'
    className='w-full bg-transparent border-b-2 border-white'
  />
);

const AccountDetails: React.FC<AccountDetailsProps> = ({
  date,
  description,
  amount,
  balance,
}) => {
  const detailsLines = [
    <AccountDetailsLine
      label='Transaction Type'
      content='Electronic'
    />,
    <AccountDetailsLine
      label='Category'
      content={
        <>
          Food
          <PopoverBasic
            button={<FontAwesomeIcon icon={faPencil} />}
            children={categoriesMenu}
          />
        </>
      }
    />,
    <AccountDetailsLine
      label='Note'
      content={
        <>
          Lorem Ipsum
          <PopoverBasic
            button={<FontAwesomeIcon icon={faPencil} />}
            children={textInput}
          />
        </>
      }
    />,
  ];

  return (
    <>
      <div className='grid gap-4 text-start bg-primary text-white py-1 px-2 rounded grid-rows-auto grid-cols-custom'>
        <AccountDetailsRow
          date={date}
          description={description}
          amount={amount}
          balance={balance}
        />
        <AccountDetailsSection lines={detailsLines} />
      </div>
    </>
  );
};

export default AccountDetails;

import React from "react";
import AccountDetails from "./AccountDetails";

const AccountDetailsWrapper = () => {
  const transactionList = [
    {
      date: "27/02/20",
      description: "Golden Sun Bakery",
      amount: "$12.00",
      balance: "$2,082.79",
    },
  ];

  /*   const transaction = transactionList.map((transaction, index) => (
    <AccountDetails
      key={index}
      date={transaction.date}
      description={transaction.description}
      amount={transaction.amount}
      balance={transaction.balance}
    />
  )); */

  return <AccountDetails />;
};

export default AccountDetailsWrapper;

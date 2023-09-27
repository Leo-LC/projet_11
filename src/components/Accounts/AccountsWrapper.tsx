import React from "react";
import Account from "./Account";
import AccountDetailsWrapper from "./AccountDetailsWrapper";

function AccountsWrapper() {
  const accountsData = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  const accountsList = accountsData.map((account, index) => (
    <div
      className='grid'
      key={index}
    >
      <Account
        key={index}
        title={account.title}
        amount={account.amount}
        description={account.description}
      />
      {/*  <AccountDetailsWrapper /> */}
    </div>
  ));

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='sr-only'>Accounts</h2>
      {accountsList}
      <AccountDetailsWrapper />
    </div>
  );
}

export default AccountsWrapper;

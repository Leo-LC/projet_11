import React from "react";

function TransactionsTest() {

  const transactionSchema = {
    date: "2021-09-01",
    description: {
      description: "Description",
      category: "Category",
      transactionType: "Transaction Type",
      information: "Information",
    },
    amount: 0,
  };

  const accountSchema = {
    name: "Account Name",
    balance: 0,
    transactions: [transactionSchema],
  };

  const userAccounts = [accountSchema];
}

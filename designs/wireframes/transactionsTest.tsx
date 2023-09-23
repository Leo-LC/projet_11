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

/*
API ROUTES NEEDED:

GET /api/users/:id/accounts
  response: [LIST OF ACCOUNTS]
GET /api/users/:id/accounts/:accountId
  response: [ACCOUNT]
GET /api/users/:id/accounts/:accountId/transactions
  response: [LIST OF TRANSACTIONS]
GET /api/users/:id/accounts/:accountId/transactions/:transactionId
  response: [TRANSACTION]
PUT /api/users/:id/accounts/:accountId/transactions/:transactionId/category
POST /api/users/:id/accounts/:accountId/transactions/:transactionId/note
 





*/

import React from "react";
import AccountDetails from "./AccountDetails";
import TableHeaderRow from "../Table/TableHeaderRow";

const AccountDetailsWrapper = () => {
  return (
    <>
      {" "}
      <TableHeaderRow />
      <AccountDetails
        date='27/02/20'
        description='Golden Sun Bakery'
        amount='$12.00'
        balance='$2,082.79'
      />
    </>
  );
};

export default AccountDetailsWrapper;

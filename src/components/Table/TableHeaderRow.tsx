import React from "react";

const TableHeaderRow: React.FC = () => {
  return (
    <div className='grid grid-cols-custom text-start py-1 px-2'>
      <span>Date</span>
      <span>Description</span>
      <span>Amount</span>
      <span>Balance</span>
      <span></span>
    </div>
  );
};

export default TableHeaderRow;

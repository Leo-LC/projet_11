import { faChevronDown, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface AccountDetailsProps {
  date?: string;
  description?: string;
  amount?: string;
  balance?: string;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({
  date,
  description,
  amount,
  balance,
}) => {
  return (
    <>
      {/* <div className='flex justify-between'>
        <span>Date</span>
        <span>Description</span>
        <span>Amount</span>
        <span>Balance</span>
        <span></span>
      </div> */}
      <div className='grid gap-4 text-start bg-primary text-white py-1 px-2 rounded grid-rows-auto grid-cols-5'>
        <div className='details_summary col-span-5 grid grid-cols-5 gap-4'>
          <span>27/02/20</span>
          <span>Golden Sun Bakery</span>
          <span>$12.00</span>
          <span>$2,082.79</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className='details_detailed col-span-5 grid grid-rows-3 gap-1'>
          <div className='details_detailed_line grid grid-cols-5 gap-2'>
            <span>Transaction Type</span>
            <span>Electronic</span>
            <span></span>
            <span></span>
          </div>
          <div className='details_detailed_line grid grid-cols-5 gap-2'>
            <span>Category</span>
            <span>
              Food <FontAwesomeIcon icon={faPencil} />
            </span>
            <span></span>
            <span></span>
          </div>
          <div className='details_detailed_line grid grid-cols-5 gap-2'>
            <span>Note</span>
            <span>
              Lorem Ipsum <FontAwesomeIcon icon={faPencil} />
            </span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default AccountDetails;

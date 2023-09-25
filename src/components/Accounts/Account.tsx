import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type AccountProps = {
  title: string;
  amount: string;
  description: string;
};

function Account({ title, amount, description }: AccountProps) {
  return (
    <section className='bg-dark_gray text-white flex text-start content-center items-center justify-between pl-4 py-4 rounded-md'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-sm'>{title}</h3>
        <p className='text-4xl'>{amount}</p>
        <p className='text-xs'>{description}</p>
      </div>
      <>
        <button className='bg-transparent'>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-4xl'
          />
        </button>
      </>
    </section>
  );
}

export default Account;

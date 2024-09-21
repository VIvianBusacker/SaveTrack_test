import React from "react";
import { FaBtc, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import Title from "./title";

const data = [
  {
    name: "Crypto",
    account: "sgomaz123@gmail.com",
    amount: "85,345.00",
    icon: (
      <div className='w-10 h-10 bg-amber-500 text-white flex items-center justify-center rounded-full'>
        <FaBtc size={24} />
      </div>
    ),
  },
  {
    name: "Visa Debit Card",
    account: "2463********8473",
    amount: "15,345.00",
    icon: (
      <div className='w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full'>
        <RiVisaLine size={24} />
      </div>
    ),
  },
  {
    name: "MasterCard",
    account: "6785********8473",
    amount: "55,345.00",
    icon: (
      <div className='w-10 h-10 bg-rose-500 text-white flex items-center justify-center rounded-full'>
        <FaCcMastercard size={24} />
      </div>
    ),
  },
  {
    name: "Paypal",
    account: "sgomaz123@gmail.com",
    amount: "35,345.00",
    icon: (
      <div className='w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full'>
        <FaPaypal size={24} />
      </div>
    ),
  },
];

const Accounts = () => {
  return (
    <div className='mt-16 py-5 md:py-20 md:w-1/3'>
      <Title title='Accounts' />
      <span className='text-sm text-gray-500 dark:text-gray-400'>
        View all your accounts
      </span>

      <div className='w-full'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-3'>
              {item.icon}
              <div>
                <p className='text-black dark:text-gray-200 text-lg font-medium'>
                  {item.name}
                </p>
                <span className='text-gray-500 text-sm'>{item.account}</span>
              </div>
            </div>

            <div>
              <p className='text-lg text-black dark:text-gray-200 font-semibold'>
                ${item.amount}
              </p>
              <span className='text-xs text-gray-500 dark:text-violet-600'>
                Account Balance
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;

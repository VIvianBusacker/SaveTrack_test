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
      <div className="w-9 h-9 bg-yellow-400 text-white flex items-center justify-center rounded-lg">
        <FaBtc size={20} />
      </div>
    ),
  },
  {
    name: "Visa Debit Card",
    account: "2463********8473",
    amount: "15,345.00",
    icon: (
      <div className="w-9 h-9 bg-blue-400 text-white flex items-center justify-center rounded-lg">
        <RiVisaLine size={20} />
      </div>
    ),
  },
  {
    name: "MasterCard",
    account: "6785********8473",
    amount: "55,345.00",
    icon: (
      <div className="w-9 h-9 bg-red-400 text-white flex items-center justify-center rounded-lg">
        <FaCcMastercard size={20} />
      </div>
    ),
  },
  {
    name: "Paypal",
    account: "sgomaz123@gmail.com",
    amount: "35,345.00",
    icon: (
      <div className="w-9 h-9 bg-indigo-400 text-white flex items-center justify-center rounded-lg">
        <FaPaypal size={20} />
      </div>
    ),
  },
];

const Accounts = () => {
  return (
    <div className="mt-10 py-8 w-full max-w-lg mx-auto">
      <Title title="Accounts" />
      <div className="w-full space-y-6 mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <div>
                <p className="text-gray-900 dark:text-gray-200 font-semibold">
                  {item.name}
                </p>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.account}
                </span>
              </div>
            </div>
            <div>
              <p className="text-xl text-gray-900 dark:text-gray-200 font-semibold">
                ${item.amount}
              </p>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Balance
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;

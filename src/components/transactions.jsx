import React from "react";
import Title from "./title";
import { RiProgress3Line } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";

const data = [
  {
    date: "2024-01-05",
    name: "Online Store",
    contact: "+1234567890",
    status: "Completed",
    source: "Credit Card",
    amount: 150,
  },
  {
    date: "2024-01-12",
    name: "Grocery Store",
    contact: "+1987654321",
    status: "Rejected",
    source: "Debit Card",
    amount: 75,
  },
  {
    date: "2024-01-20",
    name: "Utility Bill",
    contact: "+1122334455",
    status: "Pending",
    source: "Bank Transfer",
    amount: 100,
  },
  {
    date: "2024-02-03",
    name: "Restaurant",
    contact: "+1555666777",
    status: "Completed",
    source: "Cash",
    amount: 50,
  },
  {
    date: "2024-02-10",
    name: "Online Subscription",
    contact: "+1444333222",
    status: "Completed",
    source: "Credit Card",
    amount: 25,
  },
];

const Transactions = () => {
  return (
    <div className="py-10 w-full max-w-5xl mx-auto">
      <Title title="Latest Transactions" />
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <th className="py-3 px-5 font-semibold text-sm">Date</th>
              <th className="py-3 px-5 font-semibold text-sm">Name</th>
              <th className="py-3 px-5 font-semibold text-sm">Status</th>
              <th className="py-3 px-5 font-semibold text-sm">Source</th>
              <th className="py-3 px-5 font-semibold text-sm">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
              >
                <td className="py-4 px-5 text-sm">{item.date}</td>
                <td className="py-4 px-5">
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.contact}</p>
                </td>
                <td className="py-4 px-5 flex items-center gap-2 text-sm">
                  {item.status === "Pending" && (
                    <RiProgress3Line className="text-amber-500" size={18} />
                  )}
                  {item.status === "Completed" && (
                    <IoCheckmarkDoneCircle className="text-green-500" size={18} />
                  )}
                  {item.status === "Rejected" && (
                    <TiWarning className="text-red-500" size={18} />
                  )}
                  <span>{item.status}</span>
                </td>
                <td className="py-4 px-5 text-sm">{item.source}</td>
                <td className="py-4 px-5 font-medium text-sm">
                  ${item.amount}.00
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

import React from "react";
import { BsCashCoin, BsCurrencyDollar } from "react-icons/bs";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { SiCashapp } from "react-icons/si";

//Data array to represent financial statistics
const data = [
  {
    label: "Balance",            // Label for the financial stat
    amount: "100,020.00",        // Displayed amount in dollars
    increase: 10.9,              // Percentage increase or decrease
    icon: <BsCurrencyDollar size={22} />, // Icon representing the stat
  },
  {
    label: "Income",
    amount: "150,010.00",
    icon: <BsCashCoin size={22} />,
    increase: 8.9,
  },
  {
    label: "Expense",
    amount: "50,010.00",
    icon: <SiCashapp size={22} />,
    increase: -10.9, //Negative increase means a decrease
  },
];

//Icon styles for different statistics
const ICON_STYLES = [
  "bg-blue-100 text-blue-600",   // Balance
  "bg-green-100 text-green-600", // Income
  "bg-red-100 text-red-600",     // Expense
];

//Stats component rendering the financial statistics
const Stats = () => {
  return (

    //Container for the stats, responsive layout between flex-column and flex-row
    <div className='flex flex-col md:flex-row items-center justify-between gap-6 mb-16 cursor-pointer'>

{/* Looping through the data array to generate each stat box */}
    {data.map((item, index) => (
        
    //Assigning a unique key for each child element
    <div key={index + item.label} className='w-full md:min-w-[250px] flex items-center justify-between p-4 rounded-lg bg-white shadow-md dark:bg-slate-800'>



{/* Left section: icon and label/amount display */}
    <div className='flex items-center gap-4'>

{/* Icon container with dynamic background and text color */}
    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${ICON_STYLES[index]}`} >
    {item.icon} {/* Icon for the stat */}
    </div>

{/* Displaying title for "Balance, Income, and Expense" and amount => "$" */}
      <div>
      <span className='text-black-700 dark:text-gray-300 text-sm'> {/*Title name shown as "Balance, Income, and Expense*/}
      {item.label} {/* Stat label (e.g., Balance, Income) */}
      </span>
      <p className='text-xl font-medium text-black dark:text-white'> {/*Money numbers shown after the title names*/}
      ${item.amount} {/* Stat amount formatted in dollars */} 
      </p>
      </div>
      </div>


{/* Right section: percentage increase/decrease */}
        <div className='text-right'> 
        <p className={`flex items-center justify-end text-sm font-semibold ${item.increase > 0 ? "text-green-500" : "text-red-500"}`}> {/* Flex container to show the percentage change with an icon */}
        {item.increase > 0 ? <IoMdArrowUp /> : <IoMdArrowDown />}
        {(item.increase)}% {/* Displaying percentage value NOTE: if you want to not have negetive sign than do {Math.abs(item.increase)} %*/}
        </p>
{/* Small note about comparison with last year */}
        <span className='text-xs text-gray-500 dark:text-gray-400'>vs. last year</span>
        </div>


        </div>

      ))}
    </div>
  );
};

export default Stats;

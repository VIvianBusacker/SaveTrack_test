import React from "react";
import { IoFilterSharp, IoSearchOutline } from "react-icons/io5";

const Info = ({ title, subTitle }) => {
  return (

    <div className='flex flex-col md:flex-row md:items-start justify-between py-8'>


{/*This is for Dashboard & "Monitor your financial activities" */}
      <div>
        <h1 className='text-4xl font-semibold text-black dark:text-white mb-2'>
          {title}
        </h1>
        <span className='text-gray-500 dark:text-gray-400'>{subTitle}</span>
      </div>


      <div className='flex items-center gap-4'>
{/*This is for search engine*/}
        <div className='flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 bg-white dark:bg-gray-800'>
          <IoSearchOutline className='text-gray-500 dark:text-gray-400' />
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent outline-none text-gray-700 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500'/>
        </div>

{/*This is for fitlter*/}
        <button className='flex items-center gap-2 bg-black dark:bg-violet-600 py-2 px-4 rounded-full text-white'>
          <IoFilterSharp />
          <span>Filter</span>
        </button>


      </div>
    </div>
  );
};

export default Info;

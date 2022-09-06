import React from "react";
import { IoIosPeople } from "react-icons/io";
import { counterData } from "../usefullData/counterData";

const Counter = () => {
  return (
    <div className=" flex items-center justify-center w-full">
      <div className=" grid grid-cols-2 gap-y-20 lg:grid-cols-4 gap-8  w-full lg:px-10 xl:px-28 py-20 ">
        {counterData &&
          counterData.length > 0 &&
          counterData.map((item, index) => (
            <div
              key={index}
              className=" flex items-center justify-center text-center "
            >
              {item.icon}
              <div className=" ml-3">
                <h1 className=" font-Poppins text-appBlack   text-2xl">
                  {item.totalNumber} +
                </h1>
                <h2 className=" text-lightGray text-sm md:text-lg">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Counter;

import React from "react";
import { IoIosPeople } from "react-icons/io";
import { counterData } from "../usefullData/counterData";

const Counter = () => {
  return (
    <div className=" flex items-center justify-center w-full">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 mt-20 ">
        {counterData &&
          counterData.length > 0 &&
          counterData.map((item, index) => (
            <div key={index} className=" flex flex-row items-center  ">
              <div className="  w-1/4">{item.icon}</div>
              <div className=" flex flex-col items-center w-full ">
                <h1 className=" font-Poppins text-appBlack   text-2xl">
                  {item.totalNumber} +
                </h1>
                <h2 className=" text-lightGray text-sm md:text-lg text-center">
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

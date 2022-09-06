import React, { useState } from "react";
import { blogData } from "../usefullData/blogData";
import Link from "next/link";

const Blogs = () => {
  const [hoverItems, setHoverItems] = useState();
  return (
    <div className=" px-3 xl:px-44">
      <h1 className=" text-3xl text-appBlack font-Poppins mt-20">Our Blogs</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
        {blogData &&
          blogData.length > 0 &&
          blogData.map((item, index) => (
            <div key={index}>
              <img src={item.image} className=" rounded-lg" />
              <div className=" flex flex-row my-3 items-center">
                <span className=" bg-blue-200 w-fit rounded-md text-[12px] px-2 py-1 text-appBlue font-semibold">
                  {item.category}
                </span>
                <p className=" text-lightGray text-[11px] mx-2">
                  {item.createdAt}
                </p>
              </div>
              <Link href={`/blogs/${item.id}`}>
                <h1
                  onMouseOver={() => {
                    setHoverItems(index);
                  }}
                  onMouseLeave={() => setHoverItems()}
                  className={` transition-all ease-in-out duration-300 ${
                    hoverItems == index
                      ? `font-Poppins text-2xl text-appBlue`
                      : "font-Poppins text-2xl text-appBlack"
                  } cursor-pointer `}
                >
                  {item.title}
                </h1>
              </Link>
              <p className=" text-lightGray">{item.details}</p>
            </div>
          ))}
      </div>
      <div className=" flex items-center justify-center py-16">
        <button className=" bg-appBlue2 w-fit text-[12px] transition-all duration-300 ease-in-out hover:-translate-y-1 font-semibold text-white px-6 py-3 rounded-md">
          Show all Posts
        </button>
      </div>
    </div>
  );
};

export default Blogs;

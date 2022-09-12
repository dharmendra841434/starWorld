import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { formateDate, smallString } from "../utils/helper";

const Blogs = (props) => {
  const [hoverItems, setHoverItems] = useState();

  // console.log(props.data, "blogs");
  return (
    <div className=" px-2 md:px-6 lg:px-10 xl:px-20">
      <h1 className=" text-3xl text-appBlack font-Poppins mt-20">Our Blogs</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item, index) => (
            <div key={index}>
              <img src={item.images.url} className=" rounded-lg h-60 w-lg" />
              <div className=" flex flex-row my-3 items-center">
                <span className=" bg-blue-200 w-fit rounded-md text-[12px] px-2 py-1 text-appBlue font-semibold">
                  {item.category}
                </span>
                <p className=" text-lightGray text-[11px] mx-2">
                  {formateDate(item.createdAt)}
                </p>
              </div>
              <Link href={`/blogs/${item.slug}`}>
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
              <p className=" text-lightGray">
                {smallString(item.description, 150)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
export async function getStaticProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/blogs`);
  const data = await res.data.data;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { formateDate, smallString } from "../utils/helper";

const Products = (props) => {
  //console.log(props.data, "productData");
  return (
    <div className=" px-2 md:px-6 lg:px-10 xl:px-20">
      <div>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item, index) => (
            <div key={index} className=" flex flex-col md:flex-row my-20 ">
              <div className=" md:w-3/4 h-96 ">
                <img
                  src={item.images[1].url}
                  className=" rounded-xl w-full h-full"
                />
              </div>
              <div>
                <div className=" mt-4 md:mt-0 md:ml-10">
                  <Link href={`/products/${item.slug}`}>
                    <h1 className=" font-Poppins text-3xl text-appBlack transition-all duration-300 ease-in-out hover:text-appBlue2 cursor-pointer ">
                      {item.title}
                    </h1>
                  </Link>
                  <h3 className=" text-lightGray text-[12px] my-4 ">
                    {formateDate(item.createdAt)}
                  </h3>
                  <p className=" text-appBlack">
                    {smallString(item.description, 100)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/products-list`
  );
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

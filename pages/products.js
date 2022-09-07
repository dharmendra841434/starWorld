import React from "react";
import { allProducts } from "../usefullData/productsData";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className=" px-2 md:px-6 lg:px-10 xl:px-20">
      <div>
        {allProducts &&
          allProducts.length > 0 &&
          allProducts.map((item, index) => (
            <div key={index} className=" flex flex-col md:flex-row my-20 ">
              <div className=" md:w-3/4">
                <Image
                  src={item.images[index]}
                  width={2000}
                  height={1200}
                  className=" rounded-xl"
                />
              </div>
              <div>
                <div className=" mt-4 md:mt-0 md:ml-10">
                  <Link href={`/products/${item.id}`}>
                    <h1 className=" font-Poppins text-3xl text-appBlack transition-all duration-300 ease-in-out hover:text-appBlue2 cursor-pointer ">
                      {item.title}
                    </h1>
                  </Link>
                  <h3 className=" text-lightGray text-[12px] ">
                    {item.createdAt}
                  </h3>
                  <p className=" text-appBlack">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;

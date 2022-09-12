import React, { useState } from "react";
import {} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { BiRupee } from "react-icons/bi";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const DynamicProduct = (props) => {
  const [itemInex, setItemInex] = useState(0);
  const [desc, setDesc] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);

  return (
    <div className="px-3 xl:px-20">
      <div className=" hidden md:block  ">
        <div className=" flex  ">
          <div className=" w-1/4 px-3 xl:w-52  mt-10   h-1/5 xl:max-h-1/2 xl:space-y-8 md:space-y-12   flex flex-col  items-center   ">
            {props.data &&
              props.data.images.map((item, index) => (
                <div
                  key={index}
                  className="  rounded-md overflow-hidden h-full w-full  "
                  onClick={() => {
                    setItemInex(index);
                  }}
                >
                  <img
                    src={item.url}
                    className=" h-full w-full"
                    alt="products"
                  />
                </div>
              ))}
          </div>
          <div className="  w-1/2 px-3 mt-10  xl:ml-5 xl:h-[34rem]   overflow-hidden ">
            <img
              src={props.data && props.data.images[itemInex].url}
              className=" h-full w-full object-cover rounded-md"
              alt={props.data && props.data.title}
            />
            <div className=" bg-gray-300 h-[0.14rem] mt-4"></div>
          </div>
          <div className="  w-1/2 mt-10 pl-6">
            <h1 className=" text-appBlack font-Poppins text-3xl">
              {props.data && props.data.title}
            </h1>
            <h1 className=" text-third mt-4 flex items-center">
              Up to <BiRupee className=" text-lg ml-2" />{" "}
              {props.data && props.data.price}
            </h1>
            <div className=" w-full  xl:mt-16">
              <h2 className=" text-secoundry mt-3 md:text-sm xl:text-base">
                {props.data.description}
              </h2>
              <div className=" space-y-2 xl:mt-8">
                <h1 className=" flex">
                  Categories:
                  <p className=" text-secoundry ml-2">
                    {props.data && props.data.category}
                  </p>
                </h1>
              </div>
              <div className=" mt-4">
                <h1 className=" text-sm">Follow us</h1>
                <div className=" flex flex-row items-center gap-x-5 mt-2">
                  <FaFacebookF className=" text-appBlue cursor-pointer text-xl transition-all duration-300 ease-in-out hover:scale-125" />
                  <FaInstagram className=" text-appBlue cursor-pointer text-xl transition-all duration-300 ease-in-out hover:scale-125" />
                  <FaTwitter className=" text-appBlue cursor-pointer text-xl transition-all duration-300 ease-in-out hover:scale-125" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex w-full mt-10 space-x-20 border-b border-gray-300">
            <h1
              className={`${
                desc && `border-b-2 border-gray-600`
              } md:py-5 xl:py-8 cursor-pointer`}
              onClick={() => {
                setDesc(true);
                setAdditionalInfo(false);
              }}
            >
              Description
            </h1>
            <h1
              className={`${
                additionalInfo && `border-b-2 border-gray-600`
              } md:py-5 xl:py-8 cursor-pointer`}
              onClick={() => {
                setDesc(false);
                setAdditionalInfo(true);
              }}
            >
              Aditional information
            </h1>
          </div>
          {desc && (
            <div className="  py-4">
              <h1 className=" text-secoundry">{props.data.description}</h1>
            </div>
          )}
          {additionalInfo && (
            <div className="py-4 ">
              <h1 className="flex  py-2 text-secoundry">
                <p className=" text-gray-800"> Weight : </p>
                {props.data && props.data.properties[0].weight}
              </h1>
              <h1 className="flex py-2 text-secoundry">
                <p className=" text-gray-800">Dimentions : </p>
                {props.data && props.data.properties[1].dimentions}
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className=" md:hidden">
        <div className="h-56">
          <img
            src={props.data.images[itemInex].url}
            className=" h-full  w-screen rounded-xl"
          />
        </div>
        <div className=" grid grid-cols-4 gap-x-4 py-2">
          {props.data.images &&
            props.data.images.length > 0 &&
            props.data.images.map((item, index) => (
              <div
                key={index}
                className=" max-h-24"
                onClick={() => {
                  setItemInex(index);
                }}
              >
                <img src={item.url} className=" h-full rounded-lg" />
              </div>
            ))}
        </div>
        <div>
          <h1 className=" font-bold text-appBlack text-2xl">
            {props.data.title}
          </h1>
          <h2 className=" py-3">Price: $ {props.data.price}</h2>
        </div>
        <div>
          <div
            className=" flex flex-row items-center justify-between bg-gray-300 py-2 px-2 rounded-md"
            onClick={() => {
              setDesc(true);
              setAdditionalInfo(false);
            }}
          >
            <h3 className=" font-semibold">Description</h3>
            <MdOutlineKeyboardArrowDown
              className={`text-xl ${desc ? "rotate-180" : "rotate-0"}`}
            />
          </div>
          {desc && (
            <div className=" py-2">
              <h1 className=" text-sm text-lightGray">
                {props.data.description}
              </h1>
            </div>
          )}
          <div
            className=" flex flex-row items-center justify-between mt-3 bg-gray-300 py-2 px-2 rounded-md"
            onClick={() => {
              setDesc(false);
              setAdditionalInfo(true);
            }}
          >
            <h3 className=" font-semibold">Additional Info</h3>
            <MdOutlineKeyboardArrowDown
              className={`text-xl  ${
                additionalInfo ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {additionalInfo && (
            <div className=" py-2 text-sm text-lightGray">
              <h1> Weight : {props.data.properties[0].weight}</h1>
              <h1> Dimensions : {props.data.properties[1].dimentions}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicProduct;
export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/products-list/${params.slug}`
  );
  const data = await res.data;
  return {
    props: { data },
  };
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/products-list`
  );
  const posts = await res.data.data;
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

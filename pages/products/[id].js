/* import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { smallString } from "../../utils/helper";
import { useRouter } from "next/router";
import { allProducts } from "../../usefullData/productsData";

const DynamicProduct = (props) => {
  const [totalItem, setTotalItem] = useState(1);
  const [itemInex, setItemInex] = useState(0);
  const [desc, setDesc] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [review, setReview] = useState(false);
  const [seemore, setSeemore] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  console.log(id, "path");
  const product = allProducts.filter((item) => item.id == id);
  return (
    <div className="px-3 xl:px-44">
      <div className=" hidden md:block  ">
        <div className=" flex  ">
          <div className=" w-1/ xl:w-1/12 mt-10   h-1/5 xl:h-1/3 xl:space-y-8 md:space-y-12   flex flex-col  items-center   ">
            {product &&
              product.length > 0 &&
              product[0].images.map((item, index) => (
                <div
                  key={index}
                  className="  rounded-md overflow-hidden   h-16 w-16 xl:h-28 xl:w-28  "
                  onClick={() => {
                    setItemInex(index);
                  }}
                >
                  <img
                    src={item}
                    className=" object-cover h-full w-full"
                    alt={product[0].title}
                  />
                </div>
              ))}
          </div>
          <div className="  w-1/2 px-3 mt-10  xl:ml-5 xl:h-[34rem]   overflow-hidden ">
            <img
              src={product && product[0].images[itemInex]}
              className=" h-full w-full object-cover rounded-md"
              alt={product && product[0].title}
            />
            <div className=" bg-gray-300 h-[0.14rem] mt-4"></div>
          </div>
          <div className="  w-1/2 mt-10 pl-6">
            <h1 className=" text-appBlack font-Poppins text-3xl">
              {product && product[0].title}
            </h1>
            <h1 className=" text-third mt-4">{product && product[0].price}</h1>
            <div className=" w-full  xl:mt-16">
              <div className=" flex space-x-2 items-center w-full">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <h1 className=" text-secoundry">1 customer review</h1>
              </div>
              <h2 className=" text-secoundry mt-3 md:text-sm xl:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.
              </h2>
              <div className=" flex items-center py-6 xl:mt-4">
                <div className=" flex  items-center w-28 select-none  justify-between bg-gray-300 py-2 px-2 rounded ">
                  <BiMinus
                    className=" cursor-pointer text-secoundry"
                    onClick={() => {
                      totalItem > 1 && setTotalItem(totalItem - 1);
                    }}
                  />
                  <h3 className=" text-secoundry">{totalItem}</h3>
                  <BiPlus
                    className=" cursor-pointer text-secoundry"
                    onClick={() => {
                      setTotalItem(totalItem + 1);
                    }}
                  />
                </div>
                <button>ADD To Cart</button>
              </div>
              <div className=" flex xl:mt-7">
                <div className=" pr-10 border-r-2 py-1 border-gray-300">
                  <AiFillHeart className=" text-secoundry" />
                </div>
                <div className=" flex items-center space-x-4 ml-8">
                  <MdOutlineEmail className=" text-secoundry" />
                  <FaFacebookF className=" text-secoundry" />
                  <FaInstagram className=" text-secoundry" />
                  <FaTwitter className=" text-secoundry" />
                </div>
              </div>
              <div className=" space-y-2 xl:mt-8">
                <h1 className=" flex">
                  SKU:
                  <p className=" text-secoundry ml-2">
                    {" "}
                    {product && product[0].sku}
                  </p>
                </h1>
                <h1 className=" flex">
                  Categories:
                  <p className=" text-secoundry ml-2">
                    {product && product[0].categories}
                  </p>
                </h1>
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
                setReview(false);
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
                setReview(false);
              }}
            >
              Aditional information
            </h1>
            <h1
              className={`${
                review && `border-b-2 border-gray-600`
              } md:py-5 xl:py-8 cursor-pointer`}
              onClick={() => {
                setDesc(false);
                setAdditionalInfo(false);
                setReview(true);
              }}
            >
              Reviews(0)
            </h1>
          </div>
          {desc && (
            <div className="  py-4">
              <h1 className=" text-secoundry">{product && product[0].desc}</h1>
            </div>
          )}
          {additionalInfo && (
            <div className="py-4 ">
              <h1 className="flex  py-2 text-secoundry">
                <p className=" text-gray-800"> Weight : </p>
                {product && product[0].addiInfo[0].weigth}
              </h1>
              <h1 className="flex py-2 text-secoundry">
                <p className=" text-gray-800">Dimentions : </p>
                {product && product[0].addiInfo[0].dimentions}
              </h1>
              <h1 className="flex py-2 text-secoundry">
                <p className=" text-gray-800">Colours : </p>
                {product && product[0].addiInfo[0].colours}
              </h1>
              <h1 className="flex py-2 text-secoundry">
                <p className=" text-gray-800">Material : </p>
                {product && product[0].addiInfo[0].material}
              </h1>
            </div>
          )}
          {review && (
            <div className="  py-10">
              <h1 className="  text-secoundry">{product && product[0].desc}</h1>
            </div>
          )}
        </div>
      </div>
      <div className=" md:hidden">
        <div className="overflow-hidden">
          <Carousel showThumbs={false} showArrows={false} showStatus={false}>
            {product &&
              product.length > 0 &&
              product[0].images.map((item, index) => (
                <div key={index} className=" h-96 w-screen p-3 ">
                  <img
                    src={item}
                    className=" rounded-md  object-cover h-full w-full  "
                  />
                </div>
              ))}
          </Carousel>
        </div>
        <div className=" px-3">
          <h1 className=" font-semibold text-xl text-gray-800">
            {product && product[0].title}
          </h1>
          <h1 className=" text-third font-semibold mt-1">
            {product && product[0].price}
          </h1>
          <button>ADD to Cart</button>
          <div className=" text-sm py-4">
            {seemore ? (
              <h2>
                {product[0].desc}
                <p
                  className=" text-third font-bold flex items-center"
                  onClick={() => setSeemore(false)}
                >
                  Hide
                </p>
              </h2>
            ) : (
              <h2>
                {smallString(product && product[0].desc, 175)}
                <p
                  className=" text-third font-bold flex items-center"
                  onClick={() => setSeemore(true)}
                >
                  See More
                  <RiArrowRightSLine className=" text-xl" />
                </p>
              </h2>
            )}
          </div>
          <div className=" py-5 space-y-2 border-t-2 border-b-2 border-gray-300">
            <div
              className=" flex items-center justify-between"
              onClick={() => setDesc(!desc)}
            >
              <h2>Description</h2>
              {!desc ? (
                <MdOutlineKeyboardArrowUp className=" text-xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className=" text-xl" />
              )}
            </div>
            <div className=" text-sm text-secoundry">
              {!desc && product && product[0].desc}
            </div>
            <div
              className=" flex items-center justify-between"
              onClick={() => setAdditionalInfo(!additionalInfo)}
            >
              <h2>Additional information</h2>
              {additionalInfo ? (
                <MdOutlineKeyboardArrowUp className=" text-xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className=" text-xl" />
              )}
            </div>
            <div className=" text-sm text-secoundry">
              {additionalInfo && (
                <div className=" space-y-2">
                  <h2>Weight : {product && product[0].addiInfo[0].weigth}</h2>
                  <h2>
                    Dimentions : {product && product[0].addiInfo[0].dimentions}
                  </h2>
                  <h2>
                    Material : {product && product[0].addiInfo[0].material}
                  </h2>
                </div>
              )}
            </div>
            <div
              className=" flex items-center justify-between"
              onClick={() => setReview(!review)}
            >
              <h2>Reviews(0)</h2>
              {review ? (
                <MdOutlineKeyboardArrowUp className=" text-xl" />
              ) : (
                <MdOutlineKeyboardArrowDown className=" text-xl" />
              )}
            </div>
            <div className=" text-sm text-secoundry">
              {review && product && product[0].reviews}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicProduct;
 */

import React from "react";

const Dynamic = () => {
  return <div>Dynamic</div>;
};

export default Dynamic;

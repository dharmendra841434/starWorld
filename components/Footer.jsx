import Image from "next/image";
import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className=" lg:hidden ">
        <div className=" flex flex-col items-center">
          <div className=" w-2/5 md:w-1/4">
            <Image
              src="/images/logo.svg"
              width={1000}
              height={1000}
              alt="Logo"
            />
          </div>
          <p className=" text-lightGray mx-10 text-center">
            Helping you maximize operations management with digitization
          </p>
          <div className=" my-8 ">
            <div className=" flex flex-col items-center">
              <h1 className=" text-appBlack font-bold text-lg">Office</h1>
              <p className=" text-lightGray mt-2">359 Hidden Valley Road, NY</p>
            </div>
            <div className=" flex flex-col items-center mt-6">
              <h1 className=" text-appBlack font-bold text-lg">Contacts</h1>
              <p className=" text-lightGray mt-2">
                (+01) 234 568 contact@monst.com
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-between items-center md:px-6">
          <span className=" text-lightGray text-sm text-center">
            © 2022. All rights reserved. Designed by{" "}
            <span className=" text-appBlue font-semibold">Alithemes.com</span>
          </span>
          <div className=" flex flex-row items-center gap-x-5 mt-5">
            <FaFacebookF className=" text-appBlue cursor-pointer text-lg transition-all duration-300 ease-in-out hover:scale-125" />
            <FaInstagram className=" text-appBlue cursor-pointer text-lg transition-all duration-300 ease-in-out hover:scale-125" />
            <FaTwitter className=" text-appBlue cursor-pointer text-lg transition-all duration-300 ease-in-out hover:scale-125" />
          </div>
        </div>
      </div>
      <div className=" hidden lg:block lg:px-10 xl:px-20  ">
        <div className=" flex flex-row">
          <div className=" w-1/2 flex flex-grow items-center justify-between ">
            <div className=" w-1/3">
              <Image
                src="/images/logo.svg"
                width={1000}
                height={1000}
                alt="Logo"
              />
            </div>
            <p className=" w-1/2  text-lightGray">
              Helping you maximize operations management with digitization
            </p>
          </div>
          <div className=" w-1/2 flex flex-row justify-between items-center  pl-20">
            <div>
              <h1 className=" text-appBlack font-bold text-lg">Office</h1>
              <p className=" text-lightGray mt-2">359 Hidden Valley Road, NY</p>
            </div>
            <div>
              <h1 className=" text-appBlack font-bold text-lg">Contacts</h1>
              <p className=" text-lightGray mt-2">
                (+01) 234 568 contact@monst.com
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-row justify-between items-center mb-12">
          <span className=" text-lightGray text-sm">
            © 2022. All rights reserved. Designed by{" "}
            {/*   <span className=" text-appBlue font-semibold">Alithemes.com</span> */}
          </span>
          <div className=" flex flex-row items-center gap-x-5">
            <FaFacebookF className=" text-appBlue cursor-pointer text-lg transition-all duration-300 ease-in-out hover:scale-125" />
            <FaInstagram className=" text-appBlue cursor-pointer text-lg transition-all duration-300 ease-in-out hover:scale-125" />
            <FaTwitter className=" text-appBlue cursor-pointer text-lg transition-all duration-300 ease-in-out hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" py-10 mt-20">
      <div className=" lg:hidden flex flex-col mt-5 items-center">
        <img src="/images/logo1.svg" className="" />
        <span className=" text-lightGray mt-8 text-center">
          Helping you{" "}
          <span className=" font-semibold text-lightGray">maximize</span>{" "}
          operations management with digitization
        </span>
        <div className=" flex flex-col items-center mt-12">
          <h2 className=" font-bold text-black">Office</h2>
          <h3 className="  text-lightGray mt-3">359 Hidden Valley Road, NY</h3>
        </div>
        <div className=" flex flex-col items-center mt-12">
          <h2 className=" font-bold text-black">Contacts</h2>
          <h3 className=" text-lightGray mt-3">
            (+01) 234 568 contact@monst.com
          </h3>
        </div>
        <div className=" flex gap-5 mt-10">
          <FaFacebookF className=" text-xl text-appBlue2 cursor-pointer transition-all duration-300 ease-out hover:text-appBlue" />
          <FaInstagram className=" text-xl text-appBlue2 cursor-pointer transition-all duration-300 ease-out hover:text-appBlue" />
          <FaTwitter className=" text-xl text-appBlue2 cursor-pointer transition-all duration-300 ease-out hover:text-appBlue" />
        </div>
        <span className=" text-lightGray text-[14px] mt-8 tracking-wide">
          © 2022. All rights reserved. Designed by{" "}
          <span className=" text-appBlue">StarWorld.com</span>
        </span>
      </div>
      <div className=" hidden lg:block">
        <div className="  flex flex-row justify-evenly px-6 xl:px-44">
          <div className=" w-1/2 flex flex-row justify-between  ">
            <div className="">
              <img src="/images/logo1.svg" className="" />
            </div>
            <div className=" w-1/2">
              <span className="  text-lightGray">
                Helping you{" "}
                <span className=" font-semibold text-lightGray">maximize</span>{" "}
                operations management with digitization
              </span>
            </div>
          </div>
          <div className=" w-1/2 flex flex-row justify-between pl-16">
            <div className=" w-1/2">
              <h2 className=" font-bold text-black">Office</h2>
              <h3 className=" w-9/12 text-lightGray mt-3">
                359 Hidden Valley Road, NY
              </h3>
            </div>
            <div>
              <h2 className=" font-bold text-black">Contacts</h2>
              <h3 className=" text-lightGray mt-3">
                (+01) 234 568 contact@monst.com
              </h3>
            </div>
          </div>
        </div>
        <div className=" flex justify-between px-8">
          <span className=" text-lightGray text-[14px] mt-8 tracking-wide">
            © 2022. All rights reserved. Designed by{" "}
            <span className=" text-appBlue">StarWorld.com</span>
          </span>
          <div className=" flex gap-5 mt-10">
            <FaFacebookF className=" text-xl text-appBlue2 cursor-pointer transition-all duration-300 ease-out hover:text-appBlue" />
            <FaInstagram className=" text-xl text-appBlue2 cursor-pointer transition-all duration-300 ease-out hover:text-appBlue" />
            <FaTwitter className=" text-xl text-appBlue2 cursor-pointer transition-all duration-300 ease-out hover:text-appBlue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

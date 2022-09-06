import React, { useState, useEffect } from "react";
import { navBarItems } from "../usefullData/navItems";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  // const [first, setfirst] = useState("");
  const path = useRouter();
  const name = path.pathname;
  console.log(name);

  const [activenavbar, seActivetNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 70) {
      seActivetNavbar(true);
    } else {
      seActivetNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    console.log(window.scrollY, "scroll");
  }, [activenavbar]);

  return (
    <>
      {activenavbar ? (
        <div
          className={`transition-all  duration-300 ease-in-out ${
            activenavbar ? "translate-x-0" : "translate-y-8"
          }  fixed top-0 left-0 right-0 shadow-md z-40 bg-white`}
        >
          <div className=" bg-white">
            <div className=" lg:hidden z-40  flex flex-row justify-between py-3 items-center px-6">
              <Link href="/">
                <div className=" cursor-pointer">
                  <img src="/images/logo1.svg" className="" />
                </div>
              </Link>
              <div>
                <div className=" border border-appBlue rounded-sm p-1 px-2 cursor-pointer">
                  <FiMenu className=" text-2xl text-appBlue" />
                </div>
              </div>
            </div>
            <div className="  py-4 hidden lg:block z-40">
              <div className=" flex flex-row justify-between px-6 xl:px-48 items-center">
                <Link href="/">
                  <div className=" cursor-pointer">
                    <img src="/images/logo1.svg" className="" />
                  </div>
                </Link>
                <div className=" flex flex-row justify-between gap-20">
                  {navBarItems &&
                    navBarItems.length > 0 &&
                    navBarItems.map((item, index) => (
                      <div key={index}>
                        <Link href={item.path}>
                          <h3 className=" text-blueGray1 font-semibold text-[14px] hover:text-blueGray2 cursor-pointer ">
                            {item.title}
                          </h3>
                        </Link>
                      </div>
                    ))}
                </div>
                <div>
                  <Link href="/contact">
                    <button className=" transition-all  duration-300 ease-in-out bg-appBlue2 hover:bg-appBlue  text-white font-semibold text-[14px] px-3 py-2 rounded-md">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${name == "/" && "bg-bgGray"}`}>
          <div className=" lg:hidden  flex flex-row justify-between pt-5 items-center px-6">
            <Link href="/">
              <div className=" cursor-pointer">
                <img src="/images/logo1.svg" className="" />
              </div>
            </Link>
            <div>
              <div className=" border border-appBlue rounded-sm p-1 px-2 cursor-pointer">
                <FiMenu className=" text-2xl text-appBlue" />
              </div>
            </div>
          </div>
          <div className="  pt-8 hidden lg:block">
            <div className=" flex flex-row justify-between px-6 xl:px-48 items-center">
              <Link href="/">
                <div className=" cursor-pointer">
                  <img src="/images/logo1.svg" className="" />
                </div>
              </Link>
              <div className=" flex flex-row justify-between gap-20">
                {navBarItems &&
                  navBarItems.length > 0 &&
                  navBarItems.map((item, index) => (
                    <div key={index}>
                      <Link href={item.path}>
                        <h3 className=" text-blueGray1 font-semibold text-[14px] hover:text-blueGray2 cursor-pointer ">
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                  ))}
              </div>
              <div>
                <Link href="/contact">
                  <button className=" transition-all  duration-300 ease-in-out bg-appBlue2 hover:bg-appBlue  text-white font-semibold text-[14px] px-3 py-2 rounded-md">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

import React from "react";
import Counter from "../components/Counter";
import { GiNetworkBars } from "react-icons/gi";
import { RiPieChartLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { aboutProject } from "../usefullData/aboutProject";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { feedback } from "../usefullData/userFeedBack";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className=" bg-BgShape bg-cover bg-no-repeat flex flex-col items-center pt-10">
        <h1 className=" font-Poppins text-3xl lg:text-5xl text-appBlack">
          Committed to People
        </h1>
        <h1 className=" font-Poppins text-3xl lg:text-5xl pt-3 flex text-appBlack">
          Committed <span className=" text-appBlue2 pl-2">to the Future</span>
        </h1>
        <span className=" text-lightGray my-4 lg:my-10">
          We are <span className=" font-semibold text-appBlue2">StarWorld</span>
        </span>
        <div className=" flex gap-3 pb-8">
          <button className=" bg-appBlue2 hover:-translate-y-0.5 px-6 text-[12px] font-semibold transition-all duration-300 ease-out text-white py-3 rounded-md hover:bg-appBlue">
            Key Features
          </button>
          <button className=" bg-white px-6 hover:-translate-y-0.5 text-[12px] font-semibold transition-all duration-300 ease-out text-blueGray1 py-3 rounded-md hover:bg-white/60">
            How We Works?
          </button>
        </div>
        <div className=" bg-bgPattern bg-cover bg-no-repeat flex items-center justify-center p-4 md:p-6 lg:p-7 xl:p-10 w-full h-full  lg:w-3/4">
          <img
            src="/images/dashboard.png"
            className=" w-3/4 h-3/4 rounded-xl animate-bounce-slow2 xl:animate-bounce-slow "
          />
        </div>
      </div>
      <Counter />
      <div className=" flex flex-col lg:flex-row mt-20 px-3 lg:px-1 xl:px-10 ">
        <div className=" lg:w-2/5 lg:ml-10">
          <div className=" mt-16">
            <span className=" bg-blue-100 w-fit px-3 py-1 text-[11px] font-semibold rounded-xl text-appBlue">
              Why choose us
            </span>
            <h1 className=" font-Poppins mt-7 text-3xl text-appBlack">
              Key Features
            </h1>
            <div className=" flex flex-col mt-16 gap-y-12 ">
              <div className=" flex flex-row">
                <VscGraph className=" text-appBlue text-6xl" />
                <div className=" ml-3">
                  <h3 className=" text-xl font-Poppins text-appBlack">
                    Long Lasting upto 15 years
                  </h3>
                  <h5 className=" text-lightGray  mt-2">
                    We carry out reinforcement of the profile with galvanized
                    steel with a thickness of 1.5 mm. And fittings with a
                    microlift will not allow the doors to sag even after 15
                    years.
                  </h5>
                </div>
              </div>
              <div className=" flex flex-row">
                <RiPieChartLine className=" text-appBlue text-6xl" />
                <div className=" ml-3">
                  <h3 className=" text-xl font-Poppins text-appBlack">
                    100% frost and mold protection
                  </h3>
                  <h5 className=" text-lightGray tracking-wider mt-2">
                    We install thermal slopes 16 mm thick, and the joint between
                    the window and the slope is sealed with liquid plastic.
                  </h5>
                </div>
              </div>
              <div className=" flex flex-row">
                <BsHandbag className=" text-appBlue text-6xl" />
                <div className=" ml-3">
                  <h3 className=" text-xl font-Poppins text-appBlack">
                    Raw materials and additives
                  </h3>
                  <h5 className=" text-lightGray tracking-wider mt-2">
                    We only work with premium raw materials and additives. The
                    received raw material is thoroughly inspected before it is
                    allowed to enter the bunkers.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-3/5 relative flex flex-col items-center">
          <img
            src="/images/blob-tear.svg"
            className=" absolute left-0 top-0 w-1/3 h-1/3"
          />
          <img
            src="/images/blob-tear.svg"
            className="absolute right-0 bottom-0 w-1/3 h-1/3"
          />
          <img
            src="/images/2nd.jpg"
            className=" my-20 lg:my-16 lg:w-11/12 xl:w-3/5 z-10 xl:my-20 rounded-md animate-bounce-slow"
          />
        </div>
      </div>
      <div className=" mt-28 px-3 lg:px-20">
        <div className=" lg:flex lg:flex-row lg:items-center">
          <div className=" flex flex-row md:flex-col lg:w-1/2  font-Poppins text-3xl lg:text-4xl  leading-10">
            <div className=" flex flex-row">
              <h1 className="text-appBlack mr-1">Steps to Place </h1>
              <h1 className=" text-appBlue2"> Order </h1>
            </div>
          </div>
          <p className=" text-lightGray  text-start md:w-4/5 lg:w-1/2 mt-6 leading-8">
            World Star ,A uPVC door & windows manufacturing company with its
            many years of experience in extrusion, is one of the pioneers in the
            development and production of uPVC windows and doors and aluminum
            doors. We strive in every possible way to ensure that our customers
            receive only the highest quality products; all our efforts are
            directed to this at every stage of production.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:mt-10 gap-y-8 ">
          {aboutProject &&
            aboutProject.length > 0 &&
            aboutProject.map((item, index) => (
              <div
                key={index}
                className=" cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 flex flex-col mt-4 items-center pt-6 shadow-cardShadow rounded-md bg-white"
              >
                <h1 className=" bg-blue-200 text-blue-800 px-5 py-3 font-bold rounded-full">
                  {index + 1}
                </h1>
                <img src={item.image} className=" w-2/4 h-2/4" />
                <h1 className=" font-Poppins text-lg my-4 text-appBlack">
                  {item.title}
                </h1>
                <h3 className=" text-center text-lightGray text-sm mx-14 mb-7">
                  {item.subText}
                </h3>
              </div>
            ))}
        </div>
      </div>
      <div className=" my-20 mt-32">
        <div className=" flex flex-col lg:flex-row lg:pr-16">
          <div className=" flex flex-col items-center lg:pt-20 lg:w-1/2">
            <span className=" font-Poppins text-3xl lg:text-4xl text-appBlack flex flex-row">
              Simple Solution for
            </span>
            <span className=" text-appBlue2 font-Poppins text-3xl lg:text-4xl ">
              Complex
              <span className=" font-Poppins text-3xl lg:text-4xl text-appBlack ml-1">
                Connections
              </span>
            </span>
            <p className=" text-lightGray text-[12px] lg:text-sm my-6 mx-6 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className=" lg:w-1/2 ">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={160}
              totalSlides={2}
            >
              <Slider className=" grid grid-cols-1 md:grid-cols-2 max-h-96 ">
                {feedback &&
                  feedback.length > 0 &&
                  feedback.map((item, index) => (
                    <Slide index={0} key={index}>
                      <div
                        key={index}
                        className=" p-9 lg:p-5 rounded-md m-5 lg:m-3 shadow-cardShadow "
                      >
                        <img src={item.img} className=" rounded-xl max-h-56 " />
                        <div className=" flex flex-row justify-between items-center">
                          <div>
                            <h1 className=" font-semibold mt-5 text-xl text-appBlack">
                              {item.title}
                            </h1>
                            <h2 className=" text-lightGray text-[12px]">
                              {item.subtext}
                            </h2>
                          </div>
                          <div className=" flex items-center pt-7">
                            <button className=" transition-all duration-300 ease-in-out hover:bg-appBlue hover:text-white border border-appBlue px-3 rounded-md text-appBlue font-semibold text-[11px] py-2  ">
                              View details
                            </button>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  ))}
              </Slider>
              <div className=" flex flex-row justify-between w-1/6 ml-5">
                <ButtonBack>
                  <FaLongArrowAltLeft className=" text-appBlue text-2xl" />
                </ButtonBack>
                <ButtonNext>
                  <FaLongArrowAltRight className=" text-appBlue text-2xl" />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
      <div className=" bg-contactBg bg-cover bg-no-repeat flex flex-col items-center justify-center py-40 ">
        <span className=" font-Poppins text-3xl text-appBlack text-center leading-8 w-1/3   ">
          Subscribe now to
        </span>
        <span className=" font-Poppins text-3xl text-appBlue my-3">
          Our Newsletter
        </span>
        <span className=" font-Poppins text-3xl text-appBlack text-center">
          and get the Coupon code.
        </span>
        <p className=" text-sm text-lightGray my-6">
          All your information is completely confidential
        </p>
        <div className=" flex flex-row items-center bg-white px-6 py-4">
          <div className=" flex flex-row items-center bg-[#F1F5F9] px-2 rounded-md">
            <MdOutlineMailOutline className=" text-2xl mx-2" />
            <input
              className=" outline-none bg-transparent py-3 text-lightGray pl-1 placeholder:text-[12px] placeholder:font-semibold "
              placeholder="Type your e-mail"
            />
          </div>
          <button className=" bg-appBlue2 text-white py-3 px-5 ml-5 rounded-md text-sm">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
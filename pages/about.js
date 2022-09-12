import React from "react";
import { RiFlashlightLine } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div className=" px-2 md:px-4 lg:px-8 pt-10">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" font-bold text-4xl text-appBlack py-5 text-justify ">
            Know how we grown in last 20 years
          </h1>
          <div className=" w-full lg:px-56">
            <p className=" text-lightGray  py-3 text-justify  ">
              Windows and doors are essential for keeping a home cool, clean and
              secure. People choose which type of window and door to install in
              their homes based on their needs and preferences. Cool, clean air
              flows into your home from outside while secure closures keep out
              unwanted elements. Installing new windows and doors can make your
              home more inviting and secure, depending on the types of choices
              you make. From last 20 years we are renowned in business of
              aluminum and door industry in Panipat (Haryana) India, We serving
              our clients with trust and with our every sales we have improved
              our services. We use excellent quality raw material in
              manufacturing for all your uPVC needs. We believe that trust can
              be build by completing our commitments without compromising
              quality
            </p>
            <div className=" mt-10 ">
              <div className=" space-y-6">
                <h1 className=" text-xl text-gray-800  font-bold   ">
                  Top trends
                </h1>
                <img
                  src="https://www.thespruce.com/thmb/FDEqR2l_ngcruUD9IyCc6EmXNCo=/1821x1366/smart/filters:no_upscale()/front-door-sizes-5093450-hero-ac5961d7394848d9ab0d473b84498f11.jpg"
                  className="  h-[27rem] w-full rounded-2xl "
                />
              </div>
              <div className=" py-16 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <div className=" flex space-x-3">
                  <div className=" px-3 h-14 bg-blue-100 rounded-full flex justify-center items-center">
                    <RiFlashlightLine className=" text-3xl text-gray-700" />
                  </div>
                  <div>
                    <h1 className=" font-bold text-gray-800  text-xl pb-3 pt-2">
                      The deep ocean
                    </h1>
                    <p className=" text-sm text-lightGray text-justify">
                      A flower in my garden , a mystery in my panties. Heart
                      attack never stopped old Big Bear. I didn &#39 t even know
                      we were calling him Big Bear. We never had the chance to.
                    </p>
                  </div>
                </div>
                <div className=" flex space-x-3">
                  <div className=" px-3 h-14 bg-blue-100 rounded-full flex justify-center items-center">
                    <RiFlashlightLine className=" text-3xl text-gray-700" />
                  </div>
                  <div>
                    <h1 className=" font-bold text-gray-800  text-xl pb-3 pt-2">
                      When has justice
                    </h1>
                    <p className=" text-sm text-lightGray text-justify">
                      Rough pomfret lemon shark plownose chimaera southern
                      sandfish kokanee northern sea robin Antarctic cod.
                      Yellow-and-black triplefin gulper South American Lungfish
                      mahi-mahi, butterflyfish glass catfish soapfish ling gray
                      mullet!
                    </p>
                  </div>
                </div>
                <div className=" flex space-x-3">
                  <div className=" px-3 h-14 bg-blue-100 rounded-full flex justify-center items-center">
                    <RiFlashlightLine className=" text-3xl text-gray-700" />
                  </div>
                  <div>
                    <h1 className=" font-bold text-gray-800  text-xl pb-3 pt-2">
                      Organically grow
                    </h1>
                    <p className=" text-sm text-lightGray text-justify">
                      A slice of heaven. O for awesome, this chocka full cuzzie
                      is as rip-off as a cracker. Meanwhile, in behind the
                      bicycle shed, Hercules Morse, as big as a horse and Mrs
                      Falani were up to no good with a bunch of crook pikelets.
                    </p>
                  </div>
                </div>
                <div className=" flex space-x-3">
                  <div className=" px-3 h-14 bg-blue-100 rounded-full flex justify-center items-center">
                    <RiFlashlightLine className=" text-3xl text-gray-700" />
                  </div>
                  <div>
                    <h1 className=" font-bold text-gray-800  text-xl pb-3 pt-2">
                      A slice of heaven
                    </h1>
                    <p className=" text-sm text-lightGray  text-justify">
                      Disrupt inspire and think tank, social entrepreneur but
                      preliminary thinking think tank compelling. Inspiring,
                      invest synergy capacity building, white paper; silo,
                      unprecedented challenge B-corp problem-solvers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-10 pb-20 ">
              <p className=" text-lightGray  py-3  ">
                Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
                sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
                eget pellentesque risus scelerisque a. Nam ac urna maximus,
                tempor magna et, placerat urna. Curabitur eu magna enim. Proin
                placerat tortor lacus, ac sodales lectus placerat quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

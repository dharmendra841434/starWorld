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
              Doorbase fire protection company now emerged as one of renowned
              Brand in the Market in the field of Doors and Architectural
              Hardware. We have started our Business with A Firm Named Dhiman
              Wood Traders in 1991. Our Director Mr. Anoop Dhiman Joined
              business with his father Mr.Balbir Singh Dhiman after completing
              his MBA and decided to start manufacturing Fire Doors and
              Architectural Hardware, After seeing the strict changes by
              government in fire and safety some regulatory bodies has emerged
              such as the National Building Code has given its code of conduct
              to strictly follow the needs of NBC for the Same. Now We are one
              of leading manufacturing unit with well equipped high-tech
              machines for Metal doors, Fire Resistance Doors and hardware.
            </p>
            <div className=" mt-10 ">
              <div className=" space-y-6">
                <h1 className=" text-xl text-gray-800  font-bold   ">
                  Top trends
                </h1>
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <div className=" space-y-6">
                <h1 className=" text-xl text-gray-800  font-bold   ">
                  Produced with care
                </h1>
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="  h-[27rem] w-full rounded-2xl "
                  alt=""
                />
              </div>
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

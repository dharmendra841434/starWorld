import React from "react";

const contact = () => {
  function selectOnlyThis(id) {
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });
    id.checked = true;
  }
  return (
    <div className=" px-3 xl:px-44">
      <div className=" flex flex-row justify-center items-center py-20 mt-5">
        <img src="/images/team.svg" className=" lg:w-1/2 " />
      </div>
      <div className=" flex flex-col items-center">
        <h1 className=" w-fit bg-blue-100 text-appBlue text-[12px] px-5 py-1.5 font-semibold rounded-2xl">
          Contact Us
        </h1>
        <h3 className=" flex items-center text-appBlack font-Poppins text-3xl my-3 mt-6 ">
          We will <p className=" text-appBlue2 px-2"> be glad </p> to hear
        </h3>
        <h3 className="text-appBlack font-Poppins text-3xl ">from you!</h3>
        <form className=" flex flex-col w-11/12 lg:w-3/6 py-10">
          <input
            className="bg-[#F1F5F9] py-3 my-3 rounded-md placeholder:text-[12px] pl-3 placeholder:font-semibold outline-none"
            placeholder="Name"
          />
          <input
            className="bg-[#F1F5F9] py-3 my-3 rounded-md placeholder:text-[12px] pl-3 placeholder:font-semibold outline-none"
            placeholder="name@example.com"
          />
          <textarea
            className="bg-[#F1F5F9] py-3 my-3 resize-none rounded-md placeholder:text-[12px] pl-3 placeholder:font-semibold outline-none"
            placeholder="Message"
          />
          <div className="">
            <div className=" flex flex-row gap-x-3 items-center">
              <input
                className="bg-[#F1F5F9] py-3 my-3 rounded-md placeholder:text-[12px] pl-3 placeholder:font-semibold outline-none"
                type="radio"
                name="select"
              />
              <p className=" text-sm font-semibold text-lightGray">
                UPVC DOORS
              </p>
            </div>
            <div className=" flex flex-row gap-x-3 items-center">
              <input
                className="bg-[#F1F5F9] py-3 my-3 rounded-md placeholder:text-[12px] pl-3 placeholder:font-semibold outline-none"
                type="radio"
                name="select"
              />

              <p className=" text-sm font-semibold text-lightGray">
                UPVC WINDOWS
              </p>
            </div>
          </div>
          <button className=" bg-appBlue2 mx-28 lg:mx-52 py-3 mt-10 transition-all duration-300 ease-in-out hover:bg-appBlue text-white text-sm font-semibold rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;

import axios from "axios";
import React, { useState } from "react";
import { RadioButton } from "../components/RadioButton";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const sendRequest = async (e) => {
    e.preventdefault();
    if (!name) {
      return setNameError(true);
    }
    if (!email) {
      return setEmailError(true);
    }
    setLoader(true);

    // console.log(email, name, selectedOption);
    let data = {
      email: email,
      name: name,
      type: selectedOption,
      message: message,
    };
    let send = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/leads`,
      data
    );
    // let t = await axios.get("https://api-ws.vercel.app");
    // console.log(t, "secound request");
    console.log(send, "sentdata");
  };

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
        <form
          className=" flex flex-col w-11/12 lg:w-3/6 py-10"
          onSubmit={sendRequest}
        >
          <input
            onChange={(e) => {
              if (name.length > 0) {
                setNameError(false);
              }
              setName(e.target.value);
            }}
            className={`bg-[#F1F5F9] py-3 my-3 ${
              nameError && "border border-red-600"
            } shadow-cardShadow rounded-md placeholder:text-[12px] pl-3 placeholder:font-semibold outline-none`}
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              if (email.length > 0) {
                setEmailError(false);
              }
              setEmail(e.target.value);
            }}
            className={`bg-[#F1F5F9] py-3 my-3 ${
              emailError && "border border-red-600"
            } shadow-cardShadow rounded-md placeholder:text-[12px] pl-3 placeholder:font-semibold outline-none`}
            placeholder="name@example.com"
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className={`bg-[#F1F5F9] py-3 my-3 shadow-cardShadow rounded-md placeholder:text-[12px] pl-3 placeholder:font-semibold outline-none`}
            placeholder="Message"
          />
          <div className="">
            <div className=" flex flex-row gap-x-3 items-center">
              <RadioButton
                label="UPVC DOORS"
                value={selectedOption == "Doors"}
                onChange={() => {
                  setSelectedOption("Doors");
                }}
              />
              <RadioButton
                label=" UPVC WINDOWS"
                value={selectedOption == "Windows"}
                onChange={() => {
                  setSelectedOption("Windows");
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className=" bg-appBlue2 mx-28 lg:mx-52 py-3 mt-10 transition-all duration-300 ease-in-out hover:bg-appBlue text-white text-sm font-semibold rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import { IoIosPeople } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdVerified, MdSettingsSuggest } from "react-icons/md";
import { TbBulb } from "react-icons/tb";

export const counterData = [
  {
    title: " Total Experience",
    totalNumber: 20,
    icon: <MdSettingsSuggest className=" text-5xl text-appBlue2" />,
  },
  {
    title: "Completed Projects",
    totalNumber: 110,
    icon: <AiOutlineFundProjectionScreen className=" text-4xl text-appBlue2" />,
  },
  {
    title: "Satisfied Customers",
    totalNumber: 148,
    icon: <MdVerified className=" text-4xl text-appBlue2" />,
  },
  {
    title: "Skilled Employees",
    totalNumber: 32,
    icon: <IoIosPeople className=" text-4xl text-appBlue2" />,
  },
];

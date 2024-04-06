import React from "react";
import account2 from "../../../Photos/account2.jpg";
import { BsCheck2All } from "react-icons/bs";
const AllChats = [
  {
    id: 1,
    image: account2,
    name: "Nihal fasadffdsa",
    time: "12:00 AM",
    message: "Hey! How are you",
  },
  {
    id: 2,
    image: account2,
    name: "Nihal",
    time: "12:00 AM",
    message: "Hey! How are you",
  },
  {
    id: 3,
    image: account2,
    name: "Nihal",
    time: "12:00 AM",
    message: "Hey! How are you",
  },
  {
    id: 4,
    image: account2,
    name: "Nihal",
    time: "12:00 AM",
    message: "Hey! How are you",
  },
  {
    id: 5,
    image: account2,
    name: "Nihal",
    time: "12:00 AM",
    message: "Hey! How are you",
  },
  {
    id: 6,
    image: account2,
    name: "Nihal",
    time: "12:00 AM",
    message: "Hey! How are you",
  },
];

const Friends = () => {
  return (
    <div
      className="flex flex-col mt-2 gap-6  scrl    overflow-y-auto h-[60%] "
      id="scroll"
      style={{}}
    >
      {AllChats.map((item) => (
        <div className="flex flex-row items-center gap-5" key={item.id}>
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="h-12 w-9 rounded-full  "
            />
            <div className=" absolute top-0 right-0 h-3 w-3 flex items-center justify-center rounded-full text-[10px] text-white  bg-[#C31A7F]">
              2
            </div>
            <div className=" absolute bottom-0 right-2 h-2 w-2 flex items-center justify-center rounded-full text-[10px] text-white  bg-[#11D800]"></div>
          </div>

          <div className="flex flex-row gap-3 justify-between">
            <div className="flex flex-col     ">
              <h1 className=" text-[14px] ">
                {" "}
                {item.name.length > 12
                  ? item.name.slice(0, 12) + "..."
                  : item.name}
              </h1>
              <p className=" text-[12px]  ">{item.message}</p>
            </div>
            <p className="text-[10px] ml-1 ">{item.time}</p>
          </div>
          <BsCheck2All
            className="flex item-center justify-center"
            color="#C4C4C4"
            size={13}
          />
        </div>
      ))}
    </div>
  );
};

export default Friends;

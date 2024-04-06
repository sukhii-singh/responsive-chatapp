import React, { useState } from "react";
import account2 from "../../../Photos/account2.jpg";
import {
  BsTelephone,
  BsCheck2All,
  BsThreeDotsVertical,
  BsChat,
} from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const Requests = () => {
  const AllRequests = [
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
      id: 4,
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
      id: 4,
      image: account2,
      name: "Nihal",
      time: "12:00 AM",
      message: "Hey! How are you",
    },
  ];
  return (
    <>
      <div className="overflow-y-auto h-[60%] scrl" id="scroll">
        {AllRequests.map((item) => (
          <div className="">
            <div
              className="flex flex-row gap-4 pt-4 items-center "
              key={item.id}
            >
              <img
                src={item.image}
                alt="none"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="flex flex-row item-center gap-3 justify-between">
                  <div className="flex flex-col items-start     ">
                    <h1 className="font-bold">
                      {item.name.length > 12
                        ? item.name.slice(0, 12) + "..."
                        : item.name}
                    </h1>
                    <p className=" text-[12px] ">{item.message}</p>
                  </div>
                  <p className="text-[10px] ml-5 text-center">{item.time}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly  pt-2 pl-7  items-center">
              <div className="cursor-pointer rounded-3xl     text-[#C31A7F]">
                Reject
              </div>
              <div className="  cursor-pointer rounded-3xl text-[#efc419d4]">
                Accept!
              </div>
              <div
                className="h-6 w-6 ml-5 bg-white flex items-center justify-center rounded-full   "
                style={{
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.5)",
                }}
              >
                {" "}
                <AiOutlineEye />{" "}
              </div>
            </div>
            <hr className="mt-4" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Requests;

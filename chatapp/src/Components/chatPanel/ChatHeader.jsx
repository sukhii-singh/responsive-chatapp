import React, { useState } from "react";
import account from "../../Photos/account.jpg";
import { AiOutlineVideoCamera } from "react-icons/ai";
import {
  BsTelephone,
  BsCheck2All,
  BsThreeDotsVertical,
  BsChat,
} from "react-icons/bs";
import {
  IoIosInformationCircleOutline,
  IoIosInformationCircle,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { infoActions } from "../../redux/slices/infoSlice";
const ChatHeader = () => {
  const dispatch = useDispatch();

  const { infoPanel } = useSelector((state) => state.info);
  // console.log("sdfsdf", infoPanel);
  const handleClick = () => {
    dispatch(infoActions.setToggleInfo());
  };
  return (
    <>
      <div className="flex bg-white h-[10vh]">
        <div className=" w-full flex px-6 items-center  ">
          <img
            src={account}
            alt="userImage"
            className="rounded-full w-[50px]"
          />
          <h2 className="px-2 font-bold">Sierra's Group</h2>
        </div>

        <div className="flex gap-4 items-center mr-6">
          <AiOutlineVideoCamera />
          <BsTelephone />
          <div onClick={handleClick}>
            {!infoPanel ? (
              <IoIosInformationCircleOutline />
            ) : (
              <IoIosInformationCircle color="#C31A7F" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;

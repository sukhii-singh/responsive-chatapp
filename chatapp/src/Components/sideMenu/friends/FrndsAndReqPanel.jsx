import React, { useState } from "react";
import account2 from "../../../Photos/account2.jpg";
import { BsCheck2All } from "react-icons/bs";

import Requests from "./Requests";
import { useDispatch, useSelector } from "react-redux";
import { frndAndReqActions } from "../../../redux/slices/friendsAndReqstSlice";
import Friends from "./Friends";

const FrndsAndReqPanel = () => {
  const { frndsAndReqstPanel } = useSelector((state) => state.frndAndReq);

  const dispatch = useDispatch();
  const togglePanel = (panel) => {
    dispatch(frndAndReqActions.toggleFrndsAndReqPanel(panel));
  };
  console.log(frndsAndReqstPanel);
  return (
    <>
      {/* chats */}
      <div className=" flex pt-3 justify-between  relative">
        <div
          className={
            frndsAndReqstPanel === "friends"
              ? "font-bold border-b-2 w-1/4 flex items-center justify-center transform-all ease-in-out duration-500 border-[#8B1539] text-[#8B1539] cursor-pointer"
              : "font-bold border-b-2 w-1/4 flex items-center justify-center border-[#C4C4C4] text-[#C4C4C4] cursor-pointer"
          }
          onClick={() => {
            togglePanel("friends");
          }}
        >
          <h2 className="font-18 mb-2">Chat</h2>
        </div>
        <div
          className={
            frndsAndReqstPanel === "requests"
              ? "font-bold border-b-2 w-1/2 flex vcvc items-center justify-center transform-all ease-in-out duration-500 border-[#8B1539] text-[#8B1539] cursor-pointer"
              : "font-bold border-b-2 w-1/2 flex vcvc items-center justify-center border-[#C4C4C4] text-[#C4C4C4] cursor-pointer"
          }
          onClick={() => {
            togglePanel("requests");
          }}
        >
          <h2 className="font-18 mb-2">Requests</h2>
        </div>
      </div>

      {/* Requests */}

      {frndsAndReqstPanel === "friends" && <Friends />}

      {/* Requests */}
      {frndsAndReqstPanel === "requests" && <Requests />}
    </>
  );
};

export default FrndsAndReqPanel;

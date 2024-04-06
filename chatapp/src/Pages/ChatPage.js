import React, { useEffect, useRef, useState } from "react";

import Page from "../Layouts/Pages";
import Search from "../Components/sideMenu/Search";
import Group from "../Components/sideMenu/Group";
import { useSelector } from "react-redux";
import InfoPanel from "../Components/ChatInfo/InfoPanel";
import UserInfo from "../Components/userInfo/UserInfo";
import SearchFriends from "../Components/sideMenu/searchFriends/SearchFriends";
import FrndsAndReqPanel from "../Components/sideMenu/friends/FrndsAndReqPanel";
import ChatMain from "../Components/chatPanel/ChatMain";

const ChatPage = () => {

  const { infoPanel } = useSelector((state) => state.info);
  const { searchFriendsTab } = useSelector((state) => state.srchFrnds);
  const [muteShow, setMute] = useState(false);
  const threeDotsOutClick = useRef(null);
  const [ViewUsers, setViewUser] = useState(false);
  const ViewUserOutClick = useRef(null);

  const [messagePopUp, setMessagePopUp] = useState(null);
  const messgOutsClick = useRef(null);
  const handelMessOutsClick = (event) => {
    if (
      ViewUserOutClick.current &&
      !ViewUserOutClick.current.contains(event.target)
    ) {
      setMessagePopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handelMessOutsClick, true);
    return () => {
      document.removeEventListener("click", handelMessOutsClick, true);
    };
  });



  const handleClickOutisideViewUser = (event) => {
    if (
      ViewUserOutClick.current &&
      !ViewUserOutClick.current.contains(event.target)
    ) {
      setViewUser(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutisideViewUser, true);
    return () => {
      document.removeEventListener("click", handleClickOutisideViewUser, true);
    };
  }, []);

  const handleClickOutsidethreeDots = (event) => {
    if (
      threeDotsOutClick.current &&
      !threeDotsOutClick.current.contains(event.target)
    ) {
      setMute(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsidethreeDots, true);
    return () => {
      document.removeEventListener("click", handleClickOutsidethreeDots, true);
    };
  }, []);

  return (
    <Page
      pageContent={
        <>
          <div className="bg-[#FEF8FD] h-full flex items-center px-4 lg:px-16  cahtsss ">
            <div className="  w-full   h-full ">
              <div className="  bg-white  rounded-3xl  shadow-2xl h-full">
                <div className="flex h-full w-full">
                  <div className="pt-4 px-4 lg:block hidden w-[330px] border-r-2">
                    <UserInfo />
                    <Search />
                    {searchFriendsTab ? <SearchFriends /> :
                      <>
                        <Group />
                        <FrndsAndReqPanel />
                      </>
                    }
                  </div>
                  <div className=" w-full query-2 ">
                    <div className=" bg-[#F5F5F5] h-full relative overflow-hidden lg:rounded-r-3xl rounded-3xl">
                      <ChatMain />
                    </div>
                  </div>
                  <InfoPanel />
                </div>
              </div>
            </div>
          </div>

        </>
      }
    />
  );
};

export default ChatPage;

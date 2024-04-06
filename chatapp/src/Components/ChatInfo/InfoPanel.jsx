import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import crossIcon from "../../Photos/crossIcon.svg";
import {
  BsTelephone,
  BsCheck2All,
  BsThreeDotsVertical,
  BsChat,
} from "react-icons/bs";
import account from "../../Photos/account.jpg";
import account2 from "../../Photos/account2.jpg";
import { AiOutlineVideoCamera } from "react-icons/ai";
import downloadIcon from "../../Photos/downloadIcon.svg";
import climbeverst from "../../Photos/climberEverest.webp";
import c3 from "../../Photos/c3.png";
import c4 from "../../Photos/c4.png";
import leftarrowIcon from "../../Photos/leftarrowIcon.svg";
import rightarrowIcon from "../../Photos/rightarrowIcon.svg";
import blockuser from "../../Photos/blockuser.png";
import { IoMdClose } from "react-icons/io";
import removIcon from "../../Photos/removeIcon.svg";
import { infoActions } from "../../redux/slices/infoSlice";

const InfoPanel = () => {
  const dispatch = useDispatch();
  const [blockUser, setBlockUser] = useState(false);
  const [Reportuser, setReportUser] = useState(false);
  const [userblocked, setUserBlocked] = useState(false);

  const [muteShow, setMute] = useState(false);
  const threeDotsOutClick = useRef(null);
  const [toggleStates, setToggleStates] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ViewUsers, setViewUser] = useState(false);
  const ViewUserOutClick = useRef(null);
  const [removeUserPop, setRemoveUserPop] = useState(false);

  const { infoPanel } = useSelector((state) => state.info);
  const handleMuteClick = () => {
    setMute(!muteShow);
  };
  const toggleButton = () => {
    setToggleStates(!toggleStates);
  };
  const handleViewClick = () => {
    setViewAll(!viewAll);
  };
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? viewAllImmages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === viewAllImmages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleViewUserSettings = () => {
    setViewUser(!ViewUsers);
  };

  const handleReportuser = () => {
    setReportUser(!Reportuser);
  };
  const toggleRemovePopUp = () => {
    setRemoveUserPop(!removeUserPop);
  };
  const toggleBlockTab = () => {
    setUserBlocked(!userblocked);
  };

  const handleBlockUser = () => {
    setBlockUser(!blockUser);
  };
  const viewAllImmages = [
    {
      id: 1,
      image: climbeverst,
    },
    {
      id: 2,
      image: c3,
    },
    {
      id: 3,
      image: c4,
    },
  ];

  const GroupMembers = [
    {
      id: 1,
      name: "Ananya Nagpal",
      image: account2,
    },
    {
      id: 2,
      name: "Ananya Nagpal",
      image: account2,
    },
    {
      id: 3,
      name: "Ananya Nagpal",
      image: account2,
    },
    {
      id: 4,
      name: "Ananya Nagpal",
      image: account2,
    },
  ];
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
    <>
      {infoPanel && (
        <div className="bg-white  text-center m-5 query-1 rounded-3xl  w-[450px] overflow-hidden px-4  relative">
          <img
            onClick={() => {
              dispatch(infoActions.setToggleInfo());
            }}
            className="w-8 cursor-pointer mt-[5%] one-1"
            src={crossIcon}
            alt="cross"
          />
          <div className="absolute right-5 top-5">
            <BsThreeDotsVertical
              className="cursor-pointer"
              onClick={handleMuteClick}
            />
          </div>

          {muteShow && (
            <div
              className="absolute top-10 right-2 w-[160px] p-4 bg-white flex flex-col  justify-start gap-4 "
              ref={threeDotsOutClick}
              style={{ boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <div className="flex flex-row item-center justify-between">
                <p className="text-[14px] text-[#484848] ">Mute</p>
                <div>
                  <div
                    className={`flex rounded-[30px] w-[45px] p-1 ${
                      toggleStates
                        ? " bg-[#C31A7F] justify-end"
                        : "justify-start bg-[#E2E2E2]"
                    }`}
                    style={{
                      boxShadow: "0px 15px 30px rgba(139, 21, 57, 0.10",
                    }}
                    onClick={toggleButton}
                  >
                    <div className="bg-[#fff] text-white rounded-[100%] w-[20px] h-[20px]"></div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                <p className="text-[14px] text-[#484848] ">Select messages</p>
                <p className="text-[14px] text-[#484848] ">Clear messages</p>
              </div>
            </div>
          )}
          <div>
            <div className="flex flex-col items-center mt-5 gap-2 justify-center pt-7">
              <img
                className="h-14 w-14 object-cover rounded-full "
                src={account}
                alt="none"
              />
              <h1 className="text-[14px]  font-semibold">
                Shriniwasan’s Group
              </h1>
              <p className="text-[12px]  ">Group Members 5/7</p>
              <div className="flex flex-row gap-3">
                <AiOutlineVideoCamera className="cursor-pointer" size={13} />
                <BsTelephone className="cursor-pointer" size={13} />
              </div>
              <p className="text-[10px]  text-[#7E7E7E]">
                Group Create by 18/06/2023{" "}
              </p>
              <div
                className="w-full h-24 flex flex-col gap-3  bg-white rounded-3xl"
                style={{
                  boxShadow: "0px 10px 30px 0px rgba(139, 21, 57, 0.10)",
                }}
              >
                <div className="flex flex-row px-5 pt-1 justify-between">
                  <p className="text-[10px] font-semibold ">
                    Media Shared in the group
                  </p>
                  <p
                    onClick={handleViewClick}
                    className="text-[10px]  underline text-[#4B65C2] cursor-pointer"
                  >
                    View All
                  </p>
                </div>

                {viewAll && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  ">
                    <div className="bg-white w-25 p-4 rounded-[20px]  ">
                      <div className="flex flex-row items-center justify-between px-4">
                        <div className="flex flex-row items-center gap-2">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={account2}
                            alt="accountimage"
                          />
                          <p className="text-[14px]  font-semibold">
                            Shriniwasan’s Group
                          </p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <img
                            className="w-8"
                            src={downloadIcon}
                            alt="download"
                          />
                          <img
                            onClick={handleViewClick}
                            className="w-8 cursor-pointer"
                            src={crossIcon}
                            alt="cross"
                          />
                        </div>
                      </div>

                      <div className="pt-5 ">
                        <div className="flex flex-row items-center justify-between">
                          <img
                            className="cursor-pointer w-16"
                            src={leftarrowIcon}
                            alt="leftarrow"
                            onClick={handlePrevImage}
                          />

                          <div className=" ">
                            <img
                              className="max-w-[300px] max-h-[300px] object-cover"
                              src={viewAllImmages[currentImageIndex].image}
                              alt="slide"
                            />
                          </div>
                          <img
                            className="cursor-pointer w-16"
                            src={rightarrowIcon}
                            alt="rightarrow"
                            onClick={handleNextImage}
                          />
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-center gap-4 py-10">
                        {viewAllImmages.map((item) => (
                          <div key={item.id} className="">
                            <img
                              className="max-w-[200px] max-h-[100px]"
                              src={item.image}
                              alt="media"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-row items-center justify-evenly ">
                  <img
                    className="h-12 w-9 object-cover rounded-full "
                    src={account}
                    alt="none"
                    style={{
                      boxShadow: "0px 5px 15px 0px rgba(139, 21, 57, 0.50)",
                    }}
                  />
                  <img
                    className="h-12 w-9 object-cover rounded-full "
                    src={account}
                    alt="none"
                    style={{
                      boxShadow: "0px 5px 15px 0px rgba(139, 21, 57, 0.50)",
                    }}
                  />
                  <img
                    className="h-12 w-9 object-cover rounded-full "
                    src={account}
                    alt="none"
                    style={{
                      boxShadow: "0px 5px 15px 0px rgba(139, 21, 57, 0.50)",
                    }}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-[22px] mt-5  font-semibold pl-3 pt-2">
              Group Members
            </h1>
            <div className="pt-2">
              <div className="flex flex-row gap-4 items-center ">
                <div className="h-10 w-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover "
                    src={account}
                    alt="none"
                  />
                </div>
                <p className="text-[10px]  font-semibold text-[#7E7E7E]">You</p>
              </div>
              <hr className="mt-2" />
            </div>
            <div
              className="h-[220px] overflow-y-auto  pr-3 relative "
              id="scroll"
            >
              {GroupMembers.map((item) => (
                <div className="">
                  <div
                    className="pt-2 flex flex-row justify-between items-center"
                    key={item.id}
                  >
                    <div className="flex flex-row gap-4 items-center ">
                      <div className="h-10 w-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                        <img
                          className="h-8 w-8 rounded-full object-cover "
                          src={item.image}
                          alt="none"
                        />
                      </div>
                      <p className="text-[10px]  font-semibold text-[#7E7E7E]">
                        {item.name}
                      </p>
                    </div>
                    <div className="flex flex-row gap-1">
                      {/* <img src={commentIcon} className="" alt="chat" /> */}
                      <BsChat className="cursor-pointer" size={13} />
                      <BsThreeDotsVertical
                        className="cursor-pointer"
                        size={13}
                        onClick={handleViewUserSettings}
                      />
                    </div>
                  </div>
                  <hr className="mt-2" />
                </div>
              ))}
              {ViewUsers && (
                <div
                  className="absolute top-10 right-5 bg-white w-[100px] p-1"
                  style={{ boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.10)" }}
                  ref={ViewUserOutClick}
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <p className=" text-[12px] text-[#7E7E7E] cursor-pointer ">
                      View Profile
                    </p>
                    <p
                      className=" text-[12px] text-[#7E7E7E] cursor-pointer "
                      onClick={handleReportuser}
                    >
                      Report
                    </p>
                    <p
                      className=" text-[12px] text-[#7E7E7E] cursor-pointer "
                      onClick={handleBlockUser}
                    >
                      Block
                    </p>
                    <p
                      className="  text-[#C31A7F] text-[12px] cursor-pointer"
                      onClick={toggleRemovePopUp}
                    >
                      Remove as friend
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center py-2 ">
              <div
                className="bg-white flex items-center justify-center rounded-[20px] h-10 w-32"
                style={{
                  boxShadow: "0px 10px 30px 0px rgba(139, 21, 57, 0.10)",
                }}
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.1 7.55953C13.79 3.95953 11.94 2.48953 7.89 2.48953H7.76C3.29 2.48953 1.5 4.27953 1.5 8.74953V15.2595C1.5 19.7295 3.29 21.5195 7.76 21.5195H7.89C11.91 21.5195 13.76 20.0695 14.09 16.5295M8 11.9995L19.38 11.9995M17.15 8.64953L20.5 11.9995L17.15 15.3495"
                      stroke="#C31A7F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[12px]   text-[#C31A7F]">Leave Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {Reportuser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-[400px] bg-white p-4 flex flex-col gap-4 rounded-[20px]">
            <div className="flex flex-col gap-4">
              <h1 className="text-[18px]    text-[#C31A7F] font-semibold">
                Report Ananya Nagpal
              </h1>
              <p className="text-[14px]  text-[#7E7E7E]">
                The last 5 message from this user will be forwarded to CAN. This
                user will not be notified.
              </p>
              <div className="flex flex-row items-center gap-2">
                <input className="accent-[#C31A7F]" type="checkbox" />
                <p className="text-[14px] text-[#7E7E7E] ">
                  Block user and delete chat
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 justify-end">
              <button
                className="w-20 h-10 border border-[#7E7E7E] rounded-[10px] text-[14px] "
                onClick={handleReportuser}
              >
                Cancel
              </button>
              <button
                className="w-20 h-10 bg-[#C31A7F] text-white rounded-[10px] text-[14px] "
                onClick={handleReportuser}
              >
                Report
              </button>
            </div>
          </div>
        </div>
      )}
      {blockUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 lg:p-0 p-2">
          <div
            className=" bg-[#FFFFFF] flex flex-col items-center py-10 gap-6 rounded-[30px] px-16 "
            ref={ViewUserOutClick}
          >
            <div>
              <img className="w-14" src={blockuser} alt="none" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className="  text-[#C31A7F] text-[18px] font-semibold">
                Block Sierra Ferguson
              </h1>
              <p className="text-[14px] text-[#7E7E7E] font-semibold">
                Do you really want to block this user
              </p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <p
                className="w-20 rounded-lg h-9 bg-transparent border-[#7E7E7E] border flex items-center justify-center text-[14px] text-[#7E7E7E] font-semibold cursor-pointer"
                onClick={handleBlockUser}
              >
                Cancel
              </p>
              <p
                className="w-20 rounded-lg h-9 bg-[#C31A7F] text-[#FFFFFF] flex items-center justify-center text-[14px] font-semibold cursor-pointer"
                onClick={toggleBlockTab}
              >
                Block
              </p>

              {userblocked && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 lg:p-0 p-2">
                  <div
                    className="bg-[#FFFFFF] flex flex-col items-center py-11 gap-7 rounded-[30px] px-32 relative "
                    ref={ViewUserOutClick}
                  >
                    <div className="absolute right-6 top-6  cursor-pointer">
                      <IoMdClose size={18} onClick={toggleBlockTab} />
                    </div>
                    <div>
                      <img className="w-28" src={blockuser} alt="none" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <h1 className="  text-[#C31A7F] text-[18px] font-semibold">
                        Sierra Ferguson
                      </h1>
                      <p className="text-[14px] text-[#7E7E7E] font-semibold">
                        Has been Blocked
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {removeUserPop && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-[350px] bg-white p-6 flex flex-col gap-4 rounded-[20px]">
            <div className="flex flex-col items-center justify-center gap-4">
              <img className="w-16 " src={removIcon} alt="remove" />
              <h1 className="text-[16px]    text-[#C31A7F] ">
                Remove Ananya Nagpal
              </h1>
              <p className="text-[14px]  text-center text-[#7E7E7E]">
                Are you sure you want to remove this person as a friend
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 justify-center">
              <button
                className="w-20 h-10 border border-[#7E7E7E] rounded-[10px] text-[14px] "
                onClick={toggleRemovePopUp}
              >
                Cancel
              </button>
              <button
                className="w-20 h-10 bg-[#C31A7F] text-white rounded-[10px] text-[14px] "
                onClick={toggleRemovePopUp}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoPanel;

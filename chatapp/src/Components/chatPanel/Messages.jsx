import React, { useRef, useState } from "react";
import {
  BsTelephone,
  BsCheck2All,
  BsThreeDotsVertical,
  BsChat,
} from "react-icons/bs";
const Messages = () => {
  const [result, setResult] = useState([
    "one",
    "teo",
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
  ]);
  const [messagePopUp, setMessagePopUp] = useState(null);
  const messgOutsClick = useRef(null);
  const [deleteMsg, setDeleteMsg] = useState(false);
  const [imageResult, setImageResult] = useState([]);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const [sendImage, setSendImage] = useState(null);

  const toggleMessagePopUp = (index) => {
    setMessagePopUp(index === messagePopUp ? null : index);
  };

  const toogleDeleteMsgPopUp = () => {
    setDeleteMsg(!deleteMsg);
  };
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  const DeleteMessages = () => {
    const NewMessages = [...result];
    NewMessages.splice(messageToDelete, 1);
    setResult(NewMessages);

    setDeleteMsg(false);
    setMessageToDelete(null);
  };

  const DeleteImages = () => {
    const newImages = [...imageResult];
    newImages.splice(sendImage, 1);
    setImageResult(newImages);

    setDeleteMsg(false);
    setSendImage(null);
  };
  return (
    <>
      <div className="  p-10  h-full w-full overflow-y-scroll flex flex-col-reverse items-end relative">
        {result?.map((itemValue, index) => {
          if (itemValue) {
            return (
              <div className="relative" key={index}>
                <div
                  className="m-2 bg-[#86C6C5] p-2  rounded-xl  text-white cursor-pointer flex-wrap"
                  style={{ borderRadius: "10px 10px 0px 10px" }}
                  onClick={() => toggleMessagePopUp(index)}
                >
                  <p className=" flex-wrap">{itemValue}</p>

                  <p className="text-[10px]  flex flex-row items-center justify-end gap-4">
                    {getCurrentTime()}
                    <BsCheck2All color="#C31A7F" size={13} />
                  </p>
                </div>

                {/* <div className="flex justify-center mt-2" >
                            <img
                              src={sendImage}
                              alt="Selected"
                              style={{ maxWidth: "200px" }}
                              onChange={HandleImageSend} // Adjust the size as per your requirement
                            />
                          </div> */}
                {messagePopUp === index && (
                  <div
                    className="bg-white w-[100px] right-32 p-4 flex flex-col items-center justify-center gap-2 "
                    ref={messgOutsClick}
                  >
                    <p className="text-[14px] cursor-pointer">Edit</p>
                    <p className="text-[14px] cursor-pointer">Reply</p>
                    <p className="text-[14px] cursor-pointer">Forward</p>
                    <p
                      className="text-[14px] cursor-pointer"
                      onClick={toogleDeleteMsgPopUp}
                    >
                      Delete
                    </p>
                  </div>
                )}
              </div>
            );
          }
        })}
        {/* {sendImage && (
                          <div className="flex justify-center mt-2">
                            <img
                              src={sendImage}
                              alt="Selected"
                              style={{ maxWidth: "200px" }}
                              onChange={HandleImageSend} // Adjust the size as per your requirement
                            />
                          </div>
                        )} */}

        {imageResult.reverse().map((item, index) => {
          if (item) {
            return (
              <div className="flex flex-col justify-center mt-2 " key={index}>
                <img
                  src={item}
                  alt="Selected"
                  style={{
                    maxWidth: "100px",
                    borderRadius: "20px 20px 0px 20px",
                  }}
                  className=""
                  onClick={() => toggleMessagePopUp(index)}
                  // Adjust the size as per your requirement
                />

                <br />
                <p>
                  <p className="text-[10px]  flex flex-row items-center justify-end gap-4">
                    {getCurrentTime()}
                    <BsCheck2All color="#C31A7F" size={13} />
                  </p>
                </p>
                {messagePopUp === index && (
                  <div
                    className="bg-white w-[100px] right-32 p-4 flex flex-col items-center justify-center gap-2 "
                    ref={messgOutsClick}
                  >
                    <p className="text-[14px] cursor-pointer">Edit</p>
                    <p className="text-[14px] cursor-pointer">Reply</p>
                    <p className="text-[14px] cursor-pointer">Forward</p>
                    <p
                      className="text-[14px] cursor-pointer"
                      onClick={toogleDeleteMsgPopUp}
                    >
                      Delete
                    </p>
                  </div>
                )}
              </div>
            );
          }
        })}

        {deleteMsg && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className=" bg-white py-10 px-20 flex flex-col gap-4 rounded-[20px]">
              <div className="flex flex-col items-center justify-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M68 35C68 53.2254 53.2254 68 35 68C16.7746 68 2 53.2254 2 35C2 16.7746 16.7746 2 35 2C53.2254 2 68 16.7746 68 35ZM70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35ZM38.125 25L36.875 23.75H31.875L30.625 25H26H25V26V27.75V28.75H25.25H26H26.25V29.75V43.75C26.25 44.7446 26.6451 45.6984 27.3484 46.4016C28.0516 47.1049 29.0054 47.5 30 47.5H38.75C39.7446 47.5 40.6984 47.1049 41.4016 46.4016C42.1049 45.6984 42.5 44.7446 42.5 43.75V29.75V28.75H42.75H43.5H43.75V27.75V26V25H42.75H38.125ZM27.25 26.25H31.25L32.5 25H36.25L37.5 26.25H41.5H42.5V26.5V27.25V27.5H41.5H27.25H26.25V27.25V26.5V26.25H27.25ZM27.5 43.75V29.75V28.75H28.5H40.25H41.25V29.75V43.75C41.25 44.413 40.9866 45.0489 40.5178 45.5178C40.0489 45.9866 39.413 46.25 38.75 46.25H30C29.337 46.25 28.7011 45.9866 28.2322 45.5178C27.7634 45.0489 27.5 44.413 27.5 43.75ZM30 31.25H30.25H31H31.25V32.25V42.75V43.75H31H30.25H30V42.75V32.25V31.25ZM37.5 31.25H37.75H38.5H38.75V32.25V42.75V43.75H38.5H37.75H37.5V42.75V32.25V31.25Z"
                    fill="#C31A7F"
                  />
                </svg>
                <h1>Delete Message?</h1>
                <button className="border-2 border-[#C31A7F] p-2 flex items-center justify-center rounded-xl h-10 w-full text-[14px]   text-[#C31A7F]  font-semibold ">
                  Delete For Everyone
                </button>
                <div className="flex flex-row items-center gap-4 justify-center">
                  <button
                    className="w-20 h-10 border border-[#7E7E7E] rounded-[10px] text-[14px] "
                    onClick={toogleDeleteMsgPopUp}
                  >
                    Cancel
                  </button>
                  <button
                    className="w-20 h-10 bg-[#C31A7F] text-white rounded-[10px] text-[14px] "
                    onClick={() => {
                      DeleteImages();
                      DeleteMessages();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;

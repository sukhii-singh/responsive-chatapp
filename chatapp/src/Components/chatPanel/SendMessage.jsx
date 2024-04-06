import React, { useState } from "react";
import account2 from "../../Photos/account2.jpg";
import { ImAttachment } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";
import { GrMicrophone } from "react-icons/gr";
const SendMessage = () => {
  const [text, setText] = useState("");
  const [sendImage, setSendImage] = useState(null);
  const [result, setResult] = useState([]);
  const [imageResult, setImageResult] = useState([]);

  const [imageshowPopup, setImageShowPopup] = useState(null);

  const toggleImageShowPopUp = () => {
    setImageShowPopup(null);
  };
  const inputTaken = (event) => {
    setText(event.target.value);
  };
  const HandleImageSend = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSendImage(URL.createObjectURL(file));
    setImageShowPopup(URL.createObjectURL(file));
  };
  const listOfItems = () => {
    setResult((oldItems) => {
      return [...oldItems, text];
    });
    setText("");
  };

  const listOfImage = () => {
    setImageResult((oldImage) => {
      return [...oldImage, sendImage];
    });
    console.log(imageResult);
    setSendImage("");
    setImageShowPopup(null);
  };
  return (
    <>
      <div className="ml-10 flex flex-row items-center">
        <img
          className="w-12 h-12 rounded-full "
          src={account2}
          alt="incomingImage"
          style={{ boxShadow: "0px 5px 15px 0px rgba(139, 21, 57, 0.50)" }}
        />
        <p
          className="m-2 bg-white p-2 w-max rounded-xl text-right text-black text-[14px]  "
          style={{ borderRadius: "10px 10px 10px 0px" }}
        >
          message
        </p>
      </div>
      <div className="flex flex-row   w-full mb-7">
        <div className="bg-white w-full p-2 px-4 shadow-2xl rounded-2xl flex justify-between items-center mx-5">
          <input
            type="text"
            placeholder="Type your message...."
            className="w-[90%] outline-none"
            onChange={inputTaken}
            value={text}
          />
          {/* <ImAttachment color="#C4C4C4" /> */}
          <label>
            <input
              type="file"
              accept="image/*" // Specify the file types you want to allow
              style={{ display: "none" }}
              onChange={HandleImageSend}
            />
            <ImAttachment color="#C4C4C4" />
          </label>
        </div>

        <div className="flex relative items-center justify-center mr-6 gap-3">
          <div
            onClick={listOfItems}
            className="bg-[#C31A7F] p-2 rounded-full shadow-gray-950 shadow-2xl"
          >
            {" "}
            <AiOutlineSend size={20} color="white" />
          </div>
          <div className="bg-[#ffffff] p-2 rounded-full shadow-gray-950 shadow-2xl">
            {" "}
            <GrMicrophone size={20} />
          </div>
        </div>
      </div>

      {imageshowPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white flex flex-col items-center rounded-[20px] justify-center p-10  ">
            <img
              src={imageshowPopup}
              alt="Uploaded"
              className=" w-[200px] rounded-lg  "
            />
            <div className="flex flex-row items-center justify-between pt-10 w-full">
              <button
                className="h-10 rounded-xl w-20 p-2 border border-[#7E7E7E] text-[12px]  text-center"
                onClick={toggleImageShowPopUp}
              >
                Cancel
              </button>
              <button
                className="h-10 w-20 rounded-xl p-2 bg-[#C31A7F] text-white text-[12px] text-center"
                onClick={listOfImage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendMessage;

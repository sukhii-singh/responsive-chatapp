import React from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import CheckFriend from "./CheckFriend";

const ChatMain = () => {
  return (
    <div className="h-[89%] flex flex-col ">
      <>
        <ChatHeader />
        <div className="h-full">
          <Messages />
          <SendMessage />
        </div>
      </>
      {/* < >
        <CheckFriend />
      </> */}
    </div>
  );
};

export default ChatMain;

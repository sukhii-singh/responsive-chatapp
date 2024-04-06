import React, { useEffect, useState } from "react";
import account from "../../Photos/account.jpg";
import Cookies from "js-cookie";
import { baseurl } from "../../redux/apiEndPoints";

const UserInfo = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setUserName(JSON.parse(user));
    }
  }, []);
  console.log("sukhiii", userName);
  return (
    <div className="flex bg-white" style={{ borderBottom: "" }}>
      <div className=" w-full flex px-6 items-center  ">
        <img
          src={`${baseurl}/${userName?.data?.profile}`}
          alt="userImage"
          className="rounded-full w-[50px] h-[50px] "
        />
        <h2 className="px-2 font-bold">{userName?.data?.name}</h2>
      </div>

      <div className="flex gap-4 items-center mr-6"></div>
    </div>
  );
};

export default UserInfo;

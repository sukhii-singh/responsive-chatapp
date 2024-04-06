import React, { useRef, useState, useEffect } from "react";
import LogoCAn from "../Photos/LogoCAn.png";
import vibird1 from "../Photos/vibird1.gif";
import { AiOutlineMail } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import c4 from "../Photos/c4.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../redux/apiData/user";
import { FaFileUpload } from "react-icons/fa";
const Signup = () => {
  useEffect(() => {
    if (Cookies.get("user")) {
      navigate("/chat");
    }
  }, []);
  const user = useSelector((state) => state.user.userData);
  const { isError, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    profileImg: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    // console.log("usersss", userData.profileImg[0].file);
    try {
      let formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("password", userData.password);
      formData.append("profile", userData.profileImg[0]);
      const res = await dispatch(userSignup(formData));
      // console.log("es", res);
      if (user) {
        let userC = JSON.stringify(user);
        Cookies.set("user", userC);
        navigate("/chat");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const selectRef = useRef(null);

  const handleEmailChange = (event) => {
    const enteredValue = event.target.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!emailPattern.test(enteredValue)) {
    //   setError("(Invalid Email or Mobile Number)");
    // } else {
    //   setError("");
    // }
  };

  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <>
      {!Cookies.get("user") && (
        <>
          <div className="lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center ">
            <img src={LogoCAn} alt="not found" className="w-[80px] h-[80px]" />
            <h2 className=" text-lg">My Chat Sign Up</h2>
          </div>

          <div className=" ">
            <div className="flex lg:flex-row lg:p-0 p-2 items-center justify-center">
              <div className="hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center   ">
                <div className="flex flex-col items-center justify-center gap-4 ">
                  <div className="">
                    <img src={c4} className="h-[350px] w-[450px]" alt="none" />
                  </div>
                  <div className="  flex flex-col items-center justify-center mt-4  ">
                    <h1 className="text-center text-[36px] font-bold ">
                      WELCOME TO MY CHAT!
                    </h1>
                    <p className="text-center font-medium text-[18px] mt-2 "></p>
                    <p className="font-semibold"></p>
                    <p className="text-center text-[18px] font-medium "></p>
                  </div>
                </div>
              </div>

              <div className="h-[100%] mt-11  flex lg:items-center ">
                <form
                  className=" md:w-[660px] lg:w-[501px] lg:mr-[140px] sm:w-[100%] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px] "
                  style={{
                    boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)",
                  }}
                  onSubmit={handleSignup}
                >
                  <div>
                    <img src={vibird1} className="w-fit" alt="none" />
                  </div>

                  <div className="text-center pt-0 lg:text-[30px] text-[24px]  font-semibold p-2   text-[#C31A7F]">
                    <h1>Register</h1>
                  </div>

                  <div className=" text-center flex justify-center gap-1">
                    <p className="lg:text-[18px]  text-[14px]">
                      Have an account?
                    </p>
                    <p className="text-[#e137ff]  lg:text-[18px] font-semibold text-[14px]">
                      <Link to={`/Login`}>Sign in</Link>
                    </p>
                  </div>
                  {isError && (
                    <div className="text-center flex justify-center gap-1 text-rose-500 text-sm">
                      {isError}
                    </div>
                  )}

                  <div className="p-4 mx-5">
                    <div className="border-2 lg:h-12 h-12  mt-1   px-2 rounded-[20px] flex items-center justify-center ">
                      <h1 className="font-bold flex items-center w-max h-full px-3 ">
                        <VscAccount />
                      </h1>
                      <div className="    bg-[#000] h-[35px] w-[0.5px]  text-[20px]"></div>
                      <input
                        placeholder="Name"
                        onChange={(e) => {
                          setUserData({ ...userData, name: e.target.value });
                        }}
                        className="border-none w-full bg-transparent placeholder: outline-none px-2"
                      />
                    </div>

                    <div className="border-2 lg:h-12 h-12  mt-3   px-2 rounded-[20px] flex items-center ">
                      <h1 className="font-bold flex items-center w-max h-full px-3 ">
                        <AiOutlineMail />
                      </h1>
                      <div className="     bg-[#000] h-[35px] w-[0.5px]  text-[20px]"></div>
                      <input
                        placeholder="Email"
                        onChange={(e) => {
                          setUserData({ ...userData, email: e.target.value });
                        }}
                        className="border-none w-full bg-transparent placeholder: outline-none px-2"
                      />
                      <div className="text-red-400 lg:text-xs text-[10px]  lg:w-[50%] ">
                        {/* {error && <p>{error}</p>} */}
                      </div>
                    </div>
                    <div className="border-2 lg:h-12 h-12  mt-3   px-2 rounded-[20px] flex items-center ">
                      <h1 className="font-bold flex items-center w-max h-full px-3 ">
                        <RiLockPasswordFill />
                      </h1>
                      <div className="bg-[#000] h-[35px] w-[0.5px]  text-[20px]"></div>
                      <input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            password: e.target.value,
                          });
                        }}
                        className="border-none w-full bg-transparent placeholder: outline-none px-2"
                      />
                      <div className="text-red-400 lg:text-xs text-[10px]  lg:w-[50%] ">
                        {/* {error && <p>{error}</p>} */}
                      </div>
                    </div>

                    <div className="border-2 lg:h-12 h-12  mt-3   px-2 rounded-[20px] flex items-center ">
                      <h1 className="font-bold flex items-center w-max h-full px-3 ">
                        <FaFileUpload />
                      </h1>
                      <div className="bg-[#000] h-[35px] w-[0.5px]  text-[20px]"></div>
                      <label
                        className="block mb-2 text-sm font-medium  dark:text-gray"
                        for="file_input"
                      ></label>
                      <input
                        className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            profileImg: e.target.files,
                          });
                        }}
                      />
                      <div className="text-red-400 lg:text-xs text-[10px]  lg:w-[50%] ">
                        {/* {error && <p>{error}</p>} */}
                      </div>
                    </div>
                  </div>

                  <div className="lg:mx-6 flex mx-2 mt-3 text-center lg:mb-4 lg:mt-1">
                    <h1 className="text-[14px]">
                      <input type="checkbox" className=" mr-1" />
                      By Continuing, you would agree our
                      <Link
                        className="underline font-semibold text-[14px]"
                        to={"/TermCondition"}
                      >
                        Terms of Service
                      </Link>
                      and
                      <Link
                        className="underline font-semibold text-[14px]"
                        to={"/PrivatePolicy"}
                      >
                        Privacy Policy.
                      </Link>
                    </h1>
                  </div>

                  <div className="flex justify-center lg:py-3 p-[10px]">
                    {isLoading ? (
                      <button className=" bg-[#C31A7F] opacity-50 text-center py-[12px] px-[60px] rounded-xl text-white">
                        Loading..
                      </button>
                    ) : (
                      <button
                        className=" bg-[#C31A7F] text-center py-[12px] px-[60px] rounded-xl text-white"
                        type="submit"
                      >
                        Continue
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;

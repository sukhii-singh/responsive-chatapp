import { useEffect, useState } from "react";
import LogoCAn from "../Photos/LogoCAn.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import SelfCare from "../Photos/SelfCare.png";
import vibird1 from "../Photos/vibird1.gif";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/apiData/user";
import Cookies from "js-cookie";

// import Cookies from "js-cookie";

const Login = () => {
  // useEffect(() => {
  //   if (Cookies.get("user")) {
  //     navigate("/chat");
  //   }
  // }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, isLoading, isError } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  console.log("user", userData);
  const [eye1, setEye1] = useState();
  const [emailerror, setEmailError] = useState("");

  function seePass1() {
    setEye1(!eye1);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailerror && user.password && user.email) {
      await dispatch(userLogin(user));
      const userC = await JSON.stringify(userData);
      if (userData?.status === "success") {
        Cookies.set("user", userC);
        navigate("/chat");
      }
    }
  };
  function changeUsername(e) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(user.email)) {
      setEmailError("(Invalid Email)");
    } else {
      setEmailError("");
    }
  }

  return (
    <>
      {!Cookies.get("user") && (
        <>
          <div className="lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center  ">
            <img src={LogoCAn} alt="not found" className="w-[80px] h-[80px]" />
            <h4>My Chat</h4>
          </div>
          <div>
            <div className="flex lg:flex-row lg:p-0 p-2 items-center justify-center">
              <div className="hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="">
                    <img
                      src={SelfCare}
                      alt="none"
                      className="h-[390px] w-[390px]"
                    />
                  </div>

                  <div className="mt-2 flex flex-col items-center justify-center gap-1 ">
                    <h1 className="text-center text-[36px] font-semibold">
                      Welcome Again
                    </h1>
                    <p className="text-center text-[18px] font-medium w-[100%]">
                      Powerful chat by Sukhvinder <br />
                      Lets chat with friends
                    </p>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="h-[100vh]  flex lg:items-center">
                <div
                  className="lg:h-[650px] md:w-[660px] lg:w-[501px] sm:w-[330px] sm:w-[100%] h-[550px] md:h-[80vh] lg:mr-[140px] bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px]"
                  style={{
                    boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div>
                    <img src={vibird1} alt="none" />
                  </div>
                  <div className="text-center lg:text-[30px] text-[24px]  font-semibold p-1  text-[#C31A7F]">
                    <h1>Sign In</h1>
                  </div>

                  <div className=" text-center flex justify-center gap-1">
                    <p className="lg:text-[18px] text-[18px]  ">
                      Don’t Have an account?
                    </p>
                    <p className="text-[#3C37FF]  text-[18px]">
                      <Link to={`/signup`}>Sign Up</Link>
                    </p>
                  </div>
                  {isError && (
                    <div className="text-center flex justify-center gap-1 text-rose-500 text-sm">
                      {isError}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mt-6 flex flex-col gap-3">
                      <div
                        style={{ border: "2px solid #e5e7eb" }}
                        className="lg:h-14 h-12 mx-4 mt-3 lg:mx-8 lg:m-2 px-2 rounded-[20px] flex items-center justify-center gap-4 "
                      >
                        <input
                          placeholder="Email"
                          className="border-none w-full bg-transparent  outline-none p-2 placeholder:font-thin placeholder:text-[18px]"
                          onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                            changeUsername(e);
                          }}
                        />
                        <div className="text-red-400 text-xs w-[50%]">
                          {emailerror && <p>{emailerror}</p>}
                        </div>
                      </div>
                      <div
                        style={{ border: "2px solid #e5e7eb" }}
                        className="lg:h-14 h-12 mx-4 mt-3 lg:mx-8 lg:m-2 px-2 rounded-[20px] flex items-center gap-4"
                      >
                        <input
                          placeholder="password"
                          className="bg-transparent w-full outline-none placeholder:font-thin placeholder:text-[18px] p-2"
                          type={eye1 ? "text" : "password"}
                          onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                          }}
                          minLength={3}
                        />
                        <div onClick={seePass1} className="cursor-pointer">
                          {eye1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between lg:px-9 px-5">
                        <div className="flex flex-row items-center gap-2">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            className="w-4 h-4   rounded-xl border-[#7E7E7E] cursor-pointer"
                          />
                          <p className="text-[#7E7E7E]  lg:text-[18px] text-[14px]  ">
                            Remember me
                          </p>
                        </div>
                        <div>
                          <Link to="#">
                            <p className="text-[#3C37FF] lg:text-[18px]  text-[14px]  hover:underline cursor-pointer">
                              Forgot Password?
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center py-6">
                      {isLoading ? (
                        <button
                          className="
                    bg-[#C31A7F]  text-center opacity-50 cursor-pointer p-3 rounded-lg text-white w-[40%]
                    "
                        >
                          Loading..
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="bg-[#C31A7F] cursor-pointer text-center p-3 rounded-lg text-white w-[40%]"
                        >
                          Continue
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;

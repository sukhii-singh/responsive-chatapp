import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { baseurl } from "../../../redux/apiEndPoints";

const SearchFriends = () => {
  const dispatch = useDispatch();
  const { searchFriendsTab, searchData, isLoading } = useSelector(
    (state) => state.srchFrnds
  );
  // console.log("searchData", searchData);
  const skull = [1, 2, 3];

  return (
    <div className="mx-2">
      <div className="animate-pulse w-[300px]">
        {isLoading &&
          skull?.map((e, ind) => {
            return (
              <div class="flex items-center mt-4" key={ind}>
                <svg
                  class="w-10 h-10 me-3 text-gray-200 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-32 mb-2"></div>
                  <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
                </div>
              </div>
            );
          })}
      </div>
      {searchData?.map((item, ind) => (
        <div
          className="flex flex-row items-center gap-5 w-[300px] my-1 hover:bg-slate-200 rounded-md py-2 ps-2  cursor-default"
          key={ind}
        >
          <div className="relative">
            <img
              src={`${baseurl}/${item?.profile}`}
              // src={item?.image}
              alt={item?.name}
              className="h-12 w-12 rounded-full  "
            />
            {/* <div className=" absolute bottom-0 right-2 h-2 w-2 flex items-center justify-center rounded-full text-[10px] text-white  bg-[#11D800]"></div> */}
          </div>

          <div className="flex flex-row gap-3 justify-between">
            <div className="flex flex-col     ">
              <h1 className=" text-[14px] ">
                {item.name.length > 12
                  ? item.name.slice(0, 12) + "..."
                  : item.name}
              </h1>
              <p className=" text-[12px]  ">{item?.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchFriends;

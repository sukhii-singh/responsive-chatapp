import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { searchFriendsActions } from "../../redux/slices/searchFriendSlice";
import { searchUser } from "../../redux/apiData/chat";

const Search = () => {
  const dispatch = useDispatch();
  const [srch, setSrch] = useState();
  const handleSearch = async (e) => {
    e.preventDefault();
    await dispatch(searchUser({ search: srch }));
  };
  if (srch?.length) {
    dispatch(searchFriendsActions.setSearchFriendsTab(true));
    // console.log(srch);
  } else {
    dispatch(searchFriendsActions.setSearchDataNull());
    dispatch(searchFriendsActions.setSearchFriendsTab(false));
  }
  return (
    <>
      <div
        className="flex items-center gap-2 mt-3 p-2 bg-white rounded-3xl"
        style={{ boxShadow: "0px 10px 30px 0px #0000000D" }}
      >
        <FiSearch color="black" />
        <form onSubmit={handleSearch}>
          <input
            onChange={(e) => {
              setSrch(e.target.value);
            }}
            placeholder="Search"
            type="search"
            className="outline-none overflow-hidden"
          />
        </form>
      </div>
    </>
  );
};

export default Search;

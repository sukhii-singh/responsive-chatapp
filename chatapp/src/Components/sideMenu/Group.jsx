import React from "react";
import account2 from "../../Photos/account2.jpg";

const Groups = [
  {
    id: 1,
    image: account2,
    name: "Nihal",
    groupName: "Group1",
  },
  {
    id: 2,
    image: account2,
    name: "Sierra",
    groupName: "Group1",
  },
  {
    id: 3,
    image: account2,
    name: "Naveen",
    groupName: "Group1",
  },
  {
    id: 4,
    image: account2,
    name: "Naveen",
    groupName: "Group1",
  },
  {
    id: 5,
    image: account2,
    name: "Naveen",
    groupName: "Group1",
  },
  {
    id: 6,
    image: account2,
    name: "Naveen",
    groupName: "Group1",
  },
];
const Group = () => {
  return (
    <>
      <h2 className="mt-5 font-semibold">Group's</h2>
      <div
        className="flex overflow-x-auto py-4 w-full scrl-1 mb-3  "
        id="scroll-2"
      >
        <div className="flex " style={{ width: "fit-content" }}>
          {Groups.map((item) => (
            <div key={item.id} className="w-24  flex flex-col items-center">
              <div className="w-14 h-14 border-red-600 border-2 rounded-full flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name} // Added alt attribute for accessibility
                  className="w-12 h-12 rounded-full object-cover" // Adjust size of the image
                />
              </div>

              <p className="font-semibold text-[14px]">{item.name}</p>
              <p className=" text-[12px]">{item.groupName}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Group;

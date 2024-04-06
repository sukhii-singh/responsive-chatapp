// Page.js
import React, { useState, useEffect } from "react";

import './Pages.css'


const Page = ({ pageContent }) => {
  // const [isOpen, setIsOpen] = useState(() => {
  //   const storedValue = localStorage.getItem('isOpen');
  //   return storedValue ? JSON.parse(storedValue) : true;
  // });
  // useEffect(() => {
  //   // Store the 'isOpen' state in localStorage whenever it changes
  //   localStorage.setItem('isOpen', JSON.stringify(isOpen));
  // }, [isOpen]);
  return (
    <div>
      <div className="flex ">

        <div className="flex w-full flex-col">
          <div className="header">

          </div>
          <div className="content_page h-[100vh] overflow-scroll">{pageContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;

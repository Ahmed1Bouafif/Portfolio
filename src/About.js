import React, { useState } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "./About.css";
import { faCaretRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  const [widgetScreenSizes, setWidgetScreenSizes] = useState("");
  const [widgetScreenSizes1, setWidgetScreenSizes1] = useState("");
  const [widgetScreenSizes2, setWidgetScreenSizes2] = useState("");
  const [widgetScreenSizes3, setWidgetScreenSizes3] = useState("");

  return (
    <>
      <SideBar />
      <div className="flex flex-col justify-start items-start content-center w-3/5 gap-3">
        <NavBar />
        <p className="text-white capitalize font-light text-base w-4/5 self-center leading-8">Hello, my name is ahmed and my relationship with coding start at early 2021 , i was working as a boat fixer and i play video games in my free time then one of friends explain to me how the games and websites get created and i fall in love with code! </p>
        <p className="text-white capitalize font-light text-base w-4/5 self-center leading-8">so i start learning from freeCodeCamp about HTML ,CSS and JavaScript then i wanted to advance more so i studied in a Tunisian bootCamp powered by hackReactor and here i am a full stack Js developer now </p>
        <p className="text-white capitalize font-light text-base w-4/5 self-center leading-8">Here are the technologies that i am capable to work with:</p>
        <div className="grid grid-cols-2 w-3/5 gap-2   m-14  ">
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
            <p className="text-white capitalize font-light text-base w-4/5 self-center">JavaScript (ES6+)</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
            <p className="text-white capitalize font-light text-base w-4/5 self-center">react</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
            <p className="text-white capitalize font-light text-base w-4/5 self-center">TypeScript</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
            <p className="text-white capitalize font-light text-base w-4/5 self-center">Node.js(express)</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
            <p className="text-white capitalize font-light text-base w-4/5 self-center">Angular</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
            <p className="text-white capitalize font-light text-base w-4/5 self-center">MYSQL/MongoDB</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 w-3/5 h-screen gap-20 p-20">
        {widgetScreenSizes === "screen" ? (
          <div onClick={() => setWidgetScreenSizes("")} className={`overflow-auto ease-in-out duration-200 z-20 flex justify-center items-start h-screen  w-screen bg-[#00000070] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <div onClick={(e) => e.stopPropagation()} className="mt-40 rounded-md w-6/12 h-6/12 overflow-y overflow-hidden bg-white ">
              <img src="Certif.JPG" alt=""></img>
              <h4 onClick={() => setWidgetScreenSizes("")} className="font-semibold text-2xl cursor-pointer text-gray-500 fixed top-10 right-10 ">
                <FontAwesomeIcon icon={faTimes} className="text-xl text-white" />
              </h4>
            </div>
          </div>
        ) : (
          <img src="Certif.JPG" onClick={() => setWidgetScreenSizes("screen")} alt="" className="w-full h-full  bg-[#854d27]  hover:scale-90  -rotate-12 bob cursor-pointer  "></img>
        )}
        {widgetScreenSizes1 === "screen" ? (
          <div onClick={() => setWidgetScreenSizes1("")} className={`overflow-auto ease-in-out duration-200 z-20 flex justify-center items-start h-screen  w-screen bg-[#00000070] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <div onClick={(e) => e.stopPropagation()} className="mt-40 rounded-md w-6/12 h-6/12 overflow-y overflow-hidden bg-white ">
              <img src="IMG_0669.JPG" alt=""></img>
              <h4 onClick={() => setWidgetScreenSizes1("")} className="font-semibold text-2xl cursor-pointer text-gray-500 fixed top-10 right-10 ">
                <FontAwesomeIcon icon={faTimes} className="text-xl text-white" />
              </h4>
            </div>
          </div>
        ) : (
          <img src="IMG_0669.JPG" onClick={() => setWidgetScreenSizes1("screen")} alt="" className="w-full h-full  bg-[#854d27]  hover:scale-90  -rotate-12 bob cursor-pointer  "></img>
        )}
        {widgetScreenSizes2 === "screen" ? (
          <div onClick={() => setWidgetScreenSizes2("")} className={`overflow-auto ease-in-out duration-200 z-20 flex justify-center items-start h-screen  w-screen bg-[#00000070] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <div onClick={(e) => e.stopPropagation()} className="mt-40 rounded-md w-6/12 h-6/12 overflow-y overflow-hidden bg-white ">
              <img src="IMG_2052.JPG" alt=""></img>
              <h4 onClick={() => setWidgetScreenSizes2("")} className="font-semibold text-2xl cursor-pointer text-gray-500 fixed top-10 right-10 ">
                <FontAwesomeIcon icon={faTimes} className="text-xl text-white" />
              </h4>
            </div>
          </div>
        ) : (
          <img src="IMG_2052.JPG" onClick={() => setWidgetScreenSizes2("screen")} alt="" className="w-full h-full  bg-[#854d27]  hover:scale-90  -rotate-12 bob cursor-pointer  "></img>
        )}
        {widgetScreenSizes3 === "screen" ? (
          <div onClick={() => setWidgetScreenSizes3("")} className={`overflow-auto ease-in-out duration-200 z-20 flex justify-center items-start h-screen  w-screen bg-[#00000070] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <div onClick={(e) => e.stopPropagation()} className="mt-40 rounded-md w-6/12 h-6/12 overflow-y overflow-hidden bg-white ">
              <img src="IMG_2522.JPG" alt=""></img>
              <h4 onClick={() => setWidgetScreenSizes3("")} className="font-semibold text-2xl cursor-pointer text-gray-500 fixed top-10 right-10 ">
                <FontAwesomeIcon icon={faTimes} className="text-xl text-white" />
              </h4>
            </div>
          </div>
        ) : (
          <img src="IMG_2522.JPG" onClick={() => setWidgetScreenSizes3("screen")} alt="" className="w-full h-full  bg-[#854d27]  hover:scale-90  -rotate-12 bob cursor-pointer  "></img>
        )}
      </div>
    </>
  );
};

export default About;

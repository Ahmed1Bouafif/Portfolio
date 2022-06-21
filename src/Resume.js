import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveAs } from "file-saver";
import { useState } from "react";
const Resume = () => {
  const [resumeP1, setResumeP1] = useState();
  const [resumeP2, setResumeP2] = useState();
  const saveFile = () => {
    saveAs("Resume.pdf");
  };
  return (
    <>
      <SideBar />
      <div className="flex flex-col justify-start items-start content-center w-3/5 gap-3">
        <NavBar />
        <div className="overflow-y-hidden overflow-hidden w-full h-full flex flex-row justify-center items-center gap-5 ml-32 m-4">
          {resumeP1 === "screen" ? (
            <div onClick={() => setResumeP1("")} className={`overflow-auto ease-in-out duration-200 z-20 flex justify-center items-start h-screen  w-screen bg-[#00000070] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
              <div onClick={(e) => e.stopPropagation()} className="mt-20 rounded-md w-6/12 h-6/12 overflow-y overflow-hidden bg-white ">
                <img src="ResumeP2.png" alt=""></img>
                <h4 onClick={() => setResumeP1("")} className="font-semibold text-2xl cursor-pointer text-gray-500 fixed top-10 right-10 ">
                  <FontAwesomeIcon icon={faTimes} className="text-xl text-white" />
                </h4>
              </div>
            </div>
          ) : (
            <img src="ResumeP2.png" onClick={() => setResumeP1("screen")} alt="" className="w-full h-full  bg-[#854d27]   hover:scale-[0.85] cursor-pointer  "></img>
          )}
          {resumeP2 === "screen" ? (
            <div onClick={() => setResumeP2("")} className={`overflow-auto ease-in-out duration-200 z-20 flex justify-center items-start h-screen  w-screen bg-[#00000070] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
              <div onClick={(e) => e.stopPropagation()} className="mt-20 rounded-md w-6/12 h-6/12 overflow-y overflow-hidden bg-white ">
                <img src="ResumeP1.png" alt=""></img>
                <h4 onClick={() => setResumeP2("")} className="font-semibold text-2xl cursor-pointer text-gray-500 fixed top-10 right-10 ">
                  <FontAwesomeIcon icon={faTimes} className="text-xl text-white" />
                </h4>
              </div>
            </div>
          ) : (
            <img src="ResumeP1.png" onClick={() => setResumeP2("screen")} alt="" className="w-full h-full  bg-[#854d27]  hover:scale-[0.85] cursor-pointer  "></img>
          )}
        </div>
        <button onClick={saveFile} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center absolute top-[50%] right-[10%]">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download CV</span>
        </button>
      </div>
    </>
  );
};

export default Resume;

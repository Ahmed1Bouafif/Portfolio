import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Experience = () => {
  return (
    <>
      <SideBar />
      <div className="flex flex-col justify-start items-start content-center w-3/5 gap-3">
        <NavBar />
        <div className="w-3/5 flex flex-col items-start gap-10">
          <h2 className="font-extrabold text-white text-5xl ">What I Have Worked ?</h2>
          <div className=" w-full flex flex-row justify-between  p-6">
            <p className=" border-l-2 border-[#854d27] font-serif text-lg text-[#854d27] p-4">Bits</p>
            <div className="flex flex-col gap-1">
              <p className="text-white">Front-end Developer @Bits</p>
              <p className=" text-gray-400 text-xs">21/03/2022 _ 21/06/2022</p>
              <div className="flex flex-col gap-6 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
                  <p className="text-white">Write performant, maintainable code for clients projects and internal projects</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
                  <p className="text-white">Communicate with multi-disciplinary teams of engineers, designers</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <FontAwesomeIcon icon={faCaretRight} className="text-[#854d27]" />
                  <p className="text-white">Work with a variety of different languages, platforms and frameworks such as JavaScript , TypeScript , Bitbucket , React</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

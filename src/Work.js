import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Work = () => {
  return (
    <>
      <SideBar />
      <div className="flex flex-col justify-start items-start content-center w-3/5 gap-3">
        <NavBar />
        <p className="w-full h-full text-8xl font-mono text-white flex justify-center ">Loading...</p>
      </div>
    </>
  );
};

export default Work;

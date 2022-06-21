// import logo from './logo.svg';
// import "./App.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
const App = () => {
  return (
    <div className="flex flex-row justify-between bg-[#151716] h-screen w-screen">
      <SideBar/>
      <div className="flex flex-col justify-start items-start content-center w-3/5 gap-3">
        <NavBar />
        <p className="text-[#d4e1e3] font-bold text-start text-sm font-mono ">Hi, My Name Is</p>
        <p className="text-[#d4e1e3] font-bold text-start text-7xl"> Ahmed Bouafif</p>
        <p className="text-[#d4e1e3] font-semibold text-start text-7xl ">A Full Stack Js Developer</p>
      </div>
      <img src="Profile.JPG" alt="" className="w-2/5 h-screen "></img>
    </div>
  );
};

export default App;

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between gap-10 h-20 my-10">
      <p className="text-[#d4e1e3] font-bold text-start text-sm font-mono hover:text-[#854d27] cursor-pointer">
        <Link to="/">
          <span className="text-[#854d27]">0. </span>Welcome
        </Link>
      </p>
      <p className="text-[#d4e1e3] font-bold text-start text-sm font-mono hover:text-[#854d27] cursor-pointer">
        <Link to="/About">
          <span className="text-[#854d27]">1. </span>
          About Me
        </Link>
      </p>
      <p className="text-[#d4e1e3] font-bold text-start text-sm font-mono hover:text-[#854d27] cursor-pointer">
        <Link to="/Experience">
          <span className="text-[#854d27]">2. </span>Experience
        </Link>
      </p>
      <p className="text-[#d4e1e3] font-bold text-start text-sm font-mono hover:text-[#854d27] cursor-pointer">
        <Link to="/Work">
          <span className="text-[#854d27]">3. </span>Work
        </Link>
      </p>
      <p className="text-[#d4e1e3] font-bold text-start text-sm font-mono hover:text-[#854d27] cursor-pointer">
        <Link to="/Resume">
          <span className="text-[#854d27]">4. </span>Resume
        </Link>
      </p>
    </div>
  );
};

export default NavBar;

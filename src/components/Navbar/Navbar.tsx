import NavButtons from "./NavButtons";
import Navlinks from "./Navlinks";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 border-b-[1px] border-gray-300">
      <div className="flex ">
        <Logo />
        <Navlinks />
      </div>
      <div className="pr-3">
        <NavButtons />
      </div>
    </div>
  );
};

export default Navbar;

import { navLinks } from "./NavlinkData";

const Navlinks = () => {
  return (
    <div className="flex items-center">
      {navLinks.map(({ id, title }) => {
        return (
          <div className="ml-10 text-sm font-medium text-gray-600" key={id}>
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default Navlinks;

import BellIcon from "./assets/BellIcon";
import MenuIcon from "./assets/MenuIcon";

const Header = () => {
  return (
    <div className="px-5 md:px-10 overflow-auto">
      <div className="bg-sol_black mx-5 mt-10 mb-3 rounded-sm shadow-lg py-4 px-5">
        {/* flex container */}
        <div className="flex justify-between items-center">
          {/* left side */}
          <div className="flex text-gray-300">
            <p>solsupply</p>
          </div>

          {/* right side */}
          <div className="flex space-x-4">
            <a href="#"><BellIcon /></a>
            <a href="#"><MenuIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

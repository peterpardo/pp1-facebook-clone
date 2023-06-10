import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import defaultUser from "@/public/60111.jpg";

const Nav = () => {
  return (
    <nav className="flex items-center px-5 py-2 shadow-[0px_-4px_8px_-1px_rgba(0,0,0,1)] md:justify-between">
      {/* logo */}
      <div className="text-[color:var(--fb-blue)] font-bold text-3xl">Logo</div>

      {/* searchbar */}
      <div className="flex items-center bg-gray-100 p-3 rounded-full mx-5 md:rounded-3xl md:max-w-2xl md:w-full md:py-2">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="hidden bg-transparent outline-none ml-3 w-full md:block"
        />
      </div>

      {/* buttons */}
      <div className="flex items-center ml-auto md:ml-0">
        <div className="w-10 rounded-full overflow-hidden">
          <Image src={defaultUser} alt="user image" className="w-full" />
        </div>
      </div>
    </nav>
  );
};
export default Nav;

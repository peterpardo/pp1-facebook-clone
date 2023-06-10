import { FaSearch } from "react-icons/fa"

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-2 shadow-[0px_-4px_8px_-1px_rgba(0,0,0,1)]">
      {/* logo */}
      <div className="text-[color:var(--fb-blue)] font-bold text-3xl min-w-[200px]">Logo</div>
      {/* searchbar */}
      <div className="flex items-center bg-gray-100 p-2 rounded-3xl max-w-2xl w-full">
        <FaSearch className="text-gray-400"/>
        <input type="text" placeholder="Search" className="bg-transparent outline-none ml-3 w-full"/>
      </div>
      {/* buttons */}
      <div className="flex items-center">
        <div>button 1</div>
        <div>button 2</div>
        <div>button 3</div>
      </div>
    </nav>
  )
}
export default Nav
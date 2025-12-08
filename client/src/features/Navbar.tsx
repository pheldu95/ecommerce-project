import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Navbar() {
  return (
    <div className="flex space-around justify-center h-10">
      <div className="flex-1 items-center space-x-2 flex">
        <h1>My Store Page</h1>
        <SearchBar />
      </div>
      <nav className='flex-1 sm:flex space-x-10 justify-end'>
        <NavLink to='/' className="mx-2">
          Store
        </NavLink>
        <NavLink to='/' className="mx-2">
          Cart
        </NavLink>
      </nav>
    </div>
  )
}
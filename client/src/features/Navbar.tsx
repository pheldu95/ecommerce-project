import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="shadow-lg">
      <div className="flex space-around justify-center h-30 w-[90%] mb-4 mx-auto">
        <div className="flex-1 flex justify-start gap-10">
          <img
            src='/src/assets/bty-logo-magento.webp'
            className="h-16 w-auto object-contain hover:scale-110 cursor-pointer transform transition duration-300 ease-out my-auto"
          />
          <div className="my-auto">
            <SearchBar />
          </div>

        </div>
        {/* <div className="flex-1 my-auto">
          <SearchBar />
        </div> */}
        <nav className='flex-1 sm:flex space-x-10 justify-end'>
          <NavLink to='/' className="mx-2 my-auto">
            Store
          </NavLink>
          <NavLink to='/' className="mx-2 my-auto hover">
            <FontAwesomeIcon icon={faCartShopping} size='xl' />
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
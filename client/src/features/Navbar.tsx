import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex space-around justify-center h-10">
      <div className="flex-1 items-center space-x-2">
        My Store Page
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
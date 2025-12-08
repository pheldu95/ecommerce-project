import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
    return (
        <div className="relative w-100">
            <input
                className="appearance-none border-2 pl-10 border-gray-300 
                hover:border-gray-400 transition-colors rounded-md w-full 
                py-2 px-3 text-gray-800 leading-tight focus:outline-none 
                focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search..."
            />
            <button >
                <div className="absolute right-0 inset-y-0 flex items-center">
                    <FontAwesomeIcon icon={faX} className="mx-2 cursor-pointer" style={{color: 'grey'}} />
                </div>
            </button>

            <button>
                <div className="absolute left-0 inset-y-0 flex items-center">
                    <FontAwesomeIcon icon={faSearch} className="mx-2 cursor-pointer" style={{color: 'grey'}} />
                </div>
            </button>
        </div>
    )
}
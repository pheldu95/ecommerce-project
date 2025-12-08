import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopBar() {
  return (
    <div className="flex w-full h-10 bg-blue-900 text-white">
      <div className="flex-1 my-auto flex justify-start">
        <p className="mx-5 hover:text-green-400 hover:underline cursor-pointer">
          <FontAwesomeIcon icon={faPhone} />
          877-220-0448
        </p>
        <p className="mx-5 hover:text-green-400 hover:underline cursor-pointer">
          <FontAwesomeIcon icon={faEnvelope} />
          info@bytheyard.net
        </p>
      </div>
      <div className="flex-1 my-auto flex justify-center">
        <p className="italic">Life is Better Outdoors!</p>
      </div>
      <div className="flex-1 my-auto flex justify-end">

        <p className="mx-5 hover:text-green-400 hover:underline cursor-pointer">
          <FontAwesomeIcon icon={faLocationDot} />
          Showroom Locator
        </p>
      </div>
    </div>
  )
}
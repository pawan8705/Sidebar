import { 
  FaBars,
  FaHome, 
  FaImages, 
  FaInfoCircle, 
  FaServicestack,
  FaCog,
  FaBell,
  FaQuestionCircle
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  
  const [isOpen, setIsOpen] = useState(true);

  return (
      <aside className={`${isOpen ? "w-64 p-4" : "w-16 p-2"} 
      bg-white border-r border-gray-200 p-4 flex flex-col justify-between min-h-screen shadow-xl transition-all duration-300 overflow-hidden`}
      >     
      <div>
        <div className="flex justify-between mb-6 items-center">
          <button className="mt-1.5 rounded-full hover:bg-indigo-50 transition-all duration-200" onClick={() => setIsOpen(!isOpen)}>
          
          <FaBars className="w-6 h-6 text-gray-600 hover:text-indigo-600"/>
        </button>
        
        {isOpen && (
          <h1 className="text-3xl font-extrabold text-indigo-600 text-center tracking-wide drop-shadow-md">Sidebar</h1>
        )}
        </div>
        <nav>
          <ul className={`space-y-4 ${isOpen ? "px-2" : "px-0"}`}>
            <li>


              <Link 
              to="/"
              className={`flex items-center ${isOpen ? "gap-3 p-2 " : "justify-center p-1"} rounded-xl hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-all duration-300 group
              `}>
                <FaHome className={`${isOpen ? "w-6 h-6" : "w-7 h-7"} group-hover:scale-110 transition-transform`} />
                {isOpen && <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">Home</span>}
              </Link>


            </li>
            <li>
              <Link 
              to="/gallery" 
              className={`flex items-center ${isOpen ? "gap-3 p-2 " : "justify-center p-1"} rounded-xl hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-all duration-300 group               
              `}>
                <FaImages className={`${isOpen ? "w-6 h-6" : "w-7 h-7"} group-hover:scale-110 transition-transform`} />
                {isOpen && <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">Gallery</span>}
              </Link>
            </li>

            <li>
              <Link 
              to="/about" 
              className={`flex items-center ${isOpen ? "gap-3 p-2 " : "justify-center p-1"} rounded-xl hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-all duration-300 group 
              `}>
              <FaInfoCircle className={`${isOpen ? "w-6 h-6" : "w-7 h-7"} group-hover:scale-110 transition-transform`} />
              {isOpen && <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">About</span>}
              </Link>
            </li>
            <li>
              <Link 
              to="/services" 
              className={`flex items-center ${isOpen ? "gap-3 p-2 " : "justify-center p-1"} rounded-xl hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-all duration-300 group 
              `}>
              <FaServicestack className={`${isOpen ? "w-6 h-6" : "w-7 h-7"} group-hover:scale-110 transition-transform`} />
              {isOpen && <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">Services</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <ul className={`space-y-4 ${isOpen ? "px-2" : "px-0"}`}>
          <li>
            <Link 
            to="/settings" 
            className={`flex items-center ${isOpen ? "gap-3 p-2 " : "justify-center p-1"} rounded-xl hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-all duration-300 group 
            `}>
            <FaCog className={`${isOpen ? "w-6 h-6" : "w-7 h-7"} group-hover:rotate-90 transition-transform`} />
            {isOpen && <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">Settings</span>}
            </Link>
          </li>
          <li>
            <Link 
            to="/notifications" 
            className={`flex items-center ${isOpen ? "gap-3 p-2 " : "justify-center p-1"} rounded-xl hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-all duration-300 group 
            `}>
            <FaBell className={`${isOpen ? "w-6 h-6" : "w-7 h-7"} group-hover:scale-110 transition-transform`} />
            {isOpen && <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">Notifications</span>}
            </Link> 
          </li>
          <li>
            <Link 
            to="/help" 
            className={`flex items-center ${isOpen ? "gap-3 p-2 " : "justify-center p-1"} rounded-xl hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-all duration-300 group 
            `}>
            <FaQuestionCircle className={`${isOpen ? "w-6 h-6" : "w-7 h-7"} group-hover:scale-110 transition-transform`} />
            {isOpen && <span className="text-lg font-medium group-hover:translate-x-1 transition-transform">Help</span>}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

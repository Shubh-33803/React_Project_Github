import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

export const Header = () => {

    const [toggle,setToggle] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        localStorage.setItem("darkMode",toggle);
        
        if(toggle){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }

    },[toggle]);

  return (
    <>
        <header className="p-1.5 lg:max-w-7xl m-auto sm:mb-10 mb-4">
            <nav className="flex flex-row gap-8 justify-between items-center sm:flex-row ">

                <div className="max-w-1/6 sm:ml-14 flex items-center-safe">
                    <Link to="/">
                    <img src={logo} className="w-12 inline"/>
                    <span className="text-3xl font-bold">ShopMe</span>
                    </Link>
                </div>
                
                <div className="sm:mr-32 mr-2">
                    <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                       <span className="text-2xl cursor-pointer mr-1 p-1">Home</span>
                    </NavLink>
                    
                    <NavLink to="/cart">
                        <span className="text-2xl cursor-pointer ml-1 p-1">Cart</span>
                    </NavLink>
                </div>

                <Link to="/cart">
                <div className="hidden sm:block mr-20 text-2xl">
                    <button className="bg-gray-400 rounded-sm p-2 cursor-pointer hidden sm:inline-block mr-4" onClick={() => setToggle(!toggle)}>{toggle ? <CiLight /> : <MdOutlineDarkMode />}</button>
                    carts:2
                    </div>
                </Link>

            </nav>
        </header>
        <div className="sm:hidden mr-20 text-2xl ml-11 flex flex-row items-center gap-1.5"><FaCartPlus /><span className="font-bold"> : 2</span> </div>
        
    </>
  )
}

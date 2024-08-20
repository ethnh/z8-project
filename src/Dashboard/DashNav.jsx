import { FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { PiBellSimpleRingingLight } from "react-icons/pi";
import SearchInput from "../Shared/SearchInput";
import { useState } from "react";
import { Link } from "react-router-dom";




const DashNav = () => {
    const [isLightMode, setIsLightMode] = useState(true);
    const notification = true;

    const toggleMode = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <>
            <div className="fixed navbar flex w-[84.051%] justify-between items-center h-16 z-10 bg-white bordertext-black rounded-2xl p-2">
                <div className="navbar-start w-[40%]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="text-[20px] font-[700]">Dashboard</a>
                </div>
                <div className="navbar-center w-[30%] hidden lg:flex justify-center">
                    <div className="w-full relative">
                        <SearchInput type="text" className="py-[7px]" placeholder="Search..." /> <BsSearch className="absolute right-3 bottom-[9px] text-[#000000] cursor-pointer" ></BsSearch>
                    </div>
                </div>
                <div className="navbar-end w-[40%]">

                </div>
            </div>
        </>
    );
};

export default DashNav;
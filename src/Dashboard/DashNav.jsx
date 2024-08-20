
import { HiBars3 } from "react-icons/hi2";
import SearchInput from "../Shared/SearchInput";
import { FaBars } from "react-icons/fa";

import { IoSearchOutline } from "react-icons/io5";




const DashNav = () => {
    return (
        <>
            <div className="fixed navbar flex w-[86.051%] justify-between items-center h-16 z-10 bg-[#dae1e671] border text-black p-2">
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
                    <FaBars className="text-[25px] mx-4 cursor-pointer text-[#575A5E]"></FaBars>
                    <div className="w-full relative mx-5">
                        <SearchInput type="text" className="py-[7px] bg-[#D1D9E2]" placeholder="Search..." /> <IoSearchOutline className="absolute left-3 bottom-[10px] text-[#797E84] cursor-pointer text-lg" ></IoSearchOutline>
                    </div>
                </div>
                <div className="navbar-center w-[30%] hidden lg:flex justify-center">
                    {/* <div className="w-full relative">
                        <SearchInput type="text" className="py-[7px]" placeholder="Search..." /> <BsSearch className="absolute right-3 bottom-[9px] text-[#000000] cursor-pointer" ></BsSearch>
                    </div> */}
                </div>
                <div className="navbar-end w-[40%]">

                </div>
            </div>
        </>
    );
};

export default DashNav;


import SearchInput from "../Shared/SearchInput";
import { FaBars } from "react-icons/fa";

import { IoSearchOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSettings3Line } from "react-icons/ri";
import { MdEvent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoAlert } from "react-icons/io5";





const DashNav = () => {
    const notification = true;
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
                    <div className="w-4/5 relative mx-5">
                        <SearchInput type="text" className="py-[7px] bg-[#D1D9E2]" placeholder="Search..." /> <IoSearchOutline className="absolute left-3 bottom-[10px] text-[#797E84] cursor-pointer text-lg" ></IoSearchOutline>
                    </div>
                </div>
                <div className="navbar-end w-[10%]">

                </div>
                <div className="navbar-end w-[40%] hidden lg:flex justify-center gap-10">
                    <div><IoNotifications className="text-[25px] text-[#447BF5]" />
                        <div className="flex items-center gap-3 relative">{notification ? <span className="bg-[#EB476D] size-4 rounded-full text-[13px] text-white flex justify-center items-center absolute -top-[30px] left-[14px]">6</span> : <></>}</div>









                    </div>
                    <div className="flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                        </div>

                        <form className="max-w-sm mx-auto">
                            <select id="countries" className="rounded-lg bg-[#E8ECF0]  w-full p-2">

                                <option value="english">English</option>
                                <option value="bangla">Bangla</option>
                                <option value="urdu">Urdu</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </form>

                    </div>

                    <div className=" flex items-center gap-4">
                        <div className="avatar">
                            <div className="mask mask-squircle rounded-full h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[17px] font-semibold">Mony Roy</h1>
                            <p className="text-[12px]">Admin</p>
                        </div>
                        <div>

                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div tabIndex={0} role="button" className="">
                                    <div className="size-5 rounded-full outline outline-[1px] outline-[#BCC1C5] cursor-pointer flex justify-center items-center">
                                        <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
                                    </div>
                                </div>
                                <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] lg:w-[300px] p-4 shadow mt-6  my-4">
                                    <div>
                                        <h1 className="text-lg font-semibold">Notification</h1>
                                        <div className="divider"></div>
                                        <div className="flex items-center gap-4 cursor-pointer my-4">
                                            <div className="size-11 bg-[#63ABFE] rounded-full flex justify-center items-center">
                                                <RiSettings3Line className="text-[24px] text-white"></RiSettings3Line>
                                            </div>
                                            <div>
                                                <h1 className="text-base font-semibold">Settings</h1>
                                                <p className="text-[#B8B8B8]">Update Dashboard</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 cursor-pointer my-4">
                                            <div className="size-11 bg-[#FC9BDF] rounded-full flex justify-center items-center">
                                                <MdEvent className="text-[24px] text-white"></MdEvent>
                                            </div>
                                            <div>
                                                <h1 className="text-base font-semibold">Event Update</h1>
                                                <p className="text-[#B8B8B8]">An event date update again</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 cursor-pointer my-4">
                                            <div className="size-11 bg-[#BCA6FF] rounded-full flex justify-center items-center">
                                                <CgProfile className="text-[24px] text-white"></CgProfile>
                                            </div>
                                            <div>
                                                <h1 className="text-base font-semibold">Profile</h1>
                                                <p className="text-[#B8B8B8]">Update your profile</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 cursor-pointer my-4">
                                            <div className="size-11 bg-[#FFA5A5] rounded-full flex justify-center items-center">
                                                <IoAlert className="text-[24px] text-white"></IoAlert>
                                            </div>
                                            <div>
                                                <h1 className="text-base font-semibold">Application Error</h1>
                                                <p className="text-[#B8B8B8]">Check your running application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default DashNav;
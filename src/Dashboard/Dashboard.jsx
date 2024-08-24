import { NavLink, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { LuMessageCircle } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";
import { MdEvent, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineFeed } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { MdContactPage } from "react-icons/md";
import { TbInvoice } from "react-icons/tb";
import { LiaElementor } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { CiViewTable } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";
import { IoBusinessOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoAlert, IoNotifications, IoSearchOutline } from "react-icons/io5";
import SearchInput from "../Shared/SearchInput";
import logo from '../assets/logoDashboard.png'
import NavDropdown from "./NavDropdown";


const Dashboard = () => {
    const notification = true;
    const [open, setOpen] = useState(true);


    const Menus = [
        { title: "Dashboard", icon: <LuLayoutDashboard />, path: "/dashboard/dashboardHome" },
        { title: "Messanger", icon: <LuMessageCircle />, path: "/dashboard/messenger" },
        { title: "Table", icon: <CiViewTable />, path: "/dashboard/table" },
        { title: "To-Do", icon: <LuListTodo />, path: "/dashboard/todo" },
        { title: "Pricing", icon: <IoPricetagsOutline />, path: "/dashboard/pricing" },
        { title: "Billing", icon: <MdOutlineMedicalInformation />, path: "/dashboard/billingInformation" },
        { title: "Products", icon: <AiOutlineProduct />, path: "/dashboard/a" },
        { title: "Favourite", icon: <GrFavorite />, path: "/dashboard/i" },
        { title: "Order Lists ", icon: <GoListUnordered />, path: "/dashboard/d" },
        { title: "E-Commerce", icon: <IoBusinessOutline />, path: "/dashboard/f" },
        { title: "File Manager", icon: <CiFileOn />, path: "/dashboard/g" },
        { title: "Calendar ", icon: <CiCalendar />, path: "/dashboard/h" },
        { title: "Feed", icon: <MdOutlineFeed />, path: "/dashboard/j" },
        { title: "Contact", icon: <MdContactPage />, path: "/dashboard/l" },
        { title: "Invoice", icon: <TbInvoice />, path: "/dashboard/q" },
        { title: "UI Elements", icon: <LiaElementor />, path: "/dashboard/w" },
        { title: "Profile", icon: <CgProfile />, path: "/dashboard/e" },
        { title: "Setting", icon: <IoIosHelpCircleOutline />, path: "/dashboard/t", gap: true },
        { title: "Logout", icon: <CiLogout />, path: "/dashboard/y" },
    ];
    return (
        <div className="lg:flex">
            <div
                className={` ${open ? "lg:w-56" : "w-20"
                    } lg:h-screen overflow-y-scroll no-scrollbar bg-[#FFFFFF] p-5  pt-8 relative duration-300`}
            >
                <div className="flex gap-x-4 items-center">
                    <img
                        src={logo}
                        className={`cursor-pointer duration-500 ${open && ""
                            }`}
                    />
                </div>
                <div className="pt-6">
                    {Menus.map((Menu, index) => (
                        <NavLink
                            to={Menu.path}
                            key={index}
                            className={({ isActive }) =>
                                `flex rounded-md p-2 cursor-pointer hover:bg-light-white text-[15px] font-[600] items-center gap-x-4
                        ${Menu.gap ? "mt-9" : "mt-2"} 
                        ${isActive ? "bg-[#447BF5] text-white pl-3 py-3 w-full rounded-md" : "pl-3 py-3 font-semibold w-full text-[#202224]"}
                        ${index === 0 && !isActive && "bg-light-white"}`
                            }
                        >
                            {Menu.icon}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>



            <div className="w-full h-screen overflow-y-scroll bg-[#f3f4f7] border">
                <div className="relative navbar flex w-[100%] justify-between items-center h-16 z-10 bg-[#EAEDF0] border text-black p-2">
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
                        <FaBars

                            className={`absolute cursor-pointer left-8 top-5 text-[25px] text-[#414548]  ${!open && "rotate-180"}`}
                            onClick={() => setOpen(!open)}
                        />
                        <div className="w-4/5 relative mx-auto mr-8">
                            <SearchInput type="text" className="py-[7px] bg-[#d2d9e3ae]" placeholder="Search..." /> <IoSearchOutline className="absolute left-3 bottom-[10px] text-[#797E84] cursor-pointer text-lg" ></IoSearchOutline>
                        </div>
                    </div>
                    <div className="navbar-end w-[10%]">

                    </div>
                    <div className="navbar-end w-[40%] hidden lg:flex justify-center gap-10">
                        <div><IoNotifications className="text-[25px] text-[#447BF5]" />
                            <div className="flex items-center gap-3 relative">{notification ? <span className="bg-[#EB476D] size-4 rounded-full text-[13px] text-white flex justify-center items-center absolute -top-[30px] left-[14px]">6</span> : <></>}</div>
                        </div>

                        <NavDropdown></NavDropdown>


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
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import { NavLink, Outlet } from "react-router-dom";
import DashNav from "./DashNav";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { LuMessageCircle } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";
import { MdOutlineBusiness } from "react-icons/md";
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


const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="lg:flex">
            <div className="lg:w-56 lg:h-screen overflow-y-scroll no-scrollbar bg-[#FFFFFF]">
                <div className="my-7 text-center text-[#FFFFFF] text-lg">
                    <h1 className="text-[#202224] text-[20px] font-bold"><span className="text-[#3048DF]">Dash</span>Stack</h1>
                </div>
                <div className="menu space-y-3 p-4">
                    {
                        isAdmin ? <>
                            <button>
                                <NavLink
                                    to="/dashboard/dashboardHome"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold w-full rounded-md bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold w-full text-[#202224]"
                                    }
                                >
                                    <LuLayoutDashboard className="text-[20px]" />
                                    <span>Dashboard</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/a'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <AiOutlineProduct className="text-[20px]" />
                                    <span> Products</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/b'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <GrFavorite className="text-[20px]" />
                                    <span> Favourites</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/c'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold w-full bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold w-full text-[#202224]"
                                    }
                                >
                                    <LuMessageCircle className="text-[20px]" />
                                    <span className="flex items-center gap-3"> Messenger</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/d'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <GoListUnordered className="text-[20px]" />
                                    <span> Order Lists</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/e'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <MdOutlineBusiness className="text-[20px]" />
                                    <span> E-commerce</span>
                                </NavLink>
                            </button>
                            <div className="divider"></div>
                            <h1 className="ml-5 my-5">PAGES</h1>
                            <button>
                                <NavLink
                                    to='/dashboard/f'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <CiFileOn className="text-[20px]" />
                                    <span> File Manager</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/g'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <CiCalendar className="text-[20px]" />
                                    <span> Calendar</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/g'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <MdOutlineFeed className="text-[20px]" />
                                    <span> Feed</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/h'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <LuListTodo className="text-[20px]" />
                                    <span> To-Do</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/i'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <MdContactPage className="text-[20px]" />
                                    <span> Contact</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/j'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <TbInvoice className="text-[20px]" />
                                    <span> Invoice</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/k'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <LiaElementor className="text-[20px]" />
                                    <span> UI Elements</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/l'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <CgProfile className="text-[20px]" />
                                    <span> Profile</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/m'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                            : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                    }
                                >
                                    <CiViewTable className="text-[20px]" />
                                    <span> Table</span>
                                </NavLink>
                            </button>
                            <div className="divider"></div>
                            <div className="menu p-0 space-y-3">
                                <button>
                                    <NavLink
                                        to='/dashboard/n'
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                                : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                        }
                                    >
                                        <IoIosHelpCircleOutline className="text-[20px]" />
                                        <span> Help</span>
                                    </NavLink>
                                </button>
                                <button>
                                    <NavLink
                                        to='/dashboard/o'
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 justify-start pl-6 py-3 font-semibold bg-[#447BF5] text-white"
                                                : "flex items-center gap-2 justify-start pl-6 py-3 font-semibold text-[#202224]"
                                        }
                                    >
                                        <CiLogout className="text-[20px]" />
                                        <span> Log out</span>
                                    </NavLink>
                                </button>
                            </div>
                        </> :
                            <>
                            </>
                    }
                </div>
            </div>
            {/* dahsboard content */}
            <div className="w-full h-screen overflow-y-scroll bg-[#f3f4f7] border">
                <DashNav></DashNav>
                <div className="mt-20">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
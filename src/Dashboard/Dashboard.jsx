import { NavLink, Outlet } from "react-router-dom";
import DashNav from "./DashNav";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RiContactsBook2Line } from "react-icons/ri";
import { PiTicket } from "react-icons/pi";
import { PiChatsCircleBold } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiNotePencilThin } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";


const Dashboard = () => {
    const isAdmin = true;
    const chat = true;
    return (
        <div className="lg:flex">
            <div className="lg:w-56 lg:h-screen overflow-y-scroll no-scrollbar bg-[#FFFFFF]">
                <div className="my-7 ml-6 text-[#FFFFFF] text-lg">
                    <h1 className="text-black"><span className="text-[#3048DF]">Dash</span>Stack</h1>
                </div>
                <div className="menu p-0 space-y-3">
                    {
                        isAdmin ? <>
                            <button>
                                <NavLink
                                    to="/dashboard/dashboardHome"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 w-full bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 w-full text-black"
                                    }
                                >
                                    <HiOutlineSquares2X2 className="text-[20px]" />
                                    <span>Dashboard</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/a'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <RiContactsBook2Line className="text-[20px]" />
                                    <span> Products</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/b'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <PiTicket className="text-[20px]" />
                                    <span> Favourites</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/c'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 w-full bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 w-full text-black"
                                    }
                                >
                                    <PiChatsCircleBold className="text-[20px]" />
                                    <span className="flex items-center gap-3"> Messenger</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/d'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <IoPricetagsOutline className="text-[20px]" />
                                    <span> Order Lists</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/e'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <PiNotePencilThin className="text-[20px]" />
                                    <span> E-commerce</span>
                                </NavLink>
                            </button>
                            <h1 className="ml-5">PAGES</h1>
                            <button>
                                <NavLink
                                    to='/dashboard/f'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
                                    <span> File Manager</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/g'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
                                    <span> Calendar</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/g'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
                                    <span> Feed</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/h'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
                                    <span> To-Do</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/i'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
                                    <span> Contact</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/j'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
                                    <span> Invoice</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/k'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
                                    <span> UI Elements</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/l'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
                                    <span> Profile</span>
                                </NavLink>
                            </button>
                            <button>
                                <NavLink
                                    to='/dashboard/m'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                            : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                    }
                                >
                                    <HiOutlineUsers className="text-[20px]" />
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
                                                ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                                : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                        }
                                    >
                                        <span> Help</span>
                                    </NavLink>
                                </button>
                                <button>
                                    <NavLink
                                        to='/dashboard/o'
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-2 justify-start pl-6 py-2 bg-[#3E00F6] text-black"
                                                : "flex items-center gap-2 justify-start pl-6 py-2 text-black"
                                        }
                                    >
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

           
            <div className="w-full h-screen overflow-y-scroll bg-[#f3f4f7] border px-4">
                <DashNav></DashNav>
                <div className="mt-20">

                
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
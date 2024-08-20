import { NavLink, Outlet } from "react-router-dom";
import DashNav from "./DashNav";


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
                                    {/* <MdOutlineDashboard className="text-[20px]" /> */}
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
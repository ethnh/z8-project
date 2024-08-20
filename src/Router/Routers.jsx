import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboardHome',
                element: <DashboardHome></DashboardHome>
            },
        ]
    }
]);
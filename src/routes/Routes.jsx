import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/Home/RoomDetails/RoomDetails";
import { getRoom } from "../api/rooms";
import DashboardLayout from "../layouts/DashboardLayout";
import AddRoom from "../pages/Dashboard/Host/AddRoom/AddRoom";
import PrivateRoute from "./PrivateRoute";
import MyListings from "../pages/Dashboard/Host/MyListings/MyListings";
import HostRoute from "./HostRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path:'add-room',
        element:<PrivateRoute><HostRoute><AddRoom></AddRoom></HostRoute></PrivateRoute>
      },
      {
        path:'my-listings',
        element:<PrivateRoute><HostRoute><MyListings></MyListings></HostRoute></PrivateRoute>
      },
      {
        path:'manage-users',
        element:<PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivateRoute>
      }
    ],
  },
]);

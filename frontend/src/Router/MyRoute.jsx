import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import Productpage from "../pages/Productpage";
import Categorypage from "../pages/Categorypage";
import Login from "../pages/Login";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout   />,
        children: [
            {
                index: true, // index route
                element: <Homepage />,
            },
            {
                path:"login",
                element: <Auth />,
            },
            {
                path:"about",
                element: <Aboutpage />,
            },
            {
                path:"products",
                element: <Productpage />,
            },
            {
                path:"category",
                element:<Categorypage/>
            }
        ],
    }
]);

const MyRoute = () => {
  return <RouterProvider router={router} />;
};

export default MyRoute;
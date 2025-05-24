import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import Productpage from "../pages/Productpage";
import Categorypage from "../pages/Categorypage";

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
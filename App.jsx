import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./routes/Layout.jsx";
import Page404 from "./pages/Page404.jsx";
import HomeLayout from "./routes/HomeLayout";
import Home from "./pages/Home";
import ComingSoonLayout from "./routes/ComingSoonLayout";
import ComingSoon from "./pages/ComingSoon";
import "./App.scss";

export default function App() {
  const router = createBrowserRouter([
    { 
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes,
    }, 
    {
      element: <HomeLayout />,
      errorElement: <Page404 />,
      path: "/",
      children:[{
        index: true,
        element: <Home />,
      }],
    },
    {
      element: <ComingSoonLayout />,
      errorElement: <Page404 />,
      path: "coming-soon-page",
      children:[{
        index: true,
        element: <ComingSoon />,
      }], 
    }
  ]);
  return <RouterProvider router={router} />;
}
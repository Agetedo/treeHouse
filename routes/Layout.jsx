import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Loader from "../components/Loader.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
    return (
        <>
         <Header />
         <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
         </main>
         <Footer />
        </>
    );
}
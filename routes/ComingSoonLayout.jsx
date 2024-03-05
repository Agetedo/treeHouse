import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader.jsx";

export default function ComingSoonLayout() {
    return(
        <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
        </main>
    );
}
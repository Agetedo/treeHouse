import { Suspense, useRef } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Footer from "../components/Footer.jsx";
import HeaderBanner from "../components/HeaderBanner.jsx";
import Heading from "../components/Heading.jsx";

export default function HomeLayout() {
    const scrollToFooter = useRef(null);
    const handleScrollDown = () => {
        scrollToFooter.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest", 
        });
    };
    
    return(
        <>
            <main>
              <HeaderBanner />
              <Heading onClick={handleScrollDown}/>
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
            </main>
            <Footer ref={scrollToFooter} />
        </>
    );
}
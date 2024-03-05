import { useState } from "react";
import bannerClose from "/svg/close-icon.svg";
import "..//styles/HeaderBanner.scss";

function BannerText({ text }) {
    return( <p>{text}</p> );
}

export default function HeaderBanner() {
    const [banner, setBanner] = useState(false);

    return (
        <div className="banner" style={{ display: banner ? "none": "" }}>
            <div className="banner__items">
                <BannerText text={"Get 25% off buying the entire capsule collection | Subscribe to us and get 15% off your first order"} />
                <img onClick={()=> setBanner(!banner)} src={bannerClose} alt="#"/>
            </div>
       </div> 
    );
}
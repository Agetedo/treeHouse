/* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const Shop = React.lazy(() => import("../pages/Shop"));
const OurTeam = React.lazy(() => import("../pages/OurTeam"));
const OurImpact = React.lazy(() => import("../pages/OurImpact"));
const GiftCard = React.lazy(() => import("../pages/GiftCard"));
const Faq = React.lazy(() => import("../pages/Faq"));
const Journal = React.lazy(() => import("../pages/Journal"));
const Contacts = React.lazy(() => import("../pages/Contacts"));
const ComingSoon = React.lazy(() => import("../pages/ComingSoon"));
const ShirtCard = React.lazy(() => import("../pages/ShirtCard"));
const TShirtCard = React.lazy(() => import("../pages/TShirtCard"));
const BottomCard = React.lazy(() => import("../pages/BottomCard"));
const RoomperCard = React.lazy(() => import("../pages/RoomperCard"));
const HatCard = React.lazy(() => import("../pages/HatCard"));
const Article01 = React.lazy(() => import("../pages/Article01.jsx"));
const Article02 = React.lazy(() => import("../pages/Article02"));
const Article03 = React.lazy(() => import("../pages/Article03"));
const Article04 = React.lazy(() => import("../pages/Article04"));
const Article05 = React.lazy(() => import("../pages/Article05"));
const Article06 = React.lazy(() => import("../pages/Article06"));

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.SHOPPAGE, element: <Shop /> },
    { path: PathConstants.OURTEAMPAGE, element: <OurTeam /> },
    { path: PathConstants.OURIMPACTPAGE, element: <OurImpact /> },
    { path: PathConstants.GIFTCARDPAGE, element: <GiftCard /> },
    { path: PathConstants.FAQPAGE, element: <Faq /> },
    { path: PathConstants.JOURNALPAGE, element: <Journal /> },
    { path: PathConstants.CONTACTSPAGE, element: <Contacts /> },
    { path: PathConstants.COMINGSOONPAGE, element: <ComingSoon /> },
    { path: PathConstants.SHIRTCARDPAGE, element: <ShirtCard /> }, 
    { path: PathConstants.T_SHIRTCARDPAGE, element: <TShirtCard /> },
    { path: PathConstants.BOTTOMCARDPAGE, element: <BottomCard /> },
    { path: PathConstants.ROOMPERCARDPAGE, element: <RoomperCard /> },
    { path: PathConstants.HATCARDPAGE, element: <HatCard /> },
    { path: PathConstants.ARTICLE01PAGE, element: <Article01 /> },
    { path: PathConstants.ARTICLE02PAGE, element: <Article02 /> },
    { path: PathConstants.ARTICLE03PAGE, element: <Article03 /> },
    { path: PathConstants.ARTICLE04PAGE, element: <Article04 /> },
    { path: PathConstants.ARTICLE05PAGE, element: <Article05 /> },
    { path: PathConstants.ARTICLE06PAGE, element: <Article06 /> },
]
export default routes;
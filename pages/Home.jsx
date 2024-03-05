import Welcome from "../components/Welcome";
import Care from "../components/Care";
import Category from "../components/Category";
import OfferShop from "../components/OfferShop";
import BuyCaption from "../components/BuyCaption";
import ShopGallery from "../components/ShopGallery";
import Details from "../components/Details";

export default function Home() {
    return (
        <>
          <Welcome />
          <Care />
          <Category />
          <OfferShop />
          <BuyCaption />
          <ShopGallery />
          <Details />
        </>
    );
}
import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";
import Recommendations from "../components/Recommendations";

export default function HatCard() {
    return (
        <>
            <PageTitle homeLink={"Home"} shopLink={"Shop"} pageTitleLink={"Hat In Blue Denim"} />
            <ProductCard title={"Hat In Blue Denim"} 
              captionText={"This charming linen shirt will leave your little one looking effortlessly polished in utmost comfort."} 
              price={"29.00 USD"} ancor={"hatsReviews"} 
            />
            <Recommendations />
        </>
    );
}
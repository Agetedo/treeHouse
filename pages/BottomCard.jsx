import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";
import Recommendations from "../components/Recommendations";

export default function BottomCard() {
    return (
        <>
            <PageTitle homeLink={"Home"} shopLink={"Shop"} pageTitleLink={"Gingko Pant in Olive"} />
            <ProductCard title={"Gingko Pant in Olive"} 
              captionText={"This charming linen shirt will leave your little one looking effortlessly polished in utmost comfort."} 
              price={"42.00 USD"}  ancor={"bottomsReviews"}
            />
            <Recommendations />
        </>
    );
}
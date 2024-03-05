import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";
import Recommendations from "../components/Recommendations";

export default function ShirtCard() {
    return (
        <>
            <PageTitle homeLink={"Home"} shopLink={"Shop"} pageTitleLink={"Shirt Birch Shirt in Sand"} />
            <ProductCard newLabel={"NEW"} title={"Birch Shirt in Sand"} 
              captionText={"This charming linen shirt will leave your little one looking effortlessly polished in utmost comfort."} 
              price={"45.00 USD"} ancor={"shirtsReviews"} 
            />
            <Recommendations />
        </>
    );
}
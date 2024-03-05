import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";
import Recommendations from "../components/Recommendations";

export default function RoomperCard() {
    return (
        <>
            <PageTitle homeLink={"Home"} shopLink={"Shop"} pageTitleLink={"Maple Romper in Canyon Clay"} />
            <ProductCard title={"Maple Romper in Canyon Clay"} 
              captionText={"This charming linen shirt will leave your little one looking effortlessly polished in utmost comfort."} 
              price={"70.00 USD"} ancor={"roompersReviews"} 
            />
            <Recommendations />
        </>
    );
}
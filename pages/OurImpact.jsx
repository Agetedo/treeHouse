import Environment from "../components/Environment";
import Cotton from "../components/Cotton";
import Commitment from "../components/Commitment";
import Process from "../components/Process";
import Champion from "../components/Champion";
import People from "../components/People";
import Packaging from "../components/Packaging";
import Tend from "../components/Tend";
import ShopMenu from "../components/ShopMenu";

export default function OurImpact() {
    return (
        <>
          <ShopMenu />
          <Environment />
          <Cotton />
          <Commitment />
          <Process />
          <Champion />
          <People />
          <Packaging />
          <Tend />
        </>
    );
}
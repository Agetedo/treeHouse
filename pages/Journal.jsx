import OurJournal from "../components/OurJournal";
import LatestArticles from "../components/LatestArticles";
import ReadMoreArticles from "../components/ReadMoreArticles";
import Tend from "../components/Tend";

export default function Journal() {
    return (
        <>
          <OurJournal />
          <LatestArticles />
          <ReadMoreArticles />
          <Tend />
        </>
    );
}
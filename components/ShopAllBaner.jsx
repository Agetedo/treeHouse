import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import pageTitleArrow from "/svg/page-title-arrow.svg";
import "..//styles/PageTitle.scss";
import "..//styles/ShopAllBaner.scss";

function PageTitle({ pageTitleLink, homeLink }) {
    return (
      <div className="page-link">
        <div className="conteiner">
          <div className="page-link__items">
            <Link to={PathConstants.HOME}>{homeLink}</Link>
            <img src={pageTitleArrow} alt="#" />
            <span>{pageTitleLink}</span>
          </div>
        </div>
      </div>
    );
}
function Baner({caption, title }) {
    return(
        <div className="baner">
          <p>{caption}</p><h2>{title}</h2>
        </div>
    );
}

export default function ShopAllBaner() {
    return (
        <>
            <PageTitle homeLink={"Home"} pageTitleLink={"Shop all"} />
            <div className="shop__baner">
                <div className="conteiner">
                  <Baner caption={"shop all"} title={"Kid and nature approved styles"}/>
                </div>
            </div>
        </>
    );
}
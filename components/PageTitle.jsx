import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import pageTitleArrow from "/svg/page-title-arrow.svg";
import "..//styles/PageTitle.scss";

export default function PageTitle({ pageTitleLink, homeLink, shopLink }) {
  return (
    <div className="page-link">
      <div className="conteiner">
        <div className="page-link__items">
          <Link to={PathConstants.HOME}>{homeLink}</Link>
          <img src={pageTitleArrow} alt="#" />
          <Link to={PathConstants.SHOPPAGE}>{shopLink}</Link>
          <img src={pageTitleArrow} alt="#" />
          <span>{pageTitleLink}</span>
        </div>
      </div>
    </div>
  );
}
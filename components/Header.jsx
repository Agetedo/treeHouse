import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import thLogo from "/svg/logo.svg";
import searchIcon from "/svg/search-icon.svg";
import PathConstants from "../routes/pathConstants";
import "..//styles/Header.scss";

function HeaderLogo() {
  return(
    <Link to={PathConstants.HOME} id="headerLogo">
      <img src={thLogo} alt={"TreeHouse logo"} />
    </Link>
  );
}

function Search({ searchLink }) {
  return(
    <div className="search">
      <img src={searchIcon} alt={"Search icon"} />
      <Link to={PathConstants.COMINGSOONPAGE}>{searchLink}</Link>
    </div>
  );
}

function CardLink() {
  //const [quantityGood, setquantityGood] = useState( "(CART 02)", );Счетчик приходит из корзины через Context?
  return(
    <div className="cart__link">
      <Link to={PathConstants.COMINGSOONPAGE}>(CART 02)</Link>
    </div>
  );
}

function HeaderButtons() {
  return(
    <div className="header__buttons">
      <Search searchLink={"Search"} />
      <CardLink />
    </div>
  );
}

export default function Header({ indexHeader }) {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        if (nav) {
          document.body.style.overflow = "hidden";
        }else {
          document.body.style.overflowY = "scroll";
        }
    }, [nav]);

    return (
        <header className="header" style={indexHeader}>
            <div className="conteiner">

                <div className="header__items">
                    <HeaderLogo />

                    <div className="navigation">
                        <div className={nav ? "mobile__menu active" : "mobile__menu"} onClick={() => {setNav(!nav)}}>
                          <span /><span /><span />
                        </div>
                            
                        <nav className={nav ? "header__menu open" : "header__menu"} id="menuList">
                            <ul className={nav ? "menu__list show" : "menu__list"} >
                                        
                                <li className="menu__item" id="mobileItem">
                                  <NavLink to={PathConstants.HOME} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                                </li>
                                <li className="menu__item">
                                  <NavLink to={PathConstants.SHOPPAGE} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""}>Shop</NavLink>
                                </li>
                                <li className="menu__item">
                                  <NavLink to={PathConstants.OURTEAMPAGE} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""}>Our team</NavLink>
                                </li>
                                <li className="menu__item">
                                  <NavLink to={PathConstants.OURIMPACTPAGE} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""}>Our impact</NavLink>
                                </li>
                                <li className="menu__item">
                                  <NavLink to={PathConstants.GIFTCARDPAGE} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""}>Gift card</NavLink>
                                </li>
                                <li className="menu__item">
                                  <NavLink to={PathConstants.FAQPAGE} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""}>FAQ</NavLink>
                                </li>
                                <li className="menu__item">
                                  <NavLink to={PathConstants.JOURNALPAGE} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""}>Journal</NavLink>
                                </li>
                                <li className="menu__item">
                                  <NavLink to={PathConstants.CONTACTSPAGE} className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""}>Contacts</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <HeaderButtons />
                </div>
            </div>
        </header>
    );
}
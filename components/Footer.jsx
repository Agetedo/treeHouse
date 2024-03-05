import { forwardRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ScrollToTop from "react-scroll-to-top";
import footerLabel1 from "/footer-label-image01.png";
import footerLabel2 from "/footer-label-image02.png";
import footerLabel3 from "/footer-label-image03.png";
import upIcon from "/svg/up-icon.svg";
import footerLogo from "/svg/logo.svg";
import { socialMenu } from "../DataBase/socialMemu";
import { customerMenu } from "../DataBase/customerMenu";
import { puymentMenu } from "../DataBase/paymentMenu";
import { siteMapMenu } from "../DataBase/siteMapMenu";
import "..//styles/Footer.scss";

function FooterLabels() {
    return(
        <>
          <img src={footerLabel1} alt="#" className="footer__label1"/>
          <img src={footerLabel2} alt="#" className="footer__label2" />
          <img src={footerLabel3} alt="#" className="footer__label3" />
        </>
    );
}

function FooterForm({ buttonSubscribe }) {
    const [subscribe, setSubscribe] = useState("");

    function handleSubscribe(e) {
     e.preventDefault();

     const form = e.target;
     const formData = new FormData(form);

     fetch('/some-api', { method: form.method, body: formData });

     const formJson = Object.fromEntries(formData.entries());
     console.log(formJson);
    }

    return(
        <ErrorBoundary fallback={<p style={{ color: "red", textAlign: "center", fontSize: 20, paddingTop: 30, }}>
          There was an error while submitting the form</p>}
        >
            <form id="form1" method="post" onSubmit={handleSubscribe} >
                <input type="email" id="emailSubscribe" name="emailSubscribe"
                  value={subscribe} onChange={e => setSubscribe(e.target.value)}
                  autoComplete="off" placeholder="Enter your email" 
                />
                <button className="subscribe__button" type="submit">{buttonSubscribe}</button>
            </form>
        </ErrorBoundary>
    );
}

function FooterSubscribe({ subscribeTitle, logoAlt }) {
    return(
        <div className="footer__subscribe">
            <h6>{subscribeTitle}</h6>
            <FooterForm buttonSubscribe={"I'm in"}/>
            <img className="footer__logo" src={footerLogo} alt={logoAlt} />
        </div>
    );
}

function FooterRights({ textTitle, textRights }) {
    return(
        <div className="footer__rights">
          <p>{textTitle}{new Date().getFullYear()} © {textRights}</p>
          <ScrollToTop smooth component={<img id="pageTop" src={upIcon} alt="#" />} />
        </div>
    );
}

const socialList = socialMenu.map(item => 
    <li key={item.id} className="social-menu__item">
      <Link to={item.linkTo} rel="noopener" target="_blank" className="social-menu__link">{item.linlText}</Link>
    </li>
);
function SocialMenu({ socialCaption }) {
    return(
        <nav className="social__menu">
            <ul className="social-menu__list">
              <li className="menu__caption">{socialCaption}</li>
              {socialList}
            </ul>
        </nav>
    );
}

const customersList = customerMenu.map(item => 
    <li key={item.id} className="custome-menu__item">
      <Link to={item.linkTo} className="custome-menu__link">{item.linlText}</Link>
    </li>
);
function CustomerMenu({ customerCaption }) {
    return(
        <nav className="customer__menu">
            <ul className="customer-menu__list">
              <li className="menu__caption">{customerCaption}</li>
              {customersList}
            </ul>
        </nav>
    );
}

const paymentsList = puymentMenu.map(item => 
    <li key={item.id} className="payment-menu__item">
      <Link to={item.linkTo} className="payment-menu__link">
          <img src={item.linlImage} alt={item.imgAlt} />
      </Link>
    </li>
);
function PaymentMenu({ paymentCaption }) {
    return(
        <nav className="payment__menu">
            <ul className="payment-menu__list">
              <li className="menu__caption">{paymentCaption}</li>
              {paymentsList}
            </ul>
        </nav>
    );
}

const siteMapList = siteMapMenu.map(item => 
    <li key={item.id} className="sitemap-menu__item">
      <NavLink to={item.navLinkTo} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>{item.linkText}</NavLink>
    </li>
);
function SiteMapMenu({ siteMapCaption }) {
    return(
        <nav className="sitemap__menu">
            <ul className="sitemap-menu__list">
              <li className="menu__caption">{siteMapCaption}</li>
              {siteMapList}
            </ul>
        </nav>
    );
}

export default forwardRef(
    function Footer(props, scrollToFooter) {
        return (
            <footer id="footer" ref={scrollToFooter}>
                <FooterLabels />

                <div className="conteiner">
                    <div className="footer__items">

                        <FooterSubscribe logoAlt={"TreeHouse logo"}
                          subscribeTitle={"Subscribe to our mailing list and get 15% off your first order"}
                        />

                        <div className="footer__menu">
                            <SiteMapMenu siteMapCaption={"SITEMAP"}/>
                            <SocialMenu socialCaption={"SOCIAL"} />
                            <CustomerMenu customerCaption={"CUSTOMER CARE"} />
                            <PaymentMenu paymentCaption={"PAYMENT METHODS"} />
                        </div>
                    </div>
                    <FooterRights textTitle={"Tree House "} textRights={"All Rights reserved"} />
                </div>
            </footer>
        );
    }
);
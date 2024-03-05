import socialContactsLabel from "/social-contacts-label.png";
import socialContactsIcon from "/svg/social-contacts-icon.svg";
import { socialLinks } from "../DataBase/socialLinks";
import vipPopupIcon from "/svg/vip-group-popup-icon.svg";
import "..//styles/SocialContacts.scss";

function SocialContactsEmail({ caption, title, text, emailCaption, email, explication }) {
    return(
        <div className="social-contacts__email">
          <img src={socialContactsIcon} alt="#" />
          <p className="social-contacts__caption">{caption}</p>
          <h2 className="social-contacts__title">{title}</h2>
          <p className="social-contacts__text">{text}</p>
          <span id="socialEmail">{emailCaption}</span>
          <p id="socialEmailAddress">{email}</p>
          <p className="social-contacts__explication">{explication}</p>
        </div> 
    );
}
function SocialTooltip({ text, children }) {
    return (
        <div id="socialTooltip">
            {children}
            <p className="tooltip-text">
              <span>{text}</span>
            </p>
        </div>
    );
}
const ourSocial = socialLinks.map(link => 
    <li key={link.id} className="social-item">
      <a rel="noopener" target="_blank" href={link.linkTo}>{link.linlText}</a>
    </li>
);
function SocialLinks({ title, text }) {
    return(
        <div className="social-links">
            <h4>{title}</h4>
            <ul className="social-list">{ourSocial}</ul>
            <SocialTooltip text={text}>
              <img id="vipPopupIcon" src={vipPopupIcon} alt="#" />
            </SocialTooltip>
        </div>
    );
}

function SocialHours({ title, hours }) {
    return(
        <div className="social-contacts__hours">
          <h4>{title}</h4>
          <p id="businessHours">{hours}</p>
        </div> 
    );
}

export default function SocialContacts() {
    return (
        <div className="social-contacts">
            <img id="socialContactsLabel" src={socialContactsLabel} alt="#" />
            <div className="conteiner">

                <section className="social-contacts__items">
                    <SocialContactsEmail 
                      caption={"Drop us a line!"} title={"Let's be social!"}
                      text={"We're here to help, for everything and anything, chat us here!"}
                      emailCaption={"EMAIL"} email={"info@mygreenkid.com"}
                      explication={"For inquiries, returns, and exchanges and any question"}
                    />

                    <div className="social-contacts__links">
                      <SocialLinks title={"Our social"} 
                        text={"“The Green Kid Parents” — is a Telegram community group for The Green Kid and Treehouse parents"}
                      />
                      <SocialHours title={"Business hours"} hours={"8am-8pm"}/>
                    </div>
                </section>
            </div>
        </div>
    );
}
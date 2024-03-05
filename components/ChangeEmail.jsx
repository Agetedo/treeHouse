import changeEmailImage from "/change-email-image.jpg";
import changeEmailLabel from "/svg/change-email-label.svg";
import "..//styles/ChangeEmail.scss";

function ChangeEmailImage({ imageAlt }) {
    return(
        <div className="change-email__image">
          <img src={changeEmailImage} alt={imageAlt}/>
        </div>
    );
}

function ChangeEmailInfo({ title, caption, emailAddress }) {
    return(
        <section className="change-email__info">
            <img src={changeEmailLabel} alt="#" />
            <h3>{title}</h3>
            <h4>{caption}</h4>
            <p className="change-email__text">{emailAddress}</p>
        </section>
    );
}

export default function ChangeEmail() {
    return (
        <div className="change-email">
            <div className="conteiner">

                <div className="change-email__items">
                    <ChangeEmailInfo title={"Let's create a meaningful change together"}
                      caption={"don't hesitate to say hello"}
                      emailAddress={"info@mygreenkid.com"}
                    />
                    <ChangeEmailImage imageAlt={"Boy jumping on a field of flowers"} />
                </div>
            </div>
        </div>             
    );
}
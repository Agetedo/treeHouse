import toAddressLabel from "/questions-to-address-label.png";
import toAddressIcon from "/svg/questions-address-icon.svg";
import "..//styles/QuestionsToAddress.scss";

function AddressHeading({ text }) {
    return(
        <>
          <img id="toAddressIcon" src={toAddressIcon} alt="#" />
          <p className="address__text">{text}</p>
        </>
    );
}

function SocialAddress ({ social01, social02 }) {
    return(
        <div className="social-address__items">
          <span>{social01} </span>  
          <span>{social02}</span>
        </div> 
    );
}
function EmailAddress({ word, email }) {
    return(
        <>
          <span id="orDesign">{word}</span>
          <p className="email__address">{email}</p>
        </>
    );
}

export default function QuestionsToAddress() {
    return (
        <div className="questions__address">
            <img id="toAddressLabel" src={toAddressLabel} alt="#" />
            <div className="conteiner">

                <div id="address">
                    <AddressHeading 
                      text={"If you have other burning questions we weren't able to address here or just want to chat, text US"}
                    />
                    <SocialAddress
                      social01={"Instagram |"} social02={" Facebook"}
                    />
                    <EmailAddress 
                      word={"or"} email={"info@mygreenkid.com"}
                    />
                </div>
            </div>
        </div>
    );
}
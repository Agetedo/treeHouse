import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import buyCaptionImage from "/buy-caption-image.png";
import modalCloseIcon from "/svg/modal-close-icon.svg";
import modalContentIcon from "/svg/modal-content-icon.svg";
import "..//styles/BuyCaption.scss";

function BuyCaptionTitle({ title, titleWord }) {
    return(
        <>
          <img className="buy-caption__image" src={buyCaptionImage} alt="#" />
          <h2 className="buy-caption__title">{title}<span>{titleWord}</span></h2>
        </>
    );
}

function ModalContentTitle({ title }) {
    return(
        <>
          <img className="modal-content__icon" src={modalContentIcon} alt="#" />
          <h4 className="modal-content__title">{title}</h4>
        </>
    );
}

function ModalForm({ buttonSend, signUpText }) {
    const [send, setSend] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    function handleSend(e) {
     e.preventDefault();//Запретить браузеру перезагружать страницу

     const form = e.target;// Чтение данных формы
     const formData = new FormData(form);

     fetch('/some-api', { method: form.method, body: formData });// Передать formData напрямую

     const formJson = Object.fromEntries(formData.entries());// объект JSON
     console.log(formJson);
    }

    return(
        <ErrorBoundary fallback={<p style={{ color: "red", textAlign: "center", fontSize: 20, paddingTop: 30, }}>
          There was an error while submitting the form</p>}
        >
            <form method="post" onSubmit={handleSend} id="form2">
                <div className="email__items">
                    <input type="email" name="email"
                      value={send} onChange={e => setSend(e.target.value)}
                      placeholder="Enter your email" 
                    />
                    <button>{buttonSend}</button>
                </div>
                                    
                <div className="sign-up__items">
                    <input type="checkbox" id="signUp" checked={isChecked} 
                      onChange={() => setIsChecked(!isChecked)} 
                    />
                    <label htmlFor="signUp">{signUpText}</label>
                </div>
            </form>
        </ErrorBoundary>
    );
}

export default function BuyCaption() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
          document.body.style.overflow = "hidden";
        }
        else {
          document.body.style.overflowY = "scroll";
        }
    }, [showModal]);

    return (
        <div className="buy-caption">
            <div className="conteiner">

              <BuyCaptionTitle title={"Buy less, buy "} titleWord={"better"} />
                    
                <div className="buy-caption__button">
                    <button id="buttonNotify" onClick={() => setShowModal(true)}>Learn more</button>
                </div>
                
                {showModal && createPortal(
                <div id="notifyModal" onClose={() => setShowModal(false)}>
                    <div className="modal-content">

                        <div className="close" onClick={() => setShowModal(!showModal)}>
                          <span>close</span>
                          <img src={modalCloseIcon} alt="#" />
                        </div>

                        <ModalContentTitle title={"Notify me"}/>

                        <ModalForm buttonSend={"SEND"} 
                         signUpText={"Sign up to receive our updates, new arrivals and inspiration"}
                        />
                    </div>
                </div>, document.body )}

            </div>
       </div>        
    );
}
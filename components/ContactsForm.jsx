import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import formImage01 from "/form-image01.jpg";
import formImage02 from "/form-image02.jpg";
import FormLabel01 from "/contacts-form-label-image.png";
import FormLabel02 from "/vision-label-image.png";
import "..//styles/ContactsForm.scss";

function ContactsFormTitle({ title }) {
    return( <h2 className="contacts-form__title">{title}</h2> );
}

function FormSend({ buttonSend }) {
    const [sendName, setSendName] = useState("");
    const [sendEmail, setSendEmail] = useState("");
    const [sendTelephone, setSendTelephone] = useState("");
    const [sendMessage, setSendMessage] = useState("");
    function handleSend(e) {
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
            <form id="contactsForm" method="post" onSubmit={handleSend} >
                <input type="text" id="nameSend" name="name" autoComplete="off"
                  value={sendName} onChange={e => setSendName(e.target.value)}
                  placeholder="NAME" 
                />
                <input type="email" id="emailSend" name="email" autoComplete="off"
                  value={sendEmail} onChange={e => setSendEmail(e.target.value)}
                  placeholder="EMAIL" 
                />
                <input type="tel" id="telephoneSend" name="telephone" autoComplete="off"
                  value={sendTelephone} onChange={e => setSendTelephone(e.target.value)}
                  placeholder="PHONE" 
                />
                <textarea id="messageSend" name="message" autoComplete="off"
                  value={sendMessage} onChange={e => setSendMessage(e.target.value)}
                  rows={5} cols={10} placeholder="TEXT"
                />
                <button type="submit" className="send__button">{buttonSend}</button>
            </form>  
        </ErrorBoundary>
    );
}

function FormImages({ img01Alt, img02Alt, text }) {
    return(
        <div className="form-images__items">
            <div id="formImage01"><img src={formImage01} alt={img01Alt} /></div>
            <div id="formImage02">
                <p>{text}</p>
                <img src={formImage02} alt={img02Alt} />
            </div>
        </div>
    );
}

export default function ContactsForm() {
    return (
        <div className="contacts-form">
            <div className="conteiner">
                <img id="formLabel01" src={FormLabel01} alt="#" />
                <ContactsFormTitle title={"For everything under the sun, write us!"} />
                <div className="contacts-form__items">
                    <FormSend buttonSend={"SEND"}/>
                    <FormImages 
                      img01Alt={"An adult's hand holds a child's hand"}
                      text={"See you soon"}
                      img02Alt={"Girl with long hair"}
                    />
                </div>
                <img id="formLabel02" src={FormLabel02} alt="#" />
            </div>
        </div>
    );
}
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { amountValues } from "../DataBase/amountValues";
import { ErrorBoundary } from "react-error-boundary";
import AmountTax from "./AmountTax";
import sendCardClose from "/svg/send-card-close.svg";
import giftCardImage from "/gift-card-image.png";
import appearanceQuotes from "/svg/card-appearance-quotes.svg";
import emailTab from "/svg/email-tab-icon.svg";
import messengerTab from "/svg/messenger-tab-icon.svg";
import printTab from "/svg/print-tab-icon.svg";
import "react-tabs/style/react-tabs.scss";
import "..//styles/AmountForm.scss";

const selectList = amountValues.map(amount => 
    <option key={amount.id} value={amount.value} form="amountForm">{amount.number}</option>
);

function AddButton({ buttonText, onClick }) {
    return(
        <button type="button" id="addButton" onClick={onClick}>{buttonText}</button>
    );
}

function SendTitle({ title }) {
    return(
        <h3 className="send__text">{title}</h3> 
    );
}
function SendGiftClose({ onClick}) {
    return(
        <div id="sendGiftClose" onClick={onClick}>
          <img src={sendCardClose} alt="#" />
        </div> 
    );
}
function PanelText({ text }) {
    return( <p>{text}</p> );
}
function CardAppearance({ imgAlt, greeting }) {
    return(
        <div className="card__appearance">
            <img id="cardImage"src={giftCardImage} alt={imgAlt} />
            <img id="quotes" src={appearanceQuotes} alt="#" />
            <p className="appearance__text">{greeting}</p>
        </div>
    );
}
function SendButton({ buttonText }) {
    return(
        <button type="submit" id="sendButton">{buttonText}</button>
    );
}

export default function AmountForm({ labelAmount, labelQuantity }) {
    const [quantity, setQuantity] = useState(1);
    const incrementQuanity = () => {
        if (quantity < 50) {
            setQuantity(quantity + 1);
        }
    };
    const decrementQuantity = () => {
       if (quantity > 1) {
           setQuantity(quantity - 1);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
    
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
    
    const [selectedAmount, setSelectedAmount] = useState("25.00 USD");
    const [sendCard, setSendCard] = useState(false);
    const [recipientName, setRecipientName] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [greeting, setGreeting] = useState("Enjoy your gift!");

    return (
        <ErrorBoundary fallback={<p style={{ color: "red", textAlign: "center", fontSize: 20, paddingTop: 30, }}>
          There was an error while submitting the form</p>}
        >
            <AmountTax numberUsd={selectedAmount} taxIcluded={"(Tax included)"} />
            <form method="post" onSubmit={handleSubmit} id="amountForm">
                <fieldset className="amount__items">
                    <label> {labelAmount="Amount"} 
                        <select value={selectedAmount} onChange={e => setSelectedAmount(e.target.value)} name="amount">
                            {selectList}
                        </select>
                    </label>

                    <label>{labelQuantity="Quantity"}
                        <div className="quantity__items">
                            <input type="button" id="minus" defaultValue={"-"}
                              onClick={() => decrementQuantity()}
                            />
                            <input type="number" min={1} required="" id="number" name="quantity"
                              value={quantity} readOnly={true}
                            />
                            <input type="button" id="plus" defaultValue={"+"}
                              onClick={() => incrementQuanity()}
                            />
                        </div>
                    </label>
                </fieldset>

                <AddButton onClick={() => setSendCard(true)} buttonText={"ADD TO CART"} />
                 
                {sendCard && (<div className="send__selection">
                    <SendTitle title={"Let's send your gift card!"} />
                    <SendGiftClose onClick={() => setSendCard(false)} />
                    
                    <div className="send__items">
                        <Tabs id="tabItems">
                            <TabList>
                                <Tab><img src={emailTab} alt="#" /></Tab>
                                <Tab><img src={messengerTab} alt="#" /></Tab>
                                <Tab><img src={printTab} alt="#" /></Tab>
                            </TabList>

                            <TabPanel>
                                <PanelText 
                                  text={"We'll directly email the recipient a link to open your greeting card and redeem your gift"}
                                />
                                
                                <fieldset id="sendEmail">
                                    <label id="forTo">To:
                                        <input type="text" name="recipientName" autoComplete="off"
                                          value={recipientName} onChange={e => setRecipientName(e.target.value)}
                                          placeholder="Recipient&apos;s Name" required={true}
                                        />
                                        <input type="email" name="recipientEmail" autoComplete="off"
                                          value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)}
                                          placeholder="Recipient&apos;s Email" required={true}
                                        />
                                    </label>

                                    <label id="forGreeting">Greeting:
                                        <textarea name="greeting" autoComplete="off" form="amountForm"
                                          value={greeting} onChange={e => setGreeting(e.target.value)}
                                          rows={2} cols={2} maxLength="70" wrap="hard" 
                                        />
                                    </label>
                                </fieldset>
                            </TabPanel>

                            <TabPanel>
                                <PanelText 
                                  text={"You'll get a gift link to send to your recipient using Facebook Messenger, WhatsApp or any other messaging app. With the link, the recipient can open your greeting card and redeem the gift."}
                                />

                                <fieldset id="sendMessenger">
                                    <label id="forTo">To:
                                        <input type="text" name="recipientName" autoComplete="off"
                                          value={recipientName} onChange={e => setRecipientName(e.target.value)}
                                          placeholder="Recipient&apos;s Name" required={true}
                                        />
                                    </label>

                                    <label id="forGreeting">Greeting:
                                        <textarea name="greeting" autoComplete="off" form="amountForm"
                                          value={greeting} onChange={e => setGreeting(e.target.value)}
                                          rows={2} cols={2} maxLength="70" wrap="hard" 
                                        />
                                    </label>
                                </fieldset>
                            </TabPanel>

                            <TabPanel>
                                <PanelText 
                                  text={"Print your greeting card from your own computer. The card will include instructions for the recipient on how to open and redeem your gift online."}
                                />

                                <fieldset id="sendPrint">
                                    <label id="forTo">To: 
                                        <input type="text" name="recipientName" autoComplete="off"
                                          value={recipientName} onChange={e => setRecipientName(e.target.value)}
                                          placeholder="Recipient&apos;s Name" required={true}
                                        />
                                    </label>

                                    <label id="forGreeting">Greeting:
                                        <textarea name="greeting" autoComplete="off" form="amountForm"
                                          value={greeting} onChange={e => setGreeting(e.target.value)}
                                          rows={2} cols={2} maxLength="70" wrap="hard" 
                                        />
                                    </label>
                                </fieldset>
                            </TabPanel>
                        </Tabs>

                        <CardAppearance imgAlt={"Tree House gift card"} greeting={greeting} />
                    </div>
                    <SendButton buttonText={"SEND AS A GIFT"} />
                </div>)}
                
            </form>
        </ErrorBoundary>
    );
}
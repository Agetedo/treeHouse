import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import ellipsePoint from "/svg/conditions-ellipse-point.svg";
import "..//styles/Conditions.scss";

const importantText01 = <>{"Be sure to click on 'SEND GIFT CARD' on this page as you place your order. Instant Message a link to the recipient or Print to give in person. Plus you can add any Message here as well."}</>;
const importantText02 = <>{"Our gift cards have no additional are valid for 1 year from the date of purchase."}</>;
const importantText03 = <>{"Treehouse Gift Cards may not be purchased using promotional offers or discounts"}</>;
const whatElseText01 = <>{"Treehouse Cards are available for any amount between 25.00 USD and 500.00 USD"}</>;
const whatElseText02 = <>{"You may have them sent to your email or emailed directly to the recipient with a personal message."}</>;
const whatElseText03 = <>{"If the denomination you would like is not available here, simply email us at info@mygreenkid.com"}</>;
const whatElseText04 = <>{"Purchases will be deducted from the Gift Card until the value reaches zero. To check your balance, please email us at info@mygreenkid.com"}</>;

export default function Conditions({ caption }) {
    return (
        <div className="conditions">
            <div className="conteiner">

                <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="IMPORTANT"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="content__composition">
                              <img src={ellipsePoint} alt="#" />
                              <p>{importantText01}</p>
                            </div>
                            <div className="content__composition">
                              <img src={ellipsePoint} alt="#" />
                             <p>{importantText02}</p>
                            </div>
                            <div className="content__composition">
                              <img src={ellipsePoint} alt="#" />
                              <p>{importantText03}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="WHAY ELSE ?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="content__composition">
                              <img src={ellipsePoint} alt="#" />
                              <p>{whatElseText01}</p>
                            </div>
                            <div className="content__composition">
                              <img src={ellipsePoint} alt="#" />
                              <p>{whatElseText02}</p>
                            </div>
                            <div className="content__composition">
                              <img src={ellipsePoint} alt="#" />
                              <p>{whatElseText03}</p>
                            </div>
                            <div className="content__composition">
                              <img src={ellipsePoint} alt="#" />
                              <p>{whatElseText04}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
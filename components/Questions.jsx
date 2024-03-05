import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import ellipsePoint from "/svg/conditions-ellipse-point.svg";
import questionsLabel01 from "/vision-label-image.png";
import questionsLabel02 from "/questions-label-image.png";
import "..//styles/Questions.scss";

function AccordionTitle({ title }) {
    return( <h3 className="accordion__title">{title}</h3> );
}

const shippingText = <>{"We offer free shipping within the continental US on orders of $150+. Orders shipping to Alaska, Hawaii, or outside of the US are excluded from free shipping."}</>;
const outsideText01 = <>{"Yes, we ship all over the world! Shipping costs will apply, and will be added at checkout. Packages are shipped from the US and will typically take 10-14 days to arrive."}</>;
const outsideText02 = <>{"Treehouse is not responsible for any customs, duties or import fees associated with receiving your order. Customs and duties are the sole responsibility of the purchaser."}</>;
const returnText = <>{"We want to make exchanges and returns as easy as possible for you. Please click here for our return policy."}</>
const orderText = <>{"We aim to ship all orders in 1 - 2 business days. During peak holiday or sale times, it may take longer. If you've any questions or concerns about your order, contact us at info@mygreenkid.com"}</>;
const shippedText01 = <>{"All orders will be shipped via USPS."}</>;
const shippedText02 = <>{"All orders are packaged in compostable mailing bags for shipping."}</>;
const shippedText03 = <>{"We do not use additional filler material–such as tissue or shredded paper–in order to minimize waste as much as possible."}</>;
const trackText = <>{"Yes. Once your order has shipped, you will receive an email containing your tracking information and expected delivery date."}</>;
const shipmentText = <>{"If you've had issues with your shipment, we are here to help. Please email us at info@mygreenkid.com with your order number and a detailed description of the issue with any supporting photos as applicable."}</>;
const designsText =<>{"Parents! And a team of super talented Italian designers. Why both? Because, while designers know the ins and outs of what looks good, parents know what feels and works best. Our parent community's input is incredibly important to us, and goes into all we do!"}</>
const manufacturedText01 = <>{"Our clothing is manufactured by our partners in Coimbatore, India. We spent a long time searching for, researching, vetting, and conducting visits to potential factories. We found the right partnership for Treehouse in Aadhava Apparel, a company as committed as we are to sustainability and ethical production. Read more about our factory visit and Aadhava Apparels people and impact here."}</>;
const manufacturedText02 = <>{"Aadhava Apparels is deeply committed to the welfare of their workers. The company pays a living wage, provides paid benefits such as maternity leave, health care benefits and eyesight checks. Working conditions are controlled to ensure no overwork and regular breaks.Read more about our factory visit and Aadhava Apparels' people and impact here. We chose Aadhava Apparels because the company was founded on the principles of ethical production and is deeply committehas a deep commitment to its workers and the surrounding environment. Their The owners and management as constantly seeking ways to improve and become more efficient."}</>;
const fitText = <>{"Our products generally fit true to size. We have included a size chart on each product page for you to double check prior to purchasing. Additionally, we will mention if an item fits larger or smaller in each product's description."}</>;
const fabricsText = <>{"GOTS-certified organic cotton is the largest source of raw material in our main collection. The conventional production of cotton material has a significant negative impact on the environment and potential negative impact on our health: this is why we will never use conventional cotton in our production. In our Summer 2023 collection, we've also used OEKO-TEX Standard 100 certified linen which means the linen has been tested for harmful substances: the article therefore is harmless for human health."}</>;
const stockText = <>{"In order to limit the potential for textile waste, we manufacture in small batches. As a result, our collections are limited. The good news is, we will be manufacturing new collections next season. You can sign up to be informed via our mailing list here."}</>;
const sizeText = <>{"If in between, we always recommend choosing a bigger size for your child. They're always growing and are sure to fit the next size up soon. Note, as well, that on each product's page is listed if a garment tends to run small or large."}</>;

export default function Questions({ caption }) {
    return (
        <div className="questions">
            <img id="questionsLabel01" src={questionsLabel01} alt="#" />
            <img id="questionsLabel02" src={questionsLabel02} alt="#" />
            <div className="conteiner">

                <AccordionTitle title={"Shipping/Returns/Exchanges"}/>
                <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="Do you offer free shipping?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{shippingText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="Do you ship outside the US?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{outsideText01}</p>
                            </div>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{outsideText02}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="How can I do an exchange or return?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{returnText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="How soon will my order ship?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{orderText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="How will my items be shipped?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{shippedText01}</p>
                            </div>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{shippedText02}</p>
                            </div>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{shippedText03}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="Can I track my order?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{trackText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="My shipment was damaged/missing an item. Who should I contact?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{shipmentText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

                <AccordionTitle title={"Clothing Production"}/>
                <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="Who designs your clothing?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{designsText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="Where is your clothing manufactured?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{manufacturedText01}</p>
                            </div>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{manufacturedText02}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

                <AccordionTitle title={"Products / Sizing"}/>
                <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="How does your clothing fit?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{fitText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="Which fabrics do you use in your collections?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{fabricsText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="A product I love is out of stock! Will you be getting more in soon?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{stockText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>{caption="My child seems to be right in between sizes. What size do you recommend I choose?"}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="question">
                              <img src={ellipsePoint} alt="#" />
                              <p>{sizeText}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
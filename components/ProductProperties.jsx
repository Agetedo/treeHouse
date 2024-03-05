import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import ellipsePoint from "/svg/conditions-ellipse-point.svg";
import "..//styles/ProductProperties.scss";

const compositionText01 = <>{"100% OEKO-TEX®certified Linen Shirt"}</>;
const descriptionText01 = <>{"Loose, breathable, and stylish, this 100% OEKO-TEX® certified linen shirt will leave your little one looking polished in utmost comfort. Its boxy fit is perfect for running through sand dunes, exploring the city, or strollingn through the park, and its neutral coloring is perfect for the summer sun."}</>;
const descriptionText02 = <>{"The linen weave allows for breathability in hot temps, keeping your cutie at ease. Additionally, Its versatile design features a belt, meaning your big kid’s shirt can be a shirt dress for little siblings. In short, this shirt is beautiful, durable, and comfortable for all your little loves"}</>;
const descriptionText03 = <>{"DID YOU KNOW? The birch leaf symbolizes protection, keeping your little one safe on their big adventures."}</>
const featuresText01 = <>{"Sustainably and ethically produced from OEKO-TEX STANDART 100 certified linen"}</>;
const featuresText02 = <>{"Belt loops (for wearing as a shirt dress in a size down)"}</>;
const featuresText03 = <>{"Wooden button detailing"}</>;
const clothingText01 = <>{"Wash in cold or warm water (<30C) with eco-detergent. Line dry or tumble dry on low. Hand-down or donate when outgrown"}</>;
const shippingText01 = <>{"We offer free shipping within the continental US on orders of $150+. Orders shipping to Alaska, Hawaii, or outside of the US are excluded from free shipping."}</>;
const shippingText02 = <>{"We offer standard rates for both domestic and international shipping. If in Manhattan, deliveries will be made same day if the order is received before 1pm EST. Brooklyn, Queens, and New Jersey shipments will be delivered next day. All orders received before 1pm EST will be shipped same day, regardless of domestic or international address."}</>;


export default function ProductProperties({ caption }) {
    return (
        <div className="product-properties">
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>{caption="Composition"}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{compositionText01}</p>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>{caption="Description"}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{descriptionText01}</p>
                        </div>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{descriptionText02}</p>
                        </div>
                        <div className="content__composition">
                          <p>{descriptionText03}</p>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>{caption="Features"}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{featuresText01}</p>
                        </div>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{featuresText02}</p>
                        </div>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{featuresText03}</p>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>{caption="Clothing Care"}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{clothingText01}</p>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>{caption="Shipping and Delivery"}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{shippingText01}</p>
                        </div>
                        <div className="content__composition">
                          <img src={ellipsePoint} alt="#" />
                          <p>{shippingText02}</p>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
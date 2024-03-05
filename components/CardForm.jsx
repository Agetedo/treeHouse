import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createPortal } from "react-dom";
import { sizeValues } from "../DataBase/sizeValues";
import productColorIcon from "/product-color-icon.png";
import sizeCloseIcon from "/svg/size-close-icon.svg";
import sizeImage from "/size-guide-image.jpg";
import "..//styles/CardForm.scss";

function ColorTooltip({ text, children }) {
    return (
        <div id="colorTooltip">
            {children}
            <p className="tooltip-text">
              <span>{text}</span>
            </p>
        </div>
    );
}
function ProductColor ({ labelColor, text }) {
    return(
        <div className="product-color__items">
            <div id="color">
                <span>{labelColor}</span>
                <div id="productColor"></div>
            </div>
            <ColorTooltip text={text}>
                <img src={productColorIcon} alt="#" />
            </ColorTooltip>
        </div> 
    );
}
const selectList = sizeValues.map(size => 
    <option key={size.id} value={size.value} form="cardForm">{size.size}</option>
);
function ButtonSizeGuide({ buttonText, onClick }) {
    return(
        <button type="button" id="sizeGuide" onClick={onClick}>{buttonText}</button>
    );
}
function AddToCartButton({ buttonText }) {
    return(
        <button type="submit" id="addCart">{buttonText}</button>
    );
}

export default function CardForm({ labelSize, labelQuantity }) {
    const [selectedSize, setSelectedSize] = useState("");
    const [showSizeGuide, setShowSizeGuide] = useState(false);

    useEffect(() => {
        if (showSizeGuide) {
          document.body.style.overflow = "hidden";
        }else {
          document.body.style.overflowY = "scroll";
        }
    }, [showSizeGuide]);

    const [productQuantity, setProductQuantity] = useState(1);
    const incrementProductQuanity = () => {
        if (productQuantity < 50) {
          setProductQuantity(productQuantity + 1);
        }
    };
    const decrementProductQuantity = () => {
       if (productQuantity > 1) {
          setProductQuantity(productQuantity - 1);
        }
    };

    function handleAdd(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
    
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <ErrorBoundary fallback={<p style={{ color: "red", textAlign: "center", fontSize: 20, paddingTop: 30, }}>
          There was an error while submitting the form</p>}
        >
            <ProductColor 
              labelColor={"Color"}
              text={"All colors are carefully selected in accordance with the Pantone Color Institute"}
            />
            
            <form method="post" onSubmit={handleAdd} id="cardForm">
                <fieldset className="size__items">
                    <label> {labelSize="Select size"} 
                        <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)} name="size">
                            {selectList}
                        </select>
                    </label>
                    <ButtonSizeGuide onClick={() => setShowSizeGuide(true)} buttonText={"Size guide"} />
                </fieldset>

                <label>{labelQuantity="Quantity"}
                    <div className="product-quantity__items">
                        <input type="button" id="productMinus" defaultValue={"-"}
                          onClick={() => decrementProductQuantity()}
                        />
                        <input type="number" min={1} required="" id="productNumber" name="productQuantity"
                          value={productQuantity} readOnly={true}
                        />
                        <input type="button" id="productPlus" defaultValue={"+"}
                          onClick={() => incrementProductQuanity()}
                        />
                    </div>
                </label>
                <AddToCartButton buttonText={"ADD TO CART"} />
            </form>

            {showSizeGuide && createPortal(
            <div id="sizeBlackout" onClose={() => setShowSizeGuide(false)}>
                <div className="size-image">
                    <img className="size__close" src={sizeCloseIcon} alt="#" 
                      onClick={() => setShowSizeGuide(!showSizeGuide)} 
                    />
                    <img id="sizeImage" src={sizeImage} alt="Size" />
                </div>
            </div>, document.body )}
        </ErrorBoundary>
    );
}
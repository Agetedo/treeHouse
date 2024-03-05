import cottonImage from "/cotton-image.jpg";
import { cottonIndicators } from "../DataBase/cottonIndicators";
import cottonLabel01 from "/cotton-label01.png";
import cottonLabel02 from "/cotton-label02.png";
import "..//styles/Cotton.scss";

function CottonImage({ imgAlt }) {
    return( 
        <div className="cotton__image">
          <img src={cottonImage} alt={imgAlt} />
        </div>
    );
}

function CottonCaption({ caption }) {
    return( <><h3>{caption}</h3></> );
}

const indicatorList = cottonIndicators.map(indicator => 
    <div key={indicator.id} className="cotton-indicator">
      <p>{indicator.caption01}<br />{indicator.caption02}</p>
      <span>{indicator.percent}</span>
      <p>{indicator.text}</p>
    </div>
);

function CottonLabels() {
    return(
        <>
          <img id="cottonLabel01" src={cottonLabel01} alt="#" />
          <img id="cottonlabel02" src={cottonLabel02} alt="#" />
        </>
    );
}

export default function Cotton() {
    return (
        <div className="cotton">
            <div className="conteiner">
                
                <div className="cotton__items">
                    <CottonImage imgAlt={"Сotton plant"} />
                    
                    <section className="cotton-indicators">
                        <CottonCaption caption={"Did you know that?"} />
                        <div className="cotton-indicators__items">{indicatorList}</div>
                    </section>
                </div>
                <CottonLabels />
            </div>
        </div>      
    );
}
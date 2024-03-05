import { careCard } from "../DataBase/careCard";
import TitleLeft from "./TitleLeft";
import careImage01 from "/care-image01.png";
import careImage02 from "/care-image02.png";
import "..//styles/Care.scss";

export default function Care() {
    const section12 = careCard.filter(card =>
        card.number === 1 || card.number === 2
    );
      const section34 = careCard.filter(card =>
        card.number === 3 || card.number === 4
    );

    return (
        <div className="care">
            <div className="conteiner">
                <div className="care__items">

                    <div id="section12">
                        <TitleLeft caption={"Our care"} titleFirst={"We prioritize your"} titleSecond={"peace of mind."}/>    
                         
                        {section12.map(card =>
                          <div key={card.id} className="care__card">
                            <div className="care__caption">
                              <span>{card.number}</span>
                              <h4>{card.title}</h4>
                            </div>
                            <p>{card.text}</p>
                          </div>
                        )}
                        <img id="careImage01" src={careImage01} alt="Three pairs of hands hold a sprout of a green plant" />
                    </div>

                    <div id="section34">
                        <img id="careImage02" src={careImage02} alt="Three children turned back" />
            
                        {section34.map(card =>
                          <div key={card.id} className="care__card">
                            <div className="care__caption">
                              <span>{card.number}</span>
                              <h4>{card.title}</h4>
                            </div>
                            <p>{card.text}</p>
                          </div>
                        )}
                    </div>

                </div>
            </div>
      </div>       
    );
}
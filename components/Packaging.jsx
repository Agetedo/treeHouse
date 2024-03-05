import packagingImage from "/packaging-image.jpg";
import packagingLabel from "/packaging-label.png";
import footnoteIcon from "/svg/footnote-icon.svg";
import "..//styles/Packaging.scss";

function PackagingImage({ imgAlt }) {
    return( <><img src={packagingImage} className="packaging__image" alt={imgAlt} /></> );
}

function PackagingLabel() {
    return( 
        <div id="packagingLabel">
          <img src={packagingLabel} alt="#" />
        </div> 
    );
}
function Definition ({ title, rubricText01, rubricText02, text }) {
    return( 
        <>
           <h3>{title}</h3>
           <p className="rubric">{rubricText01}<br />{rubricText02}</p>
           <p className="packaging__text">{text}</p> 
        </>
    );
}

function PackagingFootnote({ text }) {
    return( 
        <div className="packaging__footnote">
          <img src={footnoteIcon} alt="#" />
          <p>{text}</p>
        </div>
    );
}

export default function Packaging() {
    return (
        <div className="packaging">
            <div className="conteiner">
                <div className="packaging__items">
                    <PackagingImage imgAlt={"Transparent polyethylene film"}/>
                    
                    <div className="packaging__definition">
                        <PackagingLabel />
                        <Definition
                          title={"Packaging"}
                          rubricText01={"the issue of responsible packaging"}
                          rubricText02={"is an ever moving target"}
                          text={"We give careful attention to the impact of our packaging materials. We are committed to eliminating plastic, minimizing all unnecessary packaging. The materials we do use to keep your item clean and safe are fully compostable."}
                        />
                    </div>
                </div>
                <PackagingFootnote 
                  text={"Every brand has a choice, and our choice is to be kind."}
                />
            </div>
        </div>
    );
}
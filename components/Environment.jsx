import environmentImage from "/environment-organic-image.jpg";
import { standartsLinks } from "../DataBase/standartsLinks";
import "..//styles/Environment.scss";

function EnvironmentTitle({ title, rubtic }) {
    return(
        <><h2>{title}</h2> <h3>{rubtic}</h3></>
    );
}
const environmentText = <>{"We are committed to doing better on everything from how the cotton has been farmed, to the type of packaging we use to send your order. We go follow industry leading certification requirements throughout every step of our supply chain. Read more about"}
    {<a rel="noopener" target="_blank"  href="https://global-standard.org/" className="environment-standart__link">GOTS-certified</a>}
    {" organic cotton and "}
    {<a rel="noopener" target="_blank" href="https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100" className="environment-standart__link">OEKO-TEX</a>}
    {" ®"} 
    {<a rel="noopener" target="_blank" href="https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100" className="environment-standart__link">standard 100</a>}
{" linen®."}</>
const standartsList = standartsLinks.map(standart => 
    <a key={standart.id} rel="noopener" target="_blank" href={standart.link} className="standart__link">
      <img src={standart.imgSrc} alt={standart.imgAlt} />
    </a>
);

function EnvironmentOrganic({ imgAlt, title, text }) {
    return(
        <div className="environment-organic">
            <img src={environmentImage} alt={imgAlt} />
            <h3>{title}</h3>
            <p className="environment-organic__text">{text}</p>
        </div>
    );
}

export default function Environment() {
    return (
        <div className="environment">
            <div className="conteiner">

                <div className="environment__items">

                    <section className="environment-standart">
                        <EnvironmentTitle 
                          title={"Environment"}
                          rubtic={"from the way the cotton is farmed to how we package our products"}
                        />
                        <p className="environment-standart__text">{environmentText}</p>
                        <div className="standarts__items">{standartsList}</div>
                    </section>

                    <EnvironmentOrganic 
                      imgAlt={"Plants on the field"}
                      title={"CONVENTIONAL VS. ORGANIC"}
                      text={"Conventional cotton production has a significant negative impact on the environment due to excessive water usage, heavy use of pesticides and fertilizers, soil degradation, and contribution to greenhouse gas emissions. We will use GOTS-certified organic cotton only to significantly reduce environmental harm."}
                    />
                </div>
            </div>
        </div>
    );
}
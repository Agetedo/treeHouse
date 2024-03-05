import processImage01 from "/process-image01.jpg";
import processImage02 from "/process-image02.jpg";
import TitleLeft from "../components/TitleLeft.jsx";
import processLabel from "/process-label.png";
import "..//styles/Process.scss";

function ProcessImages({ img01Alt, img02Alt }) {
    return(
        <>
          <div id="processImage01">
              <img src={processImage01} alt={img01Alt} />
            </div>
          <img id="processImage02" src={processImage02} alt={img02Alt} />
        </>
    );
}
function Rubric({ rubricText01, rubricText02 }) {
    return( <p className="rubric">{rubricText01}<br />{rubricText02}</p> );
}
const processText = <>{"We take a hands-on approach in overseeing every stage of the production process and feel privileged to have partners who are "}
    {<a rel="noopener" target="_blank" href="https://global-standard.org/" className="process__link">GOTS</a>}
    {" and "}
    {<a rel="noopener" target="_blank" href="https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100" className="process__link">OEKO-TEX</a>}
    {" ®"} 
    {" certified, operate using renewable energy sources such as solar panels. Sustainability is at the forefront of their operations, read more about their initiatives here."}
</>
function ProcessLabel() {
    return( <><img id="processLabel" src={processLabel} alt="#" /></> );
}

export default function Process() {
    return (
        <div className="process">
            <div className="conteiner">

                <div className="process__items">
                    <ProcessImages img01Alt={"Loom"} img02Alt={"Rolls of light fabric"} />
                    <section className="process__content">
                        <TitleLeft titleFirst={"Process"} />

                        <Rubric 
                          rubricText01={"We partner with factories and farmers"}
                          rubricText02={"in India committed to our principles"}
                        />
                        <p className="process__text">{processText}</p>
                    </section>
                </div>
                <ProcessLabel />
            </div>
        </div>       
    );
}
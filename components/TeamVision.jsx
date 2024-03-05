import TitleLeft from "./TitleLeft";
import visionLabel from "/vision-label-image.png";
import visionLeafAnimation from "/vision-leaf-animation.png";
import "..//styles/TeamVision.scss";

function VisionTitle({ rubric01, rubric02 }) {
    return (
        <div className="team-vision__title">
            <TitleLeft caption={"sustainability and respect"} titleFirst={"Our vision"}/>
            <p className="rubric">{rubric01}<br />{rubric02}</p>
        </div>
    );
}
function VisionText({ text01, text02 }) {
    return (
        <div className="team-vision__text">
          <p>{text01}</p> <p>{text02}</p>
        </div> 
    );
}

export default function TeamVision() {
    return (
        <div className="team-vision">
            <img id="visionLabel" src={visionLabel} alt="#" />
            <div className="conteiner">

                <div className="team-vision__items">
                    <VisionTitle rubric01={"Our promise to you is transparenc"} 
                    rubric02={"and progress, not perfection"} />

                    <VisionText
                      text01={"Treehouse envisions a world where conscious living and responsible practices are the norm, supported by a community that prioritizes intentional design."}
                      text02={"Through simple gender-neutral capsule collections of only essential items and a transparent supply chain, we create long lasting pieces that stand the test of time and live to be enjoyed by siblings and friends."} 
                    />
                </div>
                <img id="visionLeafAnimation" src={visionLeafAnimation} alt="#" />
            </div>
        </div>      
    );
}
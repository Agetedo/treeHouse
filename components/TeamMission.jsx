import TitleLeft from "./TitleLeft";
import missionImg01 from "/team-mission-image01.jpg";
import missionImg02 from "/team-mission-image02.jpg";
import teamPrinciplesImage from "/team-principles-image.jpg";
import { missionPrinciples } from "../DataBase/missionPrinciples";
import "..//styles/TeamMission.scss";

function MissionTitle({ rubric, missionText }) {
    return (
        <div className="team-mission__title">
            <TitleLeft caption={"sustainable values"} titleFirst={"Our mission."} />     
            <p className="rubric">{rubric}</p>
            <p className="team-mission__text">{missionText}</p>
        </div> 
    );
}

function MissionImages({ img01Alt, img02Alt }) {
    return (
        <div className="team-mission__images">
            <img src={missionImg01} alt={img01Alt} />
            <img id="missionImage02" src={missionImg02} alt={img02Alt} />
        </div> 
    );
}

function PrinciplesTitle({ title }) {
    return <h3>{title}</h3>
}
const principlesList = missionPrinciples.map(item => 
    <li key={item.id} className={item.className}>
      <span>{item.number}</span>{item.text}
    </li>
);
function PrinciplesList() {
    return (
        <ul className="principles__list">
          {principlesList}
        </ul>
    );
}
function Signature({ text }) {
    return <span id="signatureAnastasia">{text}</span>
}
function TeamPrinciples() {
    return (
        <section className="team-principles">
            <PrinciplesTitle title={"We're committed to 4 key principles:"}/>
            <PrinciplesList />
            <Signature text={"XO, Anastasia"} />
        </section> 
    );
}

export default function TeamMission() {
    return (
        <div className="team-mission">
            <div className="conteiner">

                <div className="team-mission__items">
                    <MissionTitle 
                      rubric={"JOIN US ON THIS journey towards ethical practices, sustainable fashion, and happy kids!"}
                      missionText={"Our mission is to revolutionize kids fashion by creating the change we wish to see in the world. We believe clothing should be above all, kind."}
                    />
                    
                    <MissionImages 
                      img01Alt={"Two children are walking along the road in the forest"}
                      img02Alt={"A red heart is painted on a tree trunk"}
                    />
                </div>

                <div className="team-principles__items">
                    <img src={teamPrinciplesImage} alt="Man and woman at white table" />
                    <TeamPrinciples />
                </div>
            </div>
        </div>
    );
}
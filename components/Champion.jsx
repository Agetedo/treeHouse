import championImage from "/champion-image.png";
import "..//styles/Champion.scss";

function ChampionTitle({ title, titleWord }) {
    return(
        <>
          <img className="champion__image" src={championImage} alt="#" />
          <h2 className="champion__title">{title}<span>{titleWord}</span></h2>
        </>
    );
}

export default function Champion() {
    return (
        <div className="champion">
            <div className="conteiner">
              <ChampionTitle title={"champion your "} titleWord={"values"}/>
            </div>
        </div>
    );
}
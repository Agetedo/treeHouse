import teamHeadingLabel from "/svg/team-icon.svg";
import teamHeadingImage from "/team-heading-image.jpg";
import teamShortImage from "/team-short-image.png";
import "..//styles/TeamHeading.scss";

function HeadingImages({ headingImageAlt }) {
    return (
        <>
         <img id="teamHeadingLabel" src={teamHeadingLabel} alt="#" />
         <img src={teamHeadingImage} alt={headingImageAlt} className="team-heading__image" />
        </>
    );
}

function HeadingTitle({ title, caption  }) {
    return (
        <>
          <h2 className="team-heading__title">{title}</h2>
          <p className="team-heading__caption">{caption}</p>
        </>  
    );
} 
function VisionItems({ title01, title02, title03 }) {
    return (
        <div className="vision__items">
          <img src={teamShortImage} alt="#" />
          <h2>{title01}<span>{title02}</span>{title03}</h2>
        </div>   
    );
}
function HeadingText({ text }) {
    return (
        <p className="team-heading__text">{text}</p> 
    );
}
function HeadingInformation () {
    return (
        <section className="team-heading__information">
            <HeadingTitle title={"Hi there!"} caption={"just some information about"} />
            <VisionItems title01={"Who we are. "} title02={"Our vision."} title03={" Our mission."}/>
            <HeadingText text={"Created by Anastasia, a mom with a passion for progress, sustainability and ethics. Treehouse is not just about timeless and whimsical style but it also serves a deeper purpose, one focused on doing better for our planet, our society and our children."} />
            <HeadingText text={"We are passionate about empowering parents to make informed clothing choices for their families. We believe that a collective move towards more sustainable practices is the only way to shift the landscape of traditional fashion."} />
        </section>
    );
} 

export default function TeamHeading() {
    return (
        <div className="team-heading">
            <div className="conteiner">

                <div className="team-heading__items">
                    <HeadingImages headingImageAlt={"Woman and two children on a city street"}/>
                    <HeadingInformation />
                </div>
            </div>
        </div>
    );
}
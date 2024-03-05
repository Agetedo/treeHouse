import peopleLabel from "/people-label.png";
import TitleLeft from "../components/TitleLeft.jsx";
import peopleImage01 from "/people-image01.jpg";
import peopleImage02 from "/people-image02.jpg";
import "..//styles/People.scss";

function Rubric({ rubricText01, rubricText02 }) {
    return( <p className="rubric">{rubricText01}<br />{rubricText02}</p> );
}
function PeopleText({ text }) {
    return( <p className="people__text">{text}</p> );
}
function ContentImage({ img02Alt }) {
    return( <><img id="contentImage" src={peopleImage02} alt={img02Alt} /></>  );
}
function PeopleImage({ img01Alt }) {
    return( 
        <div id="peopleImage">
          <img src={peopleImage01} alt={img01Alt} />
        </div>  
    );
}

export default function People() {
    return (
        <div className="people">
            <div className="conteiner">
                <img id="peopleLabel" src={peopleLabel} alt="#" />

                <div className="people__items">
                    <section className="people__content">
                        <TitleLeft titleFirst={"People"} />

                        <Rubric 
                          rubricText01={"workers are employed locally, 98% of them living"}
                          rubricText02={"not further than 10km from production unit"}
                        />
                        <PeopleText 
                          text={"Those who cut, sew, and dye our garments are true artisans who are respected, well compensated and work in healthy and safe environments. They enjoy all of the perks associated with their esteemed profession, including health care benefits and paid leave."}
                        />
                        <ContentImage img02Alt={"Drawing of a yellow smiley face on the asphalt"}/>
                    </section>
                    
                    <PeopleImage img01Alt={"A man sews on a sewing machine in the workshop"} />
                </div>
            </div>
        </div>
    );
}
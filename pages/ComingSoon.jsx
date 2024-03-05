import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import "..//styles/ComingSoon.scss";

function SoonHeading({ title, text }) {
    return(
        <section className="soon-heading">
          <h2>{title}</h2><p>{text}</p>
        </section>
    );
}

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "December, 31, 2024";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 800);
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="timer__items">
            <div className="time__box">
              <p id="day">{days < 10 ? "0" + days : days}</p>
              <span>Days</span>
            </div>
            
            <div className="time__box">
              <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
              <span>Hours</span>
            </div>
            
            <div className="time__box">
              <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
              <span>Minutes</span>
            </div>
            
            <div className="time__box">
              <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
              <span>Seconds</span>
            </div>
        </div>
    );
}

function ReservedText({ text }) {
    return( <p className="reserved__text">{new Date().getFullYear()}{text}</p> );
}

function HomeLink({ linkText }) {
    return(
        <div className="home__link">
          <Link to={PathConstants.HOME}>{linkText}</Link>
        </div>
    );
}

export default function ComingSoon() {
    return (
        <div className="soon">
            <div className="soon__conteiner">

                <div className="soon__wrapper">
                    <div className="soon__items">
                      <SoonHeading title={"Coming Soon"} text={"Mindfully crafted children's clothing focused on your little one and designed with great care for our planet and the people on it"}/>
                      <Timer />
                      <HomeLink linkText={"Back To Home"} />
                    </div>
                </div>
                <ReservedText text={" TreeHouse. All Rights reserved."} />
            </div>
        </div>
    );
}
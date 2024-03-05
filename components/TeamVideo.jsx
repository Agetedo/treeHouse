import { useState, useRef, useEffect } from 'react';
import teamVideoArrow from "/svg/team-video-arrow.svg";
import playButton from "/play-button.png";
import "..//styles/TeamVideo.scss";

function VideoItems({ text, caption01, caption02 }) {
    return (
        <div className="team-video__items">
            <p className="team-video__text">{text}</p>

            <div className="manufacture__items">
                <img src={teamVideoArrow} alt="#" />
                <p>{caption01}<br />{caption02}</p>
            </div>
        </div> 
    );
}

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }, [isPlaying]);
  
    return <video ref={ref} src={src} loop playsInline className="video" preload="none" />
}

export default function TeamVideo() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="team-video">
            <div className="conteiner">

                <VideoItems text={"Inquiry Before Creation: Crafting Conscious Clothing"}
                  caption01={"Take a look at where"} caption02={"we manufacture"}
                />

                <div className="video-wrapper">
                    <VideoPlayer isPlaying={isPlaying} src="/video/team-video.mp4" />
                    <button onClick={() => setIsPlaying(!isPlaying)} className="play-button">
                      <img src={playButton} alt="#" /> {isPlaying ? "Pause" : "Play"}
                    </button> 
                </div>
            </div>
        </div>
    );
}
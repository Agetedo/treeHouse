import "..//styles/TitleLeft.scss";

export default function TitleLeft({ caption, titleFirst, titleSecond }) {
    return(
        <>
          <p className="caption__left">{caption}</p>
          <h3 className="title__left">{titleFirst}<br />{titleSecond}</h3>
        </>
    );
}
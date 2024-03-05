import "..//styles/ArticlePoints.scss";

export default function ArticlePoints({ list }) {
    return (
        <div className="article-points">
            <div className="conteiner">
                {list}
            </div> 
        </div>
    );
}
import "..//styles/HintTooltip.scss";

export default function HintTooltip({ text01, text02, text03, children }) {
    return (
        <div id="hintTooltip">
            {children}
            <p className="tooltiptext">
              <span>{text01}</span>
              <span>{text02}</span>
              <span>{text03}</span>
            </p>
        </div>
    );
}
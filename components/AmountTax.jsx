import "..//styles/AmountTax.scss";

export default function AmountTax({ numberUsd, taxIcluded }) {
    return (
        <div className="amount__tax">
          <p id="tax">{numberUsd}</p>
          <span>{taxIcluded}</span>
        </div>
    );
}
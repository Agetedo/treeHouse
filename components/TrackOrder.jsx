import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "..//styles/TrackOrder.scss";

function TrackOrderTitle({ title }) {
    return(<><h2 className="track-order__title">{title}</h2></>);
}

function OrderForm({ orderLabel, emailLabel, orderButton }) {
    const [order, setOrder] = useState({
        orderNumber: "",
        email: "",
    })
    function handleOrder(e) {
        e.preventDefault();
   
        const form = e.target;
        const formData = new FormData(form);
   
        fetch('/some-api', { method: form.method, body: formData });
   
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
    return(
        <ErrorBoundary fallback={<p style={{ color: "red", textAlign: "center", fontSize: 20, paddingTop: 30, }}>
          There was an error while submitting the form</p>}
        >
            <form method="post" onSubmit={handleOrder} id="form4">
                <label htmlFor="enterOrder">{orderLabel}</label>
                <input type="text" id="enterOrder" name="order" 
                  maxLength={8} required={true}
                  placeholder="TH101010" autoComplete="off"
                  value={order.orderNumber} onChange={e => setOrder(e.target.value)}
                />
                <label htmlFor="enterEmail">{emailLabel}</label>
                <input type="email" id="enterEmail" name="email"
                  placeholder="Enter your email" autoComplete="off"
                  value={order.email} onChange={e => setOrder(e.target.value)}
                />
                <button type="submit">{orderButton}</button>
            </form>        
        </ErrorBoundary>
    );
}

function TrackForm({ trackLabel, trackButton}) {
    const [trackNumber, setTrackNumber] = useState("");

    function handleTrack(e) {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);

      fetch('/some-api', { method: form.method, body: formData });

      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
    return(
        <ErrorBoundary fallback={<p style={{ color: "red", textAlign: "center", fontSize: 20, paddingTop: 30, }}>
          There was an error while submitting the form</p>}
        >
            <form method="post" onSubmit={handleTrack} id="form5">
                <label htmlFor="enterTracking">{trackLabel}</label>
                <input type="text" id="enterTracking" name="track" 
                  maxLength={10} required={true} autoComplete="off"
                  placeholder="ABC1234567"
                  value={trackNumber} onChange={e => setTrackNumber(e.target.value)}
                />
                <button type="submit">{trackButton}</button>
            </form>   
        </ErrorBoundary>
    );
}

export default function TrackOrder() {
    return (
        <div className="track-order">
            <div className="conteiner">
                <TrackOrderTitle title={"Track your order"} />
            
                <div className="track-order__items">
                    <OrderForm orderLabel={"Order number"} emailLabel={"Email"} orderButton={"TRACK"} />
                    <span id="trackOrderOr">or</span>
                    <TrackForm trackLabel={"Tracking number"} trackButton={"TRACK"} />
                </div>         
            </div>
        </div>        
    );
}
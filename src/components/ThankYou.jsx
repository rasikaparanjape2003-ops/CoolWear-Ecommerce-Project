import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {

  const navigate = useNavigate();
  

  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
        <div className='App'>
            <img style={{ width: "400px" }} src="https://www.wordstream.com/wp-content/uploads/2022/07/thank-you-for-your-purchase-message-1.png" alt="" />
        </div>

      <p>Your payment was successful.</p>

      {/* 👇 GO TO TRACKING PAGE */}
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/track-order")}
      >
        Track Your Order
      </button>

    </div>
  );
}

export default ThankYou;

import React from "react";

function Receipt() {

  const order = JSON.parse(localStorage.getItem("lastOrder"));

  if (!order) {
    return <h3 style={{ textAlign: "center", marginTop: "100px" }}>
      No Receipt Found
    </h3>;
  }

  return (
    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="text-center">🧾 Payment Receipt</h2>
        <hr />

        <h5>Payment ID: {order.paymentId}</h5>
        <h5>Date: {order.date}</h5>

        <hr />

        <h4>Items:</h4>

        {order.items.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>
              {item.name} - ₹{item.price} x {item.qty || 1}
            </p>
          </div>
        ))}

        <hr />

        <h3>Total Paid: ₹{order.total}</h3>

        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => window.print()}
          >
            Print Receipt
          </button>
        </div>

      </div>

    </div>
  );
}

export default Receipt;
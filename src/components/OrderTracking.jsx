
import React, { useState, useEffect } from "react";

function OrderTracking() {

  const [order, setOrder] = useState(null);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("active"); // active / cancelled
  const [trackingId, setTrackingId] = useState("");

    const steps = [
        "Order Placed",
        "Packed",
        "Shipped",
        "Out for Delivery",
        "Delivered"
    ];
    

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("lastOrder"));
        setOrder(data);

        const savedStatus = localStorage.getItem("orderStatus");
        if (savedStatus) {
            setStatus(savedStatus);
        }

        let i = 0;
        const interval = setInterval(() => {
            if (status === "cancelled") {
                clearInterval(interval);
                return;
            }

            i++;
            if (i < steps.length) {
                setStep(i);
            } else {
                clearInterval(interval);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [status]);
    if (!order) {
        return (
            <h3 style={{ textAlign: "center", marginTop: "100px" }}>
                No Order Found
            </h3>
        );
     }
    const cancelOrder = () => {
        const confirmCancel = window.confirm("Are you sure you want to cancel order?");

        if (confirmCancel) {
            setStatus("cancelled");
            localStorage.setItem("orderStatus", "cancelled");
        }
        const existingId = localStorage.getItem("trackingId");

        if (existingId) {
            setTrackingId(existingId);
        } else {
            const newId = "EK" + Math.floor(100000 + Math.random() * 900000);
            setTrackingId(newId);
            localStorage.setItem("trackingId", newId);
        }
    };
    

    
  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">📦 Order Tracking</h2>
          <h5 className="text-center mb-3">
              Tracking ID: <span style={{ color: "blue" }}>{trackingId}</span>
          </h5>
      {/* ORDER INFO */}
      <div className="card p-3 mb-4 shadow">
        <h5>Payment ID: {order.paymentId}</h5>
        <p>Date: {order.date}</p>
        <h5>Total: ₹{order.total}</h5>
      </div>

      {/* TRACKING STEPS */}
        <div className="card p-4 shadow">

         {steps.map((item, index) => (
          <div key={index} style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px"
          }}>

            {/* Circle */}
            <div style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: index <= step ? "green" : "#ccc",
              marginRight: "10px"
            }}></div>

            {/* Text */}
            <span style={{
              fontWeight: index === step ? "bold" : "normal"
            }}>
              {item}
            </span>

        </div>
         ))}

        </div>
          <div className="text-center mt-4">

              {status === "active" ? (
                  <button
                      className="btn btn-danger mt-3"
                      onClick={cancelOrder}
                  >
                      ❌ Cancel Order
                  </button>
              ) : (
                  <h5 style={{ color: "red", marginTop: "20px" }}>
                      ❌ Order Cancelled
                  </h5>
              )}

          </div>

    </div>
  );
}

export default OrderTracking;
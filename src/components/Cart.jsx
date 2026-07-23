

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Cart() {

  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const getPrice = (price) => Number(price) || 0;

  // Load + Fix qty + Save again
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart")) || [];

    const updated = data.map((item) => ({
      ...item,
      qty: item.qty || 1,
    }));

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated)); // 🔥 fix
  }, []);


  //Increase Qty
  const increaseQty = (id) => {
    let updated = cart.map((item) =>
      item._id === id ? { ...item, qty: item.qty + 1 } : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // const increaseQty = (index) => {
  //   const updatedCart = [...cart];
  //   updatedCart[index].qty = (updatedCart[index].qty || 1) + 1;
  //   setCart(updatedCart);
  // };

  // Decrease Qty
  const decreaseQty = (id) => {
    let updated = cart.map((item) =>
      item._id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // const decreaseQty = (index) => {
  //   const updatedCart = [...cart];
  //   if ((updatedCart[index].qty || 1) > 1) {
  //     updatedCart[index].qty -= 1;
  //     setCart(updatedCart);
  //   }
  // };


  // const removeItem = (index) => {
  //   const updatedCart = cart.filter((_, i) => i !== index);
  //   setCart(updatedCart);
  // };
  const removeItem = (id) => {
    console.log(id);

    let updated = cart.filter((item) => item._id !== id);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    //  window.location.reload();
  };



  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * (item.qty || 1);
  }, 0);


  function handlePayment(e) {

  var options = {
    key: "rzp_test_4yosHYDduPYmKN",
    amount: totalPrice * 100,
    currency: "INR",
    name: "CoolWear",
    description: "Test Transaction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJGizvjIW604T9KRRPSLNyJRDkU8h9epPhQ&s",

    handler: function (response) {

      const order = {
        items: cart,
        total: totalPrice,
        paymentId: response.razorpay_payment_id,
        date: new Date().toLocaleString()
      };

      localStorage.setItem("lastOrder", JSON.stringify(order));

      alert("Payment Successful 🎉");

      localStorage.removeItem("cart");

      navigate("/receipt");
      setTimeout(() => {
        navigate("/thankyou");
      }, 3000);
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/track-order")}
      >
        Track Order
      </button>
    },

    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9876543210"
    },

    theme: {
      color: "#3399cc"
    }
    
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();   // ✅ MUST BE OUTSIDE options

  
}


  return (
    <div style={{ marginTop: "80px", fontFamily: "Times New Roman" }}>

      <h2 style={{ textAlign: "center" }}>Cart </h2>

      {
        cart.length === 0
          ?
          (
            <h3 style={{ textAlign: "center" }}>Cart is Empty</h3>
          )
          :
          (
            <div className="container">
              <div className="row">

                {cart.map((item, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="card" style={{ margin: "10px", padding: "10px" }}>

                      <img
                        src={item.imageURL}
                        style={{ height: "250px", objectFit: "cover" }}
                        alt=""
                      />

                      <div className="card-body">
                        <h5>{item.name}</h5>
                        <p>Price: ₹{item.price}</p>


                        <div style={{ marginBottom: "10px" }}>
                          <button className="btn btn-danger btn-sm"
                            onClick={() => decreaseQty(item._id)}> - </button>

                          <span style={{ margin: "0 10px" }}>
                            {item.qty || 1}
                          </span>

                          <button className="btn btn-success btn-sm"
                            onClick={() => increaseQty(item._id)}> + </button>
                        </div>


                        <h6>Total: ₹{item.price * (item.qty || 1)}</h6>


                        <button className="btn btn-dark btn-sm mt-2"
                          onClick={() => removeItem(item._id)}>
                          Remove
                        </button>

                      </div>

                    </div>
                  </div>
                ))}

              </div>


              <div style={{ textAlign: "right", marginTop: "20px" }}>
                <h5 >
                  Grand Total: ₹{totalPrice}
                </h5>
                <button onClick={handlePayment} className="btn btn-success">Proceed to Payment</button>
              </div>

            </div>
          )}

    </div>
  );
}

export default Cart;
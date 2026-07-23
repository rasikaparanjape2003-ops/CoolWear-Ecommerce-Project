import React, { useEffect, useState } from "react";

import axios from "axios";

function Order() {

  const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/order")
//       .then((res) => {
//         setOrders(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   const handleCancel = async (orderId) => {
//   await fetch(`http://localhost:8080/order/cancel/${orderId}`, {
//     method: "PUT"
//   });

//   // Refresh orders after cancel
//   const res = await fetch(`http://localhost:8080/order/${user._id}`);
//   const data = await res.json();
//   setOrders(data);
// };

//   return (
//     <div className="container" style={{ fontFamily:"Time New Roman" }}>
//       <h2 style={{ textAlign: "center" }}>My Orders</h2>

//       <div className="row">
//         {orders.map((item) => (
//           <div className="col-md-4" key={item.id}>
//             <div className="card p-3 mb-3 shadow">

//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{ width: "100%", height: "200px", objectFit: "cover" }}
//               />

//               <h5>{item.name}</h5>

//               <p><b>Price:</b> ₹ {item.price}</p>

//               <p>
//                 <b>Status:</b>{" "}
//                 <span style={{
//                   color:
//                     item.status === "Delivered"
//                       ? "green"
//                       : item.status === "Pending"
//                       ? "orange"
//                       : "blue"
//                 }}>
//                   {item.status}
//                 </span>
//               </p>

              
//               <button className="btn btn-success w-100">
//                 Order Now
//               </button>
//               <button
//                 className="btn btn-danger btn-sm mt-2"
//                 onClick={() => handleCancel(item._id)}
//               >
//                 Cancel Order
//               </button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

 const API = "http://localhost:8080/order";

  const fetchOrders = async () => {
    const res = await axios.get(API);
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`${API}/status/${id}`, { status });
    fetchOrders();
  };

  const deleteOrder = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchOrders();
  };

  return (
    <div className="container">
      <h2>Admin Order Panel</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>₹{order.price}</td>

              <td>{order.status}</td>

              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => updateStatus(order._id, "Delivered")}
                >
                  Deliver
                </button>

                <button
                  className="btn btn-warning btn-sm mx-2"
                  onClick={() => updateStatus(order._id, "Pending")}
                >
                  Pending
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteOrder(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Order;


// import axios from "axios";
// import React, { useEffect, useState } from "react";


// function Order() {

//   const [data, setData] = useState([]);

//   const API_URL = "http://localhost:8080/order";  // change if your route is different

//   // Fetch Users
//   useEffect(() => {
//     axios.get(API_URL)
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data.data);   // same as your product response
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   // Delete User
//   const handleDelete = (id) => {
//     axios.delete(`${API_URL}/${id}`)
//       .then(() => {
//         // refresh list
//         setData(data.filter(user => user._id !== id));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-3"> Registered Users Orders</h3>

//       {/* ✅ Total Count Added */}
//     <h5 className="mb-3">
//        Registered Users Orders: 
//       <span className="badge bg-primary ms-2">
//         {data.length}
//       </span>
//     </h5>

//       <table className="table table-striped table-bordered">
//         <thead className="table-danger">
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Image</th>
//             <th>Payment</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         {/* <h5>Total Registered Users: {data.length}</h5> */}
//         <tbody>
//         {data.length > 0 ? (
//                   data.map((order, index) => (
//                     <tr key={order._id} className="text-center">
//                       <td>{index + 1}</td>
//                       <td className="fw-semibold">{order.name}</td>
//                       <td>{order.image}</td>
//                       <td>{order.payment}</td>

//                       <td>
//                         <button
//                           onClick={() => handleDelete(user._id)}
//                           className="btn btn-danger btn-sm"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="text-center py-4 text-muted">
//                       No Orders Found
//                     </td>
//                   </tr>
//                 )}
//             </tbody>

//       </table>
//     </div>
//   );
// }

// export default Order;


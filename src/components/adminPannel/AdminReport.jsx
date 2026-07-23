
import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminReports() {

  const [sales, setSales] = useState({});
  const [orders, setOrders] = useState({});
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/report/sales")
      .then(res => setSales(res.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8080/report/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8080/report/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div className="container mt-4">

      <h2 className="mb-4 text-center">📊 Admin Reports</h2>

      <div className="row">

        {/* SALES */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-3">
            <h5>Total Revenue</h5>
            <h3>₹ {sales.totalRevenue || 0}</h3>
            <p>Total Orders: {sales.totalOrders || 0}</p>
          </div>
        </div>

        {/* ORDER STATUS */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-3">
            <h5>Order Status</h5>
            <p>Processing: {orders.processing || 0}</p>
            <p>Shipped: {orders.shipped || 0}</p>
            <p>Delivered: {orders.delivered || 0}</p>
            <p>Cancelled: {orders.cancelled || 0}</p>
          </div>
        </div>

        {/* PRODUCT REPORT */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-3">
            <h5>Products</h5>
            <p>Total: {products.totalProducts || 0}</p>
            <p>Men: {products.men || 0}</p>
            <p>Women: {products.women || 0}</p>
            <p>Kids: {products.kids || 0}</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AdminReports;
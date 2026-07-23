

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);

  const API_URL = "http://localhost:8080/product";

  useEffect(() => {
    axios.get("http://localhost:8080/product")
      .then((res) => {
        // console.log(res.data.data);

        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Fetch Products
  const fetchProducts = () => {
    axios.get("http://localhost:8080/product")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete Product
  const handleDelete = (id) => {
    // alert(id);
    axios.delete("http://localhost:8080/product/" + id)
      .then((res) => {
        console.log(res.data.data);

        fetchProducts(); // Refresh list after delete
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // update Product
  // const handleUpdate = (id) => {
  //   // alert(id);
  //   axios.put("http://localhost:8080/product/" + id)
  //     .then((res) => {
  //       console.log(res.data.data);

  //       fetchProducts(); // Refresh list after delete
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">All Products</h3>

      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>

              <td>
                <img
                  src={product.imageURL}
                  alt=""
                  style={{ width: "90px", height: "90px", objectFit: "cover" }}
                />
              </td>

              <td>{product.name}</td>
              <td>₹ {product.price}</td>

              <td>
                {/* <Link
                  to={`/adminPannel/addproducts/${product.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link> */}
                <Link
                  to={`/adminPannel/AddProducts/${product._id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>
                {/* <button
                  onClick={()=>handleUpdate(product._id)}
                  className="btn btn-primary btn-sm"
                >
                Edit
                </button> */}

                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-danger btn-sm"
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

export default Products;
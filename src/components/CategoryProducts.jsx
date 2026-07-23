import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/product")
  //     .then((res) => {
  //       // filter products by category
  //       const filtered = res.data.data.filter(
  //         (item) => item.category === categoryName
  //       );
  //       setProducts(filtered);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [categoryName]);
   useEffect(() => {
  axios.get("http://localhost:8080/product")
    .then((res) => {
      console.log(res.data.data);
      setProducts(res.data.data); // ❗ NO FILTER
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  return (
    <div className="container mt-4">

      {/* CATEGORY TITLE
      <h2 className="text-center text-capitalize mb-4">
        {categoryName} Collection
      </h2> */}
      <h2 className="text-center text-capitalize mb-4">
        {categoryName === "all"
          ? "All Products"
          : `${categoryName}'s Collection`}
      </h2>

      {/* PRODUCTS */}
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-3 mb-4" key={product._id}>
              <div className="card shadow border-0">

                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.imageURL || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={product.name || "product"}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </Link>

                <div className="card-body text-center">
                  <h6 className="fw-bold">{product.name||"No Name"}</h6>
                  <p className="text-success">₹ {product.price}</p>

                  <button className="btn btn-dark btn-sm w-100">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center text-muted">
            No Products Found
          </h5>
        )}
      </div>

    </div>
  );
}

export default CategoryProducts;
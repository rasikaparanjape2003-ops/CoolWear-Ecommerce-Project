import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
const [selectedColor, setSelectedColor] = useState("");


  useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const discountPercentage =
    product.price && product.offerprice
      ? Math.round(
        ((product.price - product.offerprice) / product.price) * 100
      )
      : 0;

  return (
   <div className="container py-5">
    <div className="row">

      {/* LEFT SIDE - Thumbnail + Main Image */}
      <div className="col-md-6 d-flex">

        {/* Thumbnails */}
        <div className="d-flex flex-column me-3">
          {product.colorImages?.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="thumb"
              onClick={() => setSelectedColor(item.color)}
              style={{
                width: "70px",
                height: "90px",
                objectFit: "cover",
                cursor: "pointer",
                border:
                  selectedColor === item.color
                    ? "2px solid green"
                    : "1px solid #ddd",
                marginBottom: "10px",
                padding: "3px",
                background: "#fff"
              }}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="text-center flex-grow-1">
          <img
              src={
                selectedColor
                  ? product.colors?.find(
                    (item) => item.name === selectedColor
                  )?.image
                  : product.imageURL
              }
              alt={product.name}
              className="img-fluid"
              style={{
                maxHeight: "450px",
                objectFit: "contain",
                background: "#e6eac7",
                padding: "20px"
              }}
          />
        </div>

      </div>

      {/* RIGHT SIDE DETAILS */}
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="text-muted">{product.description}</p>

        {/* Price Section */}
        <h4 className="text-danger">
          ₹ {product.offerPrice}
          <span
            className="text-muted ms-3"
            style={{ textDecoration: "line-through" }}
          >
            ₹ {product.price}
          </span>
          <span className="badge bg-success ms-3">
            {discountPercentage}% OFF
          </span>
        </h4>

        {/* Colors */}
          <div className="mt-3">
            <h6>Available Colors:</h6>

            <div className="d-flex gap-3 mt-2">
              {product.colors?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(item.name)}
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: item.name,
                    cursor: "pointer",
                    border:
                      selectedColor === item.name
                        ? "3px solid green"
                        : "1px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold"
                  }}
                >
                  {selectedColor === item.name ? "✓" : ""}
                </div>
              ))}
            </div>
          </div>

        {/* Sizes */}
        <div className="mt-4">
          <h6>Available Sizes:</h6>

          {product.sizes?.map((size, index) => (
            <button
              key={index}
              className={`btn me-2 mt-2 ${
                selectedSize === size
                  ? "btn-dark"
                  : "btn-outline-dark"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Offer */}
        <div className="mt-4">
          <span className="badge bg-success p-2">
            Limited Time Offer 🔥
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductDetails;
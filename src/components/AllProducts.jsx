import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllProducts() {

    const [data, setData] = useState([]);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        axios.get("http://localhost:8080/product")
            .then((res) => {
                console.log(res.data.data);

                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //   const addToCart (item) => {

    //     const exist = cart.find((x) => x.id === item.id);

    //     if (exist) {
    //       const updatedCart = cart.map((x) =>
    //         x.id === item.id ? { ...x, qty: x.qty + 1 } : x
    //       );
    //       setCart(updatedCart);
    //     } else {
    //       setCart([...cart, { ...item, qty: 1 }]);
    //     }

    //     alert(item.name + " added to cart ✅");
    //   };

    function addToCart(item) {
        // console.log(item);

        let cartProducts = JSON.parse(localStorage.getItem("cart"));
        // console.log(cartProducts);

        let product = { ...item, quantity: "1" };
        // console.log(product);

        if (cartProducts) {
            cartProducts.push(product);
            localStorage.setItem("cart", JSON.stringify(cartProducts));
            window.location.reload();
        } else {
            let cartProducts = [];
            cartProducts.push(product);
            localStorage.setItem("cart", JSON.stringify(cartProducts));
            window.location.reload();
        }

        // console.log(cartProducts);
    }


    return (
        <>
            <div className="container py-4 text-center">
                <button
                    className={`btn m-2 ${category === "all" ? "btn-dark" : "btn-outline-dark"}`}
                    onClick={() => setCategory("all")}
                >
                    All
                </button>

                <button
                    className={`btn m-2 ${category === "mens" ? "btn-dark" : "btn-outline-dark"}`}
                    onClick={() => setCategory("mens")}
                >
                    Men
                </button>
               

                <button
                    className={`btn m-2 ${category === "womens" ? "btn-dark" : "btn-outline-dark"}`}
                    onClick={() => setCategory("womens")}
                >
                    Women
                </button>

                <button
                    className={`btn m-2 ${category === "kids" ? "btn-dark" : "btn-outline-dark"}`}
                    onClick={() => setCategory("kids")}
                >
                    Kids
                </button>
           </div>
            <div className="container py-5">
                <div className="row">

                {data
                        .filter((item) =>
                            category === "all"
                                ? true
                                : item.category?.toLowerCase() === category.toLowerCase()
                        )
                    .map((item) => (
                        <div className="col-md-4 col-sm-6 mb-4" key={item._id}>
                            <div className="card h-100 shadow-sm">

                                {/* Product Image */}
                                <img
                                    src={item.imageURL}
                                    className="img-fluid mx-auto d-block"
                                    alt={item.name}
                                    style={{ height: "250px", maxWidth: "80%", objectFit: "cover" }}
                                />

                                <div className="card-body d-flex flex-column">

                                    <h5 className="card-title">{item.name}</h5>

                                    <p className="card-text text-muted">
                                        {item.description}
                                    </p>

                                    <h6 className="text-primary fw-bold mb-3">
                                        ₹ {item.price}
                                    </h6>

                                    <div className="mt-auto">
                                        <button
                                            className="btn btn-outline-dark w-100 mb-2"
                                            onClick={() => addToCart(item)}
                                        >
                                            Add To Cart
                                        </button>

                                        <Link
                                            to={`/productdetails/${item._id}`}
                                            className="btn btn-outline-dark w-100"
                                        >
                                            View Details
                                         </Link>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     ))}
             </div>
         </div >
        </>
    );
}

export default AllProducts;

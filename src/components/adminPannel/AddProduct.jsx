
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddProducts() {

    const { id } = useParams();

    const [data, setData] = useState({
        name: "",
        price: "",
        offerPrice: "",
        description: "",
        imageURL: "",
        category: "",
        size: ""
    });

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
        // console.log(data);
    };


    const navigate = useNavigate();

    const API_URL = "http://localhost:8080/product";

    useEffect(() => {
        if (id) {
            axios.get(`${API_URL}/${id}`)
                .then((res) => {
                    setData({
                        name: res.data.data.name,
                        price: res.data.data.price,
                        offerPrice: res.data.data.offerPrice,
                        description: res.data.data.description,
                        imageURL: res.data.data.imageURL,
                        category: res.data.data.category,
                        size: res.data.data.size
                    })

                });
        }
    }, [id]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newProduct = {
    //         products,
    //         price,
    //         image
    //     };

    //     axios.post(API_URL, newProduct)
    //         .then(() => {
    //             alert("Product Added Successfully ✅");
    //             navigate("/adminPannel/Products");
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(data);


        if (id) {
            axios.put(`${API_URL}/${id}`, data)
                .then(() => {
                    alert("Product Updated Successfully ✅");
                    navigate("/adminPannel/Products");
                });

        } else {

            axios.post(API_URL, data)
                .then((res) => {
                    alert("Product Added Successfully ✅");
                    navigate("/adminPannel/Products");
                });
        }
    };

    return (
        <div className="container mt-4">
            <h3>Add New Product</h3>

            <form >

                <div className="mb-3">
                    <label>Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.name}
                        onChange={handleChange}
                        required
                        id="name"
                    />
                </div>

                <div className="mb-3">
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={data.price}
                        onChange={handleChange}
                        required
                        id="price"
                    />
                </div>
                <div className="mb-3">
                    <label>OfferPrice</label>
                    <input
                        type="number"
                        className="form-control"
                        value={data.offerPrice}
                        onChange={handleChange}
                        required
                        id="offerPrice"
                    />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.description}
                        onChange={handleChange}
                        required
                        id="description"
                    />
                </div>
                <div className="mb-3">
                    <label>Category</label>

                    <select onChange={handleChange} id="category" className="form-control" value={data.category} required>
                        <option value="">Select Option</option>
                        <option value="mens">Mens</option>
                        <option value="womens">Womens</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label>Size</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.size}
                        onChange={handleChange}
                        required
                        id="size"
                    />
                </div>

                <div className="mb-3">
                    <label>Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.imageURL}
                        onChange={handleChange}
                        required
                        id="imageURL"
                    />
                </div>

                <button onClick={handleSubmit} type="submit" className="btn btn-success">
                    Add Product
                </button>

            </form>
        </div>
    );
}

export default AddProducts;

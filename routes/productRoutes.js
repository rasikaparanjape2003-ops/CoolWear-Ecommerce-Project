
const express = require('express');
const Product = require('../models/ProductSchema');

const router = express.Router();

router.get("/", async (req, res) => {
    let allProduct = await Product.find();
    res.json({ status: "success", data: allProduct })
});

router.get("/:id", async (req, res) => {
    const productId= req.params.id;

    const singleProduct = await Product.findById(productId);

    res.json({ status: "success", data: singleProduct })


});

router.post("/", async (req, res) => {

    const data = req.body;

    let createProduct = await Product.create(data)

    res.json({ status: "success", data: createProduct })

});

router.put("/:id", async (req, res) => {

    const productId = req.params.id;
    const productData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true })

    res.json({ status: "success", data: updatedProduct });

});

router.delete("/:id", async (req, res) => {

    const productId = req.params.id;
    // console.log(productId);
    

    const deletedProduct = await Product.findByIdAndDelete(productId, { new: true });

    res.json({ staus: "success", data: deletedProduct })


});


module.exports = router;

const express = require('express');

const User = require('../models/UserSchema');

const router = express.Router();

router.get("/", async (req, res) => {
    let allUser = await User.find();
    res.json({ status: "success", data: allUser })
});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        let user = await User.findOne({ email, password })
        // console.log(user);

        if (user) {
            res.json({ status: "success", data: user })
        } else {
            res.json({ status: "error", message: "Invalid Credential" });
        }
    } catch (error) {
        console.log(error);
        res.json({ status: "error", message: "Server Error" });
    }

});

router.get("/:id", async (req, res) => {
    const userId = req.params.id;

    const singleUser = await User.findById(userId);

    res.json({ status: "success", data: singleUser })
});

router.post("/", async (req, res) => {
    const data = req.body;
    let createUser = await User.create(data)

    res.json({ status: "success", data: createUser });
});

router.put("/:id", async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true })
    res.json({ status: "success", data: updatedUser });
});

router.delete("/:id", async (req, res) => {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId, { new: true })

    res.json({ status: "success", data: deletedUser });
});

module.exports = router;

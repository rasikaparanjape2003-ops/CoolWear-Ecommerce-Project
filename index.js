const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/ecommerce")
    .then((res) => {
        console.log("DataBase Connect ....");
    });


const app = express();
app.use(cors());

app.use(express.json());

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded());

app.get("/", (req, res) => {
    res.send("Welcome to NodeJS")
});


app.use("/order", require('./routes/orderRoutes'));
app.use("/product", require('./routes/productRoutes'));
app.use("/user", require('./routes/userRoutes'));
// app.use("/report",require('./routes/reportRoutes'));


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
});

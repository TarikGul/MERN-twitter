const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets") 
const bodyParser = require('body-parser');

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("connected to the MongoDB successfully"))
    .catch(err => console.log(err));

    app.use("/api/users", users);
    app.use("/api/tweets", tweets);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get("/", (req, res) => res.send("Welcome to the Express Setup"));

app.listen(port, () => console.log(`Server is running on part ${port}`));

const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets") 

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("connected to the MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Welcome to the Express Setup");
});

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on part ${port}`));
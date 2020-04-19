const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
let today = new Date();
let  currentDay = today.getDay();

if (currentDay === 6 || currentDay === 0) {
    res.send("It's the weekend! Awesome!");
} else {
    res.send("It's a weekday...ohhh!");
}
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.")
});
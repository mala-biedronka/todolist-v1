const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    let today = new Date();

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    let currentDate = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: currentDate, newItem: usersInput});
});

app.post ("/", function (req, res) {
    let usersInput = req.body.newListItem;
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.")
});
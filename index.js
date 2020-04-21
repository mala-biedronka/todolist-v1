const express = require("express");
const bodyParser = require("body-parser");
let usersInput = [];
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    let today = new Date();

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    let currentDate = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: currentDate, newItems: usersInput});
});

app.post ("/", function (req, res) {
    item = req.body.newListItem;
    usersInput.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.")
});


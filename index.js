const express = require("express");
const bodyParser = require("body-parser");
const app = express();


let usersInputs = [];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Targeting a "home" route
app.get("/", function (req, res) {
    let today = new Date();

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    let currentDate = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle: currentDate, newItems: usersInputs});
});

app.post("/", function (req, res) {
    newItem = req.body.newListItem;

    if (req.body.submitButton === "Work List") {
        workItems.push(newItem);
        res.redirect("/work");
    } else {
        usersInputs.push(newItem);
        res.redirect("/");
    }
});

//Targeting a "work" route
app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work List", newItems: workItems});
});


//Targeting a "about" route
app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.")
});


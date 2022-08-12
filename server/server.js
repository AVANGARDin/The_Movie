const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3050;


const checkEmail = new Set();
const users = {};

const favorite = {
  Roman: []
};

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post("/signup", (req, res) => {
  if (checkEmail.has(req.body.email)) {
    res.send({status:"not", data: 'Email address is already taken'})
  } else {
    users[req.body.email] = {
      name: req.body.userName,
      favorite: []
    };
    res.send({ status: "yes", data: req.body.userName });
  }
});

app.post("/login", (req, res) => {
  console.log(req.body);
});


app.listen(port, () => {
  console.log("Server start");
});
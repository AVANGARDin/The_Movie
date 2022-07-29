const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3050;


const checkUsers = new Set();

const favorite = {
  Roman: []
};

const app = express();
app.use(cors());
app.use(bodyParser.json());





// app.get("/list", (req, res) => {
//   res.send(list);
// });

// app.get("/list/:id", (req, res) => {
//   list = list.filter((el) => el.id != req.params.id);
// });

app.post("/", (req, res) => {
  // if (checkUsers.has(req.body.user)) {
  //   res.status(400).send();
  // } else {
  //   checkUsers.add(req.body.user);
  //   favorite[req.body.user].push(req.body.videoId);
  //   res.status(200).send();
  //   console.log(favorite);
  // }
  favorite[req.body.user]
    ? favorite[req.body.user].push(req.body.videoId)
    : favorite[req.body.user] = [];
  favorite[req.body.user].push(req.body.videoId);
      // res.status(200).send();
      console.log(favorite);
});

// app.get("/editbank/:id", (req, res) => {
//   res.send(list.find((el) => el.id == +req.params.id));
// });

// app.post("/editbank/:id", (req, res) => {
//   let index = list.findIndex((el) => el.id == req.params.id);
//   list.splice(index, 1, { id: +req.params.id, ...req.body });
// });

app.listen(port, () => {
  console.log("Server start");
});
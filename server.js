require("dotenv").config();
const express = require("express");
const server = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;

const bodyParser = require("body-parser");
server.use(bodyParser.json());

server.use(cors());

server.use(morgan("dev"));

//is the api working?
server.get("/", (req, res) => {
  res.send("Master your surroundings");
});
//get all Contact Messages

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

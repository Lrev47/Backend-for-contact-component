const express = require("express");

const ContactMessageRouter = require("./contactMessage");
const router = express.Router();

router.get("/health", (req, res) => {
  res.send("Yo");
});

router.use("/messages", ContactMessageRouter);

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello World");
});

router.get("/mohamed", (req, res, next) => {
  res.send("Hello mohamed");
});


module.exports = router;

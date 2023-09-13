import connectDb from "../config/connectDb";
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});
router.get("/detail", (req, res) => {
  res.render("detail", { title: "Home" });
});
export default router;

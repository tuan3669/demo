import { getDetailPage, getHomePage } from "../controllers/home";
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", getHomePage);
router.get("/detail/:id", getDetailPage);
export default router;

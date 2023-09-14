const express = require("express");
const app = express();

require("dotenv").config();
import router from "./src/routes/web";
const ejsLayouts = require("express-ejs-layouts");
app.use(ejsLayouts);
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);
const port = 5001 || process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

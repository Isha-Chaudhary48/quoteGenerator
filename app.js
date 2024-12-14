const express = require("express");
const router = require("./router/quote");

const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server started at port no ${PORT}`);
});

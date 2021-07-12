const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("dist"));

app.listen(3000);
console.log("app is running at http://localhost:3000");

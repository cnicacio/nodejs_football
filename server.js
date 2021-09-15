require("dotenv").config();
const express = require("express");
var cors = require("cors");
const connectToDb = require("./src/database/database");
const router = require("./src/routes/routes");

connectToDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(router);

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}/teams`)
);
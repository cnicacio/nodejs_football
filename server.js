require("dotenv").config();
const express = require("express");
require("express-async-errors");
var cors = require("cors");
const connectToDb = require("./src/database/database");
const router = require("./src/routes/routes");


connectToDb();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(router);

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
);
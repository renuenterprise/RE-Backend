require("@dotenvx/dotenvx").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
const route = require("./router/route");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(route);
connectDB();

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT} ...`);
});
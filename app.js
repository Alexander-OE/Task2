const express = require("express");
const connection = require("./db");
require("dotenv").config();
const personRouter = require("./route");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

app.use(express.json());

app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.use("/api", personRouter);

const Port = process.env.Port || 4000;

const startUp = async () => {
  try {
    await connection(process.env.MONGO_URL);
    app.listen(Port, () => console.log("Server running on port " + Port));
  } catch (error) {
    console.log(error);
  }
};

startUp();

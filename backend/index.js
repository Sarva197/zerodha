const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const uri = process.env.ATLAS_URL;

const { HoldingsModel } = require("./models/HoldingModel.js");
const { PositionsModel } = require("./models/PositionsModel.js");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/holdings", async (req, res) => {
    let holdings = await HoldingsModel.find({});
    res.json(holdings);
});

app.get("/positions", async (req, res) => {
    let positions = await PositionsModel.find({});
    res.json(positions);
});

app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
});

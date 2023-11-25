// server.js
const path = require("path");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");
const compression = require("compression");
const axios = require("axios");

const routes = require("./routes");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Authorization"],
};

app.use(cors(corsOptions));

app.use(logger("dev"));

app.use(express.json({ limit: "1500mb" }));
app.use(express.urlencoded({ extended: false, limit: "1500mb" }));
app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/")));

app.use(bodyParser.json({ limit: "1500mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "1500mb",
    extended: true,
    parameterLimit: 50000,
  })
);


app.use("/", routes);

const server = http.createServer(app);
server.listen(2081, () => {
  console.log("Server listening on http://localhost:2081");
});

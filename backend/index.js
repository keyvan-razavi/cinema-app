const express = require("express");
const bodyParser = require("body-parser");

const moviesRoutes = require("./routes/movies-routes");
const HttpError = require("./models/http-error");
require("dotenv").config();
require("./db");

const app = express();
app.use(bodyParser.json());

app.use("/api/movies", moviesRoutes);

app.use((req, res, next) => {
  throw new HttpError("Could not find this route", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*, http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.listen(8000, () => {
  console.log("Server is running");
});

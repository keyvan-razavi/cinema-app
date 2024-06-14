const express = require("express");
const bodyParser = require("body-parser");

const moviesRoutes = require("./routes/movies-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use("/api/movies", moviesRoutes);

app.use((req, res, next) => {
  throw new HttpError("Could not find this route", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) return next(error);

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

const cors = require("cors");
// const PORT = 8000;
const cookieParser = require("cookie-parser");

// require("dotenv").config();
// require("./db");

app.use(bodyParser.json());
// const allowedOrigins = ["http://localhost:3000", "http://localhost:3000/user/"]; // Add more origins as needed

// // Configure CORS with credentials
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // Allow credentials
//   })
// );
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.json({ message: "The API is working" });
// });

app.listen(8000, () => {
  console.log("Server is running");
});

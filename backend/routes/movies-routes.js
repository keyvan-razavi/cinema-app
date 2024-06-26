const express = require("express");
const { check } = require("express-validator");

const moviesControllers = require("../controllers/movies-controller");

const router = express.Router();

// here is our route management and their related vertifications
router.get("/", moviesControllers.getAllMovies);

router.get("/:mid", moviesControllers.getMovieByID);

router.post(
  "/add",
  [
    check("title").not().isEmpty(),
    check("imageUrl").not().isEmpty(),
    check("dateAndTime").not().isEmpty(),
    check("room").not().isEmpty(),
  ],
  moviesControllers.addMovie
);

router.patch(
  "/:mid",
  [
    check("title").not().isEmpty(),
    check("imageUrl").not().isEmpty(),
    check("dateAndTime").not().isEmpty(),
    check("room").not().isEmpty(),
  ],
  moviesControllers.updateMovieByID
);

router.delete("/:mid", moviesControllers.deleteMovieByID);

module.exports = router;

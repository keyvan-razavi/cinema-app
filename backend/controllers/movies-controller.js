const HttpError = require("../models/http-error");
const uuid = require("uuidv4");
const { validationResult } = require("express-validator");

const MOVIES = require("../movies");

const getAllMovies = (req, res, next) => {
  const movies = MOVIES;

  if (!movies) {
    throw new HttpError("Could not find movies for provided.", 404);
  }

  req.res.json({ movies });
};

const getMovieByID = (req, res, next) => {
  const movieId = req.params.mid;
  const movie = MOVIES.find((m) => {
    return m.id === movieId;
  });

  if (!movie) {
    throw new HttpError("Could not find a movie for provided Id.", 404);
  }

  res.json({ movie });
};

const addMovie = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs, Please check your data.", 422);
  }
  const { title, imageUrl, dateAndTime, room } = req.body;
  const createdMovie = {
    id: uuid(),
    title,
    imageUrl,
    dateAndTime,
    room,
  };

  MOVIES.push(createdMovie);

  res.status(201).json({ movie: createdMovie });
};

const updateMovieByID = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs, Please check your data.", 422);
  }

  const { title, imageUrl, dateAndTime, room } = req.body;
  const movieId = req.params.mid;

  const updatedMovie = { ...MOVIES.find((m) => m.id === movieId) };
  const movieIndex = MOVIES.findIndex((m) => m.id === movieId);
  updatedMovie.title = title;
  updatedMovie.imageUrl = imageUrl;
  updatedMovie.dateAndTime = dateAndTime;
  updatedMovie.room = room;

  MOVIES[movieIndex] = updatedMovie;

  res.status(200).json({ movie: updatedMovie });
};

const deleteMovieByID = (req, res, next) => {
  const movieId = req.params.mid;

  if (MOVIES.find((m) => m.id === movieId))
    throw new HttpError("Could not find a movie for that ID.", 404);

  MOVIES = MOVIES.filter((m) => m.id !== movieId);

  res.status(200).json({ message: "Movie Deleted." });
};

exports.getMovieByID = getMovieByID;
exports.getAllMovies = getAllMovies;
exports.addMovie = addMovie;
exports.updateMovieByID = updateMovieByID;
exports.deleteMovieByID = deleteMovieByID;

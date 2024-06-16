const HttpError = require("../models/http-error");
const uuid = require("uuidv4");
const { validationResult } = require("express-validator");

let MOVIES = [
  {
    id: "01",
    title: "One flew over the cuckoo's nest",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    date: "Sep 01 2024 ",
    time: "12:00",
    room: "blue",
  },
  {
    id: "02",
    title: "Shining",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    date: "Sep 01 2024",
    time: "14:00",
    room: "red",
  },
  {
    id: "03",
    title: "Sacrifice",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
    date: "Sep 01 2024",
    time: "16:30",
    room: "green",
  },
  {
    id: "04",
    title: "Wild strawberries",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
    date: "Sep 01 2024",
    time: "19:00",
    room: "purple",
  },
];

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
  const { title, imageUrl, date, time, room } = req.body;
  const createdMovie = {
    id: uuid(),
    title,
    imageUrl,
    date,
    time,
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

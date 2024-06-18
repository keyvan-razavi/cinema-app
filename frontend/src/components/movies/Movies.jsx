import React, { useState } from "react";

import "./Movies.css";

const Movies = ({ movie }) => {
  console.log("movie:", movie.id);
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt="" />
      <div className="movie-info">
        <div>
          <h1 style={{ marginBottom: 0 }}>Title: </h1>
          <p>{movie.title}</p>
        </div>
        <div>
          <h1 style={{ marginBottom: 0 }}>Date And Time: </h1>
          <p>
            {movie.date} - {movie.time}
          </p>
        </div>
        <div>
          <h1 style={{ marginBottom: 0 }}>Room: </h1>
          <p>{movie.room}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;

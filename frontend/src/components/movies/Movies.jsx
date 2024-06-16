import React, { useState } from "react";

import "./Movies.css";
import Seats from "../seats/Seats";

const Movies = ({ movie }) => {
  const [booking, setBooking] = useState(false);

  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt="" />
      <div className="movie-info">
        {!booking ? (
          <>
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
          </>
        ) : (
          <Seats />
        )}
        <button onClick={() => setBooking(true)}>
          {!booking ? "BOOK" : "SELECT"}
        </button>
      </div>
    </div>
  );
};

export default Movies;

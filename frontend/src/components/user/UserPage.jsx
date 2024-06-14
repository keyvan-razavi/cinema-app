import React, { useEffect, useState } from "react";
import "./UserPage.css";
import Movies from "../movies/Movies";

const UserPage = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/movies", {
          method: "GET",
          mode: "no-cors",
        });
        const responseData = await response.json();
        setMovie(responseData.movies[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    sendRequest();
  }, []);

  return (
    <div className="user-container">
      <div className="subMenu">
        <h3>Movies on Screen </h3>
        <div className="movies-container">
          <Movies movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;

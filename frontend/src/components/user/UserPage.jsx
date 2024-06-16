import React, { useEffect, useState } from "react";
import "./UserPage.css";
import Movies from "../movies/Movies";

const UserPage = () => {
  // const [movie, setMovie] = useState();

  let movies = [
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

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/api/movies", {
  //         method: "GET",
  //         mode: "no-cors",
  //       });
  //       const responseData = await response.json();
  //       setMovie(responseData.movies[0]);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   sendRequest();
  // }, []);

  return (
    <div className="user-container">
      <h3>Movies on Screen </h3>
      <div className="movies-container">
        {movies ? (
          movies.map((m) => {
            return (
              <div key={m.id}>
                <Movies movie={m} />
              </div>
            );
          })
        ) : (
          <>there is no movie</>
        )}
      </div>
    </div>
  );
};

export default UserPage;

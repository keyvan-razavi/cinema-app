import React from "react";
import "./UserPage.css";

const UserPage = () => {
  const movies = [
    {
      id: "01",
      title: "One flew over the cuckoo's nest",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      dateAndTime: "12am - Sep 01 2024 ",
      room: "blue",
    },
    {
      id: "02",
      title: "Shining",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",

      dateAndTime: "2pm - Sep 01 2024 ",
      room: "red",
    },
    {
      id: "03",
      title: "Sacrifice",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
      dateAndTime: "4:30pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "04",
      title: "Wild strawberries",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
      dateAndTime: "7:00pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "01",
      title: "One flew over the cuckoo's nest",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      dateAndTime: "12am - Sep 01 2024 ",
      room: "blue",
    },
    {
      id: "02",
      title: "Shining",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",

      dateAndTime: "2pm - Sep 01 2024 ",
      room: "red",
    },
    {
      id: "03",
      title: "Sacrifice",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
      dateAndTime: "4:30pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "04",
      title: "Wild strawberries",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
      dateAndTime: "7:00pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "01",
      title: "One flew over the cuckoo's nest",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      dateAndTime: "12am - Sep 01 2024 ",
      room: "blue",
    },
    {
      id: "02",
      title: "Shining",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",

      dateAndTime: "2pm - Sep 01 2024 ",
      room: "red",
    },
    {
      id: "03",
      title: "Sacrifice",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
      dateAndTime: "4:30pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "04",
      title: "Wild strawberries",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
      dateAndTime: "7:00pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "01",
      title: "One flew over the cuckoo's nest",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      dateAndTime: "12am - Sep 01 2024 ",
      room: "blue",
    },
    {
      id: "02",
      title: "Shining",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",

      dateAndTime: "2pm - Sep 01 2024 ",
      room: "red",
    },
    {
      id: "03",
      title: "Sacrifice",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
      dateAndTime: "4:30pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "04",
      title: "Wild strawberries",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
      dateAndTime: "7:00pm - Sep 01 2024 ",
      room: "green",
    },
  ];
  return (
    <div className="user-container">
      <div className="subMenu">
        <h3>Movies on Screen</h3>
        <div className="movies-container">
          {movies.map((m) => {
            return (
              <div key={m.id} className="movie-card">
                <img src={m.imageUrl} alt="" />
                <div className="movie-info">
                  <div>
                    <h1 style={{ marginBottom: 0 }}>Title: </h1>
                    <p>{m.title}</p>
                  </div>
                  <div>
                    <h1 style={{ marginBottom: 0 }}>Date And Time: </h1>
                    <p>{m.dateAndTime}</p>
                  </div>
                  <div>
                    <h1 style={{ marginBottom: 0 }}>Room: </h1>
                    <p>{m.room}</p>
                  </div>
                  <button>Book</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserPage;

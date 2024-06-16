import React, { useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [room, setroom] = useState("");

  let movies = [
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
      id: "05",
      title: "One flew over the cuckoo's nest",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      dateAndTime: "12am - Sep 01 2024 ",
      room: "blue",
    },
    {
      id: "06",
      title: "Shining",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      dateAndTime: "2pm - Sep 01 2024 ",
      room: "red",
    },
    {
      id: "07",
      title: "Sacrifice",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
      dateAndTime: "4:30pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "08",
      title: "Wild strawberries",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
      dateAndTime: "7:00pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "09",
      title: "One flew over the cuckoo's nest",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      dateAndTime: "12am - Sep 01 2024 ",
      room: "blue",
    },
    {
      id: "10",
      title: "Shining",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      dateAndTime: "2pm - Sep 01 2024 ",
      room: "red",
    },
    {
      id: "11",
      title: "Sacrifice",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
      dateAndTime: "4:30pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "12",
      title: "Wild strawberries",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
      dateAndTime: "7:00pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "13",
      title: "One flew over the cuckoo's nest",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      dateAndTime: "12am - Sep 01 2024 ",
      room: "blue",
    },
    {
      id: "14",
      title: "Shining",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      dateAndTime: "2pm - Sep 01 2024 ",
      room: "red",
    },
    {
      id: "15",
      title: "Sacrifice",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNTczNDE2YTItNjkwMC00YTNhLTkwMjAtOTIxYmIyZmI1MWUyXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
      dateAndTime: "4:30pm - Sep 01 2024 ",
      room: "green",
    },
    {
      id: "16",
      title: "Wild strawberries",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMTU1MTc3ODMwMl5BMl5BanBnXkFtZTYwMzA2MzI5._V1_.jpg",
      dateAndTime: "7:00pm - Sep 01 2024 ",
      room: "green",
    },
  ];

  const addMovie = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/movies/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          imageUrl,
          date,
          time,
          room,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin-container">
      <div className="subMenu">
        <div className="add-form">
          <h3 className="title">Add Movie:</h3>

          <form onSubmit={(e) => addMovie(e)} className="form">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <div className="fields">
                <input
                  placeholder="Title"
                  type="text"
                  onChange={(e) => setTitle(e)}
                />
              </div>
              <div className="fields">
                <input
                  placeholder="Movie poster"
                  type="text"
                  onChange={(e) => setImageUrl(e)}
                />
              </div>
              <div className="fields">
                <input
                  placeholder="Date"
                  type="date"
                  id="date"
                  onChange={(e) => setDate(e)}
                />
              </div>
              <div className="fields">
                <input
                  placeholder="Time"
                  type="time"
                  onChange={(e) => setTime(e)}
                />
              </div>
              <div className="fields">
                <input
                  placeholder="Room"
                  type="text"
                  onChange={(e) => setroom(e)}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
            <div className="preview-container">
              {!imageUrl ? <></> : <img src={imageUrl} alt="preview" />}
            </div>
          </form>
        </div>
        <h3 className="title"> Movies on Screen </h3>
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
                  <button>Edit</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

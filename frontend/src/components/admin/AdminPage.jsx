import React, { useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [room, setroom] = useState("");

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
          dateAndTime,
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
            <div className="fields">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" onChange={(e) => setTitle(e)} />
            </div>
            <div className="fields">
              <label htmlFor="poster">Movie poster:</label>
              <input type="text" id="poster" onChange={(e) => setImageUrl(e)} />
            </div>
            <div className="fields">
              <label htmlFor="date">Date and time:</label>
              <input
                type="date"
                id="date"
                onChange={(e) => setDateAndTime(e)}
              />
            </div>
            <div className="fields">
              <label htmlFor="room">Room:</label>
              <input type="text" id="room" onChange={(e) => setroom(e)} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <h3 > Movies on Screen </h3>
        <div className="movies-container">
          {/* {movies.map((m) => {
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
          })} */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

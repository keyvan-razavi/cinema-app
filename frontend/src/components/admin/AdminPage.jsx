import React, { useState } from "react";
import "./AdminPage.css";
import Movies from "../movies/Movies";
import { MOVIES } from "../../data";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [room, setroom] = useState("");

  console.log(MOVIES);

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
          {MOVIES ? (
            MOVIES.map((m) => {
              return (
                <div key={m.id} className="movie-card">
                  <Movies movie={m} />
                  <div className="btn-container">
                    <button>EDIT</button>
                    <button>DELETE</button>
                  </div>
                </div>
              );
            })
          ) : (
            <>there is no movie</>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

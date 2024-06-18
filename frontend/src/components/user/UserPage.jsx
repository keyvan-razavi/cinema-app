import React, { useEffect, useState } from "react";
import "./UserPage.css";
import Movies from "../movies/Movies";
import Seats from "../seats/Seats";
import { MOVIES } from "../../data";

const UserPage = () => {
  // const [movie, setMovie] = useState();
  const [booking, setBooking] = useState(false);
  console.log(booking);

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

  // const onCancel = () => setBooking(false);
  // const onToggle = () => setBooking(true);

  return (
    <div className="user-container">
      <h3>Movies on Screen </h3>
      <div className="movies-container">
        {MOVIES ? (
          MOVIES.map((m) => {
            return (
              <div key={m.id} className="movie-card">
                {booking ? (
                  <>
                    <Movies movie={m} />
                    <div className="btn-container">
                      <button>Book</button>
                    </div>
                  </>
                ) : (
                  <>
                    <Seats movie={m} />
                    <div className="btn-container">
                      <button>Submit</button>
                      <button>Cancel</button>
                    </div>
                  </>
                )}
              </div>
            );
          })
        ) : (
          <div>there is no movie</div>
        )}
      </div>
    </div>
  );
};

export default UserPage;

import React, { useEffect, useState } from "react";
import "./UserPage.css";
import Movies from "../movies/Movies";
import Seats from "../seats/Seats";
import { MOVIES } from "../../data";

const UserPage = () => {
  const [booking, setBooking] = useState(false);
  console.log(booking);
  
  // ***this part is for getting data from backend***
  // const [movie, setMovie] = useState();
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

  // ***here is where we toggle the movie card content upon clicks***

  // const onCancel = () => setBooking(false);
  const onToggle = () => {
    if (booking === false) {
      setBooking(true);
    } else {
      setBooking(false);
    }
  };

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
                    <Seats movie={m} />
                    <div className="btn-container">
                      <button>Submit</button>
                      <button>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <Movies movie={m} />
                    <div className="btn-container">
                      <button>Book</button>
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

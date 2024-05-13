import React from "react";
import ReactDOM from "react-dom/client";
// import { useState } from "react";
import "./index.css";

import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
//       <p>You rated this movie {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <StarRating
      maxRating={10}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);

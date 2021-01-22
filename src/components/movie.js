import React from "react";
import { MovieContext } from "../App";

const Movie = (props) => {
  const url = props.movieUrl;
  const { REACT_APP_BOND_MOVIES_API_KEY } = process.env;
  const [movie, setMovie] = React.useState(null);
  const [showToggle, setShowToggle] = React.useState(true);
  const [showToggle2, setShowToggle2] = React.useState(true);
  const mvContext = React.useContext(MovieContext);

  const getMovie = async () => {
    if (url !== null) {
      const response = await fetch(
        `https://omdbapi.com/?t=${url}&apikey=${REACT_APP_BOND_MOVIES_API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    }
  };

  React.useEffect(() => {
    getMovie();
  }, [url]);

  React.useEffect(() => {
    handleShow();
  }, []);

  React.useEffect(() => {
    handleShow2();
  }, []);

  const handleClick = (event, data) => {
    mvContext.setFavObj(data);
  };

  const handleShow = (event) => {
    if (showToggle === false) {
      setShowToggle(true);
    } else {
      setShowToggle(false);
    }
  };

  const handleShow2 = (event) => {
    if (showToggle2 === false) {
      setShowToggle2(true);
    } else {
      setShowToggle2(false);
    }
  };

  const show = () => <span>{movie.Plot}</span>;
  const show2 = () => <span>{movie.Actors}</span>;

  const loaded = () => {
    return (
      <div className="card">
        <img className="poster" src={movie.Poster} alt={movie.Title} />
        <h3>
          {movie.Title} ({movie.Year})
        </h3>
        <p>
          <b className="title" onClick={handleShow2}>
            Stars ▼
          </b>
          <br />
          {showToggle2 ? show2() : null}
        </p>
        <p>
          <b className="title" onClick={handleShow}>
            Plot ▼
          </b>
          <br /> {showToggle ? show() : null}
        </p>
        <div id="data">
          <p className="data-box">
            <img
              className="icon"
              src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611254964/1031px-Rottentomatoesalternativelogo.svg_nsxxf4.png"
            />
            <br />
            {movie.Ratings[1].Value}
          </p>
          <p className="data-box">
            <img
              className="icon"
              src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611256088/money-bag_wsvjur.png"
            />
            <br />
            <b></b> {movie.BoxOffice}
          </p>
        </div>
        <input
          type="image"
          src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611257227/Picture1_tuefwf.png"
          onClick={(e) => handleClick(e, movie)}
        ></input>
      </div>
    );
  };

  const loading = () => {
    return (
      <h2 id="loading">
        Pick out a movie in the dropdown to learn more about it
      </h2>
    );
  };
  return movie ? loaded() : loading();
};

export default Movie;

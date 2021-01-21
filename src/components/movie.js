import React from "react";
import { MovieContext } from "../App";

const Movie = (props) => {
  const url = props.movieUrl;
  const { REACT_APP_BOND_MOVIES_API_KEY } = process.env;
  const [movie, setMovie] = React.useState(null);
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

  const handleClick = (event, data) => {
    event.preventDefault();
    mvContext.setFavObj(data);
  };

  const loaded = () => {
    return (
      <div className="card">
        <img className="poster" src={movie.Poster} alt={movie.Title} />
        <h3>
          {movie.Title} ({movie.Year})
        </h3>
        <input
          type="image"
          src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611257227/Picture1_tuefwf.png"
          onClick={(e) => handleClick(e, movie)}
        ></input>
        <p>
          <b>Stars</b>
          <br />
          {movie.Actors}
        </p>
        <p>
          <b>Plot</b>
          <br /> {movie.Plot}
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
      </div>
    );
  };

  const loading = () => {
    return <h2>Pick a movie in the dropdown</h2>;
  };
  return movie ? loaded() : loading();
};

export default Movie;

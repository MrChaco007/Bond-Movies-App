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
        <button onClick={(e) => handleClick(e, movie)}>Add to Favorites</button>
        <p>
          <b>Stars:</b> {movie.Actors}
        </p>
        <p>
          <b>Rotten Tomatoes Critic Rating:</b> {movie.Ratings[1].Value}
        </p>
        <p>
          <b>Box Office:</b> {movie.BoxOffice}
        </p>
      </div>
    );
  };

  const loading = () => {
    return <h2>Pick a movie in the dropdown</h2>;
  };
  return movie ? loaded() : loading();
};

export default Movie;

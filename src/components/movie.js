import React from "react";
export const MovieContext = React.createContext(null);

const Movie = (props) => {
  const url = props.movieUrl;
  const [movie, setMovie] = React.useState(null);
  const [favObj, setFavObj] = React.useState(null);

  const getMovie = async () => {
    if (url !== null) {
      const response = await fetch(
        `http://omdbapi.com/?t=${url}&apikey=c0b978f4`
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
    setFavObj(data);
    console.log("favObj", favObj);
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

  return (
    <MovieContext.Provider value={favObj}>
      {movie ? loaded() : loading()}
    </MovieContext.Provider>
  );
};

export default Movie;

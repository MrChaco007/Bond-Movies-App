import React from "react";
import { MovieContext } from "../components/movie";

const Favorites = (props) => {
  const [favoritesArr, setFavoritesArr] = React.useState([]);
  const mvContext = React.useContext(MovieContext);
  const addMovie = () => {
    if (mvContext !== null) {
      setFavoritesArr((oldArray) => [...oldArray, mvContext.favObj]);
      console.log("mvContext", mvContext.favObj);
      console.log("favoritesArr", favoritesArr);
    }
  };

  React.useEffect(() => {
    addMovie();
  }, [mvContext]);

  const loaded = () => {
    return (
      <div>
        {favoritesArr.map((movie, index) => {
          return (
            <div className="card" key={index}>
              <img className="poster" src={movie.Poster} alt={movie.Title} />
              <h3>
                {movie.Title} ({movie.Year})
              </h3>
              {/* <button onClick={(e) => handleClick(e, movie)}>
           Remove from Favorites
         </button> */}
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
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>loading...</h1>;
  };

  return <div className="favorites">{favoritesArr ? loaded() : loading()}</div>;
};

export default Favorites;

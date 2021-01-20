import React from "react";
import { MovieContext } from "../App";

const Favorites = (props) => {
  const mvContext = React.useContext(MovieContext);
  const addMovie = () => {
    if (mvContext.favObj !== null) {
      props.setFave(mvContext.favObj);
    }
  };

  React.useEffect(() => {
    addMovie();
  }, [mvContext.favObj]);

  const handleClick = (event, data) => {
    event.preventDefault();
    props.remFav(data);
  };

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  const handleSortHigh = (event) => {
    event.preventDefault();
    props.sortHigh(props.favArr);
  };

  const loaded = () => {
    return (
      <div>
        <button onClick={myFunction} className="dropbtn">
          Sort by
        </button>
        <div id="myDropdown" className="dropdown-content sort">
          <li onClick={handleSortHigh}>Rotten Tomatoes Rating: High to Low</li>
          <li>Rotten Tomatoes Rating: Low to High</li>
          <li>Release Date: Newest to Oldest</li>
          <li>Release Date: Oldest to Newest</li>
        </div>
        {props.favArr.map((movie, index) => {
          return (
            <div className="card" key={index}>
              <img className="poster" src={movie.Poster} alt={movie.Title} />
              <h3>
                {movie.Title} ({movie.Year})
              </h3>
              <button onClick={(e) => handleClick(e, movie)}>
                Remove from Favorites
              </button>
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
    return <h1>Add a movie to favorites</h1>;
  };

  return <div className="favorites">{props.favArr ? loaded() : loading()}</div>;
};

export default Favorites;

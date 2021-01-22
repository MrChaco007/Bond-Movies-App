import React from "react";
import { MovieContext } from "../App";

const Favorites = (props) => {
  const mvContext = React.useContext(MovieContext);
  const [showToggle, setShowToggle] = React.useState(true);
  const [showToggle2, setShowToggle2] = React.useState(true);
  const addMovie = () => {
    if (mvContext.favObj !== null) {
      props.setFave(mvContext.favObj);
    }
  };

  React.useEffect(() => {
    addMovie();
  }, [mvContext.favObj]);

  React.useEffect(() => {
    handleShow();
  }, []);

  React.useEffect(() => {
    handleShow2();
  }, []);

  const handleClick = (event, data) => {
    props.remFav(data);
  };

  function myFunction() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show2")) {
          openDropdown.classList.remove("show2");
        }
      }
    }
  };

  const handleSortHigh = (event) => {
    event.preventDefault();
    props.sortHigh(props.favArr);
  };

  const handleSortLow = (event) => {
    event.preventDefault();
    props.sortLow(props.favArr);
  };

  const handleSortNew = (event) => {
    event.preventDefault();
    props.sortNew(props.favArr);
  };

  const handleSortOld = (event) => {
    event.preventDefault();
    props.sortOld(props.favArr);
  };

  const handleSortTop = (event) => {
    event.preventDefault();
    props.sortTop(props.favArr);
  };

  const handleSortBottom = (event) => {
    event.preventDefault();
    props.sortBottom(props.favArr);
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

  const loaded = () => {
    return (
      <div>
        <button onClick={myFunction} className="dropbtn">
          Sort by
        </button>
        <div id="myDropdown2" className="dropdown-content2 sort">
          <li onClick={handleSortHigh}>Rotten Tomatoes Rating: High to Low</li>
          <li onClick={handleSortLow}>Rotten Tomatoes Rating: Low to High</li>
          <li onClick={handleSortNew}>Release Date: Newest to Oldest</li>
          <li onClick={handleSortOld}>Release Date: Oldest to Newest</li>
          <li onClick={handleSortTop}>Box Office: Highest to Lowest</li>
          <li onClick={handleSortBottom}>Box Office: Lowest to Highest</li>
        </div>
        <div className="cards">
          {props.favArr.map((movie, index) => {
            return (
              <div className="card2" key={index}>
                <img className="poster" src={movie.Poster} alt={movie.Title} />
                <h3>
                  {movie.Title} ({movie.Year})
                </h3>

                <p className="info-box">
                  <b onClick={handleShow}>Stars▼</b>
                  <br />
                  {showToggle ? movie.Actors : null}
                </p>
                <p className="info-box">
                  <b onClick={handleShow2}>Plot▼</b>
                  <br /> {showToggle2 ? movie.Plot : null}
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
                  src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1611281318/Picture2_zncxdl.png"
                  onClick={(e) => handleClick(e, movie)}
                ></input>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Add a movie to favorites</h1>;
  };

  return <div className="favorites">{props.favArr ? loaded() : loading()}</div>;
};

export default Favorites;

import React from "react";
import Movie from "../components/movie";
const AllMovies = (props) => {
  const [bondMovie, setBondMovie] = React.useState(null);

  const movies = [
    {
      titleUrl: "Dr+No",
      name: "Dr. No",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMWRkZTI4NzktYjA4Yi00ZjE0LTgzOWQtYzJlMTkyOTU1ODRmXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "From+Russia+With+Love",
      name: "From Russia with Love",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BZjBiNGNlNmItZTk2Zi00YjRlLTk1NzEtNDI2YTNmN2EwNDhlXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "Goldfinger",
      name: "Goldfinger",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMTQ2MzE0OTU3NV5BMl5BanBnXkFtZTcwNjQxNTgzNA@@._V1_SX300.jpg",
    },
    {
      titleUrl: "Thunderball",
      name: "Thunderball",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BM2I0YWRjZDQtMjQwMC00N2EzLTg0MTctYWE0MzIzOTZiMjE5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "You+Only+Live+Twice",
      name: "You Only Live Twice",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc5MThlMDMtNGZhNy00ZGI5LTliYjItNmIwMzZlOTliOTNhXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "On+Her+Majesty%27s+Secret+Service",
      name: "On Her Majesty's Secret Service",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BZGFlNGNiMmQtMThhZS00MWMxLWFiNGItZTM4ZmJlODM3ZmU2XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "Diamonds+Are+Forever",
      name: "Diamonds Are Forever",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMDBlODdhNTYtMGYwNi00NjI1LWFiNTYtMzAwYWM5MTRlMzgzXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "Live+And+Let+Die",
      name: "Live and Let Die",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BYzFhNTBiYTMtZmI3MC00YmIxLWJjYzQtYzNmMjg1NjlhYzJkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "The+Man+With+The+Golden+gun",
      name: "The Man with the Golden Gun",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BYjY3YmM1MTItMWE0NC00NjFmLWFkMDgtMWFiZjY5NzQyZGVjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      titleUrl: "The+Spy+Who+Loved+Me",
      name: "The Spy Who Loved Me",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BZDJhOTgyMTUtMDVhOS00MzRlLTk0MjYtYjI5NzhhMTExMTc1XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "Moonraker",
      name: "Moonraker",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BM2M5MTA3YzUtZDRiNi00NTk4LTk2ODEtY2ZiOTZmMzcwNjQwXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "for+your+eyes+only",
      name: "For Your Eyes Only",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMzQ4YzUzNGQtMDNkYS00NTk5LTkyMDgtNmVkMjg5MjIzNTdmXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
    },
    {
      titleUrl: "Octopussy",
      name: "Octopussy",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMjI2MDE0NjE1NV5BMl5BanBnXkFtZTcwNjYyMzY0NA@@._V1_SX300.jpg",
    },
    {
      titleUrl: "a+view+to+a+kill",
      name: "A View to a Kill",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMDFlNDZkMGUtYTk4ZS00MTJlLTgzNjktMTQyN2I0MDE3ZTIzXkEyXkFqcGdeQXVyMTQ4NTI5MjE@._V1_SX300.jpg",
    },
    {
      titleUrl: "the+living+daylights",
      name: "The Living Daylights",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BZjI4MjBmYzItYTY5OC00OWYzLWE0NWYtZDQxNDQxM2QzYjA4XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      titleUrl: "licence+to+kill",
      name: "Licence to Kill",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BODY3M2I0NGItYzJhNy00M2NiLThhMDgtNjZkNjA1NTQzMDM4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      titleUrl: "goldeneye",
      name: "GoldenEye",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@._V1_SX300.jpg",
    },
    {
      titleUrl: "tomorrow+never+dies",
      name: "Tomorrow Never Dies",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMTM1MTk2ODQxNV5BMl5BanBnXkFtZTcwOTY5MDg0NA@@._V1_SX300.jpg",
    },
    {
      titleUrl: "the+world+is+not+enough",
      name: "The World Is Not Enough",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMjA0MzUyNjg0MV5BMl5BanBnXkFtZTcwNDY5MDg0NA@@._V1_SX300.jpg",
    },
    {
      titleUrl: "die+another+day",
      name: "Die Another Day",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BODNkYmIwYTMtYzdhNy00YWE3LThkYmEtNzA5ZTE5YmVjYzZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      titleUrl: "Casino+Royale",
      name: "Casino Royale",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      titleUrl: "quantum+of+solace",
      name: "Quantum of Solace",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMjZiYTUzMzktZWI5Yy00Mzk4LWFlMDgtYjRmNWU0Mzc0MzNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      titleUrl: "skyfall",
      name: "Skyfall",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg",
    },
    {
      titleUrl: "spectre",
      name: "Spectre",
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
  ];

  const handleClick = (event, data) => {
    event.preventDefault();
    setBondMovie(data);
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

  return (
    <div className="allmovies">
      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">
          Pick a movie
        </button>
        <div id="myDropdown" className="dropdown-content">
          {movies.map((movie, index) => {
            const { titleUrl, name, photoUrl } = movie;
            return (
              <li
                key={index}
                className="movie"
                onClick={(e) => handleClick(e, titleUrl)}
              >
                <img className="poster-list" src={photoUrl} alt={name} />
                <br />
                <b>{name}</b>
              </li>
            );
          })}
        </div>
      </div>
      <Movie movieUrl={bondMovie} />
    </div>
  );
};

export default AllMovies;

import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMovies from "./pages/allmovies";
import Nav from "./components/nav";
import Favorites from "./pages/favorites";
import React from "react";
export const MovieContext = React.createContext(null);

function App() {
  const [favObj, setFavObj] = React.useState(null);
  const [favoritesArr, setFavoritesArr] = React.useState([]);
  const changeFav = (newFav) => {
    if (favoritesArr === null) {
      setFavoritesArr([newFav]);
    } else if (
      !favoritesArr.some((fav) => {
        return fav.Title === newFav.Title;
      })
    ) {
      let newArray = [...favoritesArr];
      newArray.push(newFav);
      setFavoritesArr(newArray);
    }
  };
  const removeFav = (selectFav) => {
    favoritesArr.splice(favoritesArr.indexOf(selectFav), 1);
    setFavoritesArr([...favoritesArr]);
  };

  const sortHigh = (arr) => {
    let newArr = [...arr];
    newArr.sort(
      (a, b) => parseFloat(b.Ratings[1].Value) - parseFloat(a.Ratings[1].Value)
    );
    setFavoritesArr(newArr);
  };

  const sortLow = (arr) => {
    let newArr = [...arr];
    newArr.sort(
      (a, b) => parseFloat(a.Ratings[1].Value) - parseFloat(b.Ratings[1].Value)
    );
    setFavoritesArr(newArr);
  };

  const sortNew = (arr) => {
    let newArr = [...arr];
    newArr.sort((a, b) => parseFloat(b.Year) - parseFloat(a.Year));
    setFavoritesArr(newArr);
  };
  const sortOld = (arr) => {
    let newArr = [...arr];
    newArr.sort((a, b) => parseFloat(a.Year) - parseFloat(b.Year));
    setFavoritesArr(newArr);
  };

  const sortTop = (arr) => {
    let newArr = [...arr];
    newArr.sort(
      (a, b) =>
        parseFloat(b.BoxOffice.replace(/[^0-9.-]+/g, "")) -
        parseFloat(a.BoxOffice.replace(/[^0-9.-]+/g, ""))
    );
    setFavoritesArr(newArr);
  };

  const sortBottom = (arr) => {
    let newArr = [...arr];
    newArr.sort(
      (a, b) =>
        parseFloat(a.BoxOffice.replace(/[^0-9.-]+/g, "")) -
        parseFloat(b.BoxOffice.replace(/[^0-9.-]+/g, ""))
    );
    setFavoritesArr(newArr);
  };

  return (
    <MovieContext.Provider value={{ favObj, setFavObj }}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <AllMovies />
          </Route>
          <Route path="/favorites">
            <Favorites
              setFave={changeFav}
              remFav={removeFav}
              favArr={favoritesArr}
              setFavArr={setFavoritesArr}
              sortHigh={sortHigh}
              sortLow={sortLow}
              sortNew={sortNew}
              sortOld={sortOld}
              sortTop={sortTop}
              sortBottom={sortBottom}
            />
          </Route>
        </Switch>
      </div>
    </MovieContext.Provider>
  );
}

export default App;

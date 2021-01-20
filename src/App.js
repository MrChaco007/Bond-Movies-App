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
    console.log("newArr", newArr);
    setFavoritesArr(newArr);
    console.log("favoritesArr", favoritesArr);
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
            />
          </Route>
        </Switch>
      </div>
    </MovieContext.Provider>
  );
}

export default App;

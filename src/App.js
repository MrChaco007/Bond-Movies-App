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
  console.log("favoritesArr", favoritesArr);
  const changeFav = (newFav) => {
    if (favoritesArr === null) {
      setFavoritesArr([newFav]);
    } else if (!favoritesArr.some((fav) => {
return fav.Title === newFav.Title
    })) {
      let newArray = [...favoritesArr]
      newArray.push(newFav)
      setFavoritesArr(newArray);
    }
  };
  const removeFav = (selectFav) => {
    favoritesArr.splice(favoritesArr.indexOf(selectFav), 1)
    setFavoritesArr([...favoritesArr])
  }
  return (
    <MovieContext.Provider value={{ favObj, setFavObj }}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <AllMovies />
          </Route>
          <Route path="/favorites">
            <Favorites setFave={changeFav} remFav = {removeFav} favArr={favoritesArr} />
          </Route>
        </Switch>
      </div>
    </MovieContext.Provider>
  );
}

export default App;

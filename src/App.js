import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMovies from "./pages/allmovies";
import Nav from "./components/nav";
import Favorites from "./pages/favorites";
import React from "react"
export const MovieContext = React.createContext(null);

function App() {
  const [favObj, setFavObj] = React.useState(null);
  const [favoritesArr, setFavoritesArr] = React.useState([]);
  const changeFav = (newFav) => setFavoritesArr(newFav)
  return (
     <MovieContext.Provider value ={{favObj, setFavObj}}>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <AllMovies />
        </Route>
        <Route path="/favorites">
          <Favorites setFave={changeFav} favArr ={favoritesArr}/>
        </Route>
      </Switch>
    </div>
    </MovieContext.Provider>
  );
}

export default App;


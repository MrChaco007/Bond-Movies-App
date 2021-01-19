import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMovies from "./pages/allmovies";
import Nav from "./components/nav";
import Favorites from "./pages/favorites";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <AllMovies />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


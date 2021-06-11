import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css"
import Home from "./components/Home";
import Store from "./components/Store";

function App() {
  return (
    <Router> 
    <div className="App">
      <Navbar/>

    <Switch>

      <Route exact path="/">
      <Home/>
      </Route>


      <Route exact path="/shop">
      <Store/>
      </Route>

    </Switch>
    </div>
    </Router>
  ); 
}

export default App;

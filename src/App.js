import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router> 
    <div className="App">
      <Navbar/>
    </div>
    </Router>
  ); 
}

export default App;

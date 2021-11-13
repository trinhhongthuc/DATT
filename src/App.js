import logo from "./logo.svg";
import "./App.css";
import { UncontrolledAlert } from "reactstrap";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Menu from "./components/Menu/Menu";
import Home from "./router/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

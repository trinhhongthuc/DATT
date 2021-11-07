import logo from "./logo.svg";
import "./App.css";
import { UncontrolledAlert } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <UncontrolledAlert color="danger" fade={false}>
        <span className="alert-inner--icon">
          <i className="ni ni-support-16" />
        </span>
        <span className="alert-inner--text ml-1">
          <strong>Danger!</strong> This is an error alert—check it out!
        </span>
      </UncontrolledAlert>
    </div>
  );
}

export default App;

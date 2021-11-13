import logo from "./logo.svg";
import "./App.css";
import Login from "./authentication/Login";
import Create from "./authentication/Create";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Login />
      <Create />
    </div>
  );
}

export default connect()(App);

import logo from "./logo.svg";
import "./style/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./navigation/Routes";
import History from "./navigation/History";
// import Login from "./authentication/Login";
// import Create from "./authentication/Create";

function App() {
  return (
    <div className="App">
      <Router history={History}>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;

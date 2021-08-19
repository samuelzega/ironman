import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Page/Home";
import Search from "../Page/Search";
import IronMan from "../Page/IronMan";

export default function Routers () {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/ironman" component={IronMan} />
    </Router>
  );
}


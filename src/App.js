import { Landing } from "./components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          {" "}
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

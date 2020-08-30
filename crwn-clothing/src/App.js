import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";

//Pages
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shoppage";

// function useAllRouteHooks() {
//   let match = useRouteMatch();
//   let location = useLocation();
//   let history = useHistory();
//   let params = useParams();
//   return { match, location, history, params };
// }

// function HatsPage(props) {
//   const { match, location, history, params } = useAllRouteHooks();
//   return <h1>HatsPage</h1>;
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Homepage />}></Route>

        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;

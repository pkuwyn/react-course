import React from "react";
// import { useSelector } from "react-redux";
// import { selectShopCollections } from "../redux";
// import { createStructuredSelector } from "reselect";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom";
import CollectionsOverview from "../components/collections-overview";
import CollectionPage from "./collectionpage";
function ShopPage({ match }) {
  // const { collections } = useSelector(
  //   createStructuredSelector({
  //     collections: selectShopCollections,
  //   })
  // );
  console.log(match);
  const { path, url } = match;
  return (
    <div className="shoppage">
      <Switch>
        <Route exact path={path} render={() => <CollectionsOverview />}></Route>

        <Route path={`${path}/:category`} component={CollectionPage}></Route>
      </Switch>
    </div>
  );
}

export default ShopPage;

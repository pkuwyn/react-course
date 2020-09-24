import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";

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

import {
  auth,
  firestore,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

//Pages
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import SignPage from "./pages/signpage";
import CheckOutPage from "./pages/checkoutpage";

//Header
import Header from "./components/header";
import HEADER_CONFIG from "./components/header.config";

import { connect } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "./redux";

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

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Router>
        <Header catalog={HEADER_CONFIG.catalog} />
        <Switch>
          <Route exact path="/" render={() => <Homepage />}></Route>

          <Route path="/shop" component={ShopPage}></Route>

          {/* <Route
            exact
            path="/signin"
            render={() => {
              return currentUser ? (
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              ) : (
                <SignPage />
              );
            }}
          ></Route> */}

          {currentUser ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/signin" component={SignPage}></Route>
          )}

          <Route exact path="/checkout" component={CheckOutPage}></Route>
        </Switch>
      </Router>

      {/* <h1>currentUser:{JSON.stringify(currentUser)}</h1> */}
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

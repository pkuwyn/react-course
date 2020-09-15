import React, { useState, useEffect } from "react";
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

import {
  auth,
  firestore,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

//Pages
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import SignPage from "./pages/signpage";
//Header
import Header from "./components/header";
import HEADER_CONFIG from "./components/header.config";

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
  const [currentUser, setCurrentUser] = useState(null);

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
  });

  // useEffect(() => {
  //   // firestore.collection("users").add({
  //   //   diplayName: "Donald",
  //   // });
  //   firestore
  //     .collection("users")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //       });
  //     });
  // });
  return (
    <>
      <Router>
        <Header catalog={HEADER_CONFIG.catalog} user={currentUser} />
        <Switch>
          <Route exact path="/" render={() => <Homepage />}></Route>

          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/sign" component={SignPage}></Route>
        </Switch>
      </Router>

      <h1>currentUser:{JSON.stringify(currentUser)}</h1>
    </>
  );
}

export default App;

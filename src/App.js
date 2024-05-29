import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { projectFirestore } from "./firebaseConfig/config";

const App = () => {
  const { authIsReady, user } = useAuthContext();
  const [idUrl, setIdUrl] = useState(null);
  const [userExists, setUserExists] = useState(true);

  useEffect(() => {
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const [, , userId] = parsedUrl.pathname.split("/");
    setIdUrl(userId);

    const checkIdExist = async () => {
      try {
        const ref = projectFirestore.collection("publicData").doc(userId);
        const doc = await ref.get();
        if (doc.exists) {
          setUserExists(true);
        } else {
          setUserExists(false);
        }
      } catch (err) {
      }
    };

    checkIdExist();
  }, [window.location.href]);

  return (
    <div>
      {idUrl && (
        <Router>
          <Navbar visibleInPublic={userExists} />
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/user/:id">
              {userExists && <Home visibleInPublic={userExists} />}
              {!userExists && <Redirect to='/login' />}
            </Route>
            <Route exact path="/login">
              {!user ? <Login /> : <Redirect to='/' />}
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      )}

      {authIsReady && !userExists && !idUrl && (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/signup">
              {!user ? <Signup /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>

            <Redirect to="/" />
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default App;

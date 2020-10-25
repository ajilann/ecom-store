import React, {useEffect} from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Orders from "./Orders";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51GrO7LHhaJOiKRoBUfIAT4RoSDZRCQCYkjRWVTK6OL48aPlOnWvwySIXVRtLA28clLY4vVfBO8NMfeFni5QptmSW00MALMw9QV");

function App() {
const [{}, dispatch] = useStateValue();

  useEffect(() => {
   // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>', authUser);

      if(authUser) {
        // the user just logged in / the user was logged in
      
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM conversion
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

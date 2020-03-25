import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Footer from './Components/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

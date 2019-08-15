import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "../src/Component/Navbar/navbar";
import store from "./Global/redux/store";
import Pattern from "./Screen/Pattern";
import Sound from "./Screen/Sound";
import login from "./Screen/UserAuth/Login";
import React, { Component, Fragment } from "react";
import Axios from "axios";
function App() {
  Axios.defaults.headers.common["authorization"] = "w3lc0meto4pp";
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Route exact path={"/"} component={login} />
        <Route exact path={"/pattern"} component={Pattern} />
        <Route exact path={"/Sound"} component={Sound} />
      </div>
    </Provider>
  );
}

export default App;

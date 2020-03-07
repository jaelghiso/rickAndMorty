import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./sass/main.scss";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path={["/", "/home"]} component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;

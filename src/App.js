import React from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    //BEM conversion
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;

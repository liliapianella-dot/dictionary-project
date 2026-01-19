import React from "react";
import "./App.css";
import Dictionary from "./Dictionary.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-uppercase">Dictionary</h1>
        <h2>What word do you want to look up?</h2>
        <Dictionary />
      </div>
    </div>
  );
}

import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="text-uppercase">Dictionary</h1>
      <h2>What word do you want to look up?</h2>
      <form>
        <input
          type="search"
          name="search-word"
          className="inputText"
          autoFocus
        />
        <input type="submit" value="Search" className="inputSearchButton" />
      </form>
    </div>
  );
}

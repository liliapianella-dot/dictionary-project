import React from "react";
import "./App.css";
import DictionaryHeader from "./Dictionary.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <DictionaryHeader />
      </div>
      <footer>
        This project is created by{" "}
        <a
          href="https://www.liliapianella.com/"
          target="_blank"
          rel="noopener norferrer"
        >
          Lilia.
        </a>{" "}
        It is{" "}
        <a
          href="https://github.com/liliapianella-dot/dictionary-project"
          target="_blank"
          rel="noopener norferrer"
        >
          open source on GitHub
        </a>{" "}
        and <a href="/">hosted on Vercel</a>
      </footer>
    </div>
  );
}

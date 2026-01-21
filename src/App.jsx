import React from "react";
import "./App.css";
import DictionaryHeader from "./Dictionary.jsx";

export default function App() {
  const randomWordsArray = [
    "random",
    "search",
    "coding",
    "content",
    "love",
    "dream",
    "play",
    "salt",
    "freedom",
    "hope",
    "light",
    "shadow",
    "journey",
    "truth",
    "silence",
    "wonder",
    "growth",
    "balance",
    "energy",
    "focus",
    "nature",
    "spark",
    "wisdom",
    "future",
    "change",
    "strength",
    "kindness",
    "motion",
    "beauty",
    "courage",
    "clarity",
    "purpose",
    "vision",
    "peace",
    "creativity",
    "connection",
    "gaming",
    "nerd",
    "geek",
  ];
  return (
    <div className="App">
      <div className="container">
        <DictionaryHeader randomWordsArray={randomWordsArray} />
      </div>
      <footer>
        This project is created by{" "}
        <a
          href="https://www.liliapianella.com/"
          target="_blank"
          rel="noopener norferrer"
        >
          Lilia
        </a>
        . It is{" "}
        <a
          href="https://github.com/liliapianella-dot/dictionary-project"
          target="_blank"
          rel="noopener norferrer"
        >
          open source on GitHub
        </a>{" "}
        ,<a href="/">hosted on Vercel</a> and the images are from{" "}
        <a
          href="https://www.pexels.com/api/"
          target="_blank"
          rel="noopener norferrer"
        >
          Pexel API
        </a>
      </footer>
    </div>
  );
}

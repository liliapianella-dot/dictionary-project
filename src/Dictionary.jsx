import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import DictionaryResults from "./Results.jsx";

export default function DictionaryHeader() {
  const [wordkey, setWordkey] = useState("");
  const [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data);
    // console.log(response.data.phonetic);
    // console.log(response.data.word);
    // console.log(response.data.meanings[0].example);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "90303e49ba1c9f82cb5tf7o1afec334c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${wordkey}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function saveWordKey(event) {
    setWordkey(event.target.value);
  }

  return (
    <div>
      <div className="Dictionary">
        <h1 className="text-uppercase">Dictionary</h1>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            name="search-word"
            className="inputText"
            autoFocus={true}
            onChange={saveWordKey}
          />
          <input type="submit" value="Search" className="inputSearchButton" />
        </form>{" "}
      </div>
      <DictionaryResults results={results} />
    </div>
  );
}

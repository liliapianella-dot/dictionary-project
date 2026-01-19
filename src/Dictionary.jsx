import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [wordkey, setWordkey] = useState("");

  function handleResponse(response) {
    console.log(response.data.phonetic);
    console.log(response.data.word);
    console.log(response.data.meanings[0].example);
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
    <div className="Dictionary">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="search-word"
          className="inputText"
          autoFocus={true}
          onChange={saveWordKey}
        />
        <input type="submit" value="Search" className="inputSearchButton" />
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import DictionaryResults from "./Results.jsx";

export default function DictionaryHeader(props) {
  const [wordkey, setWordkey] = useState("");
  const [results, setResults] = useState("");
  const [randomWord, setRandomWord] = useState("random");
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSearch(text) {
    setWordkey(text);
    let apiKey = "90303e49ba1c9f82cb5tf7o1afec334c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${wordkey}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "H2obLCxS5OwGSwSOp1OFqJpdq1kQvV8aK6X07X2Z3plTjzTHo6dXFeDe";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${wordkey}&per_page=6`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(wordkey);
  }

  function saveWordKey(event) {
    setWordkey(event.target.value);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchRandomWord(text) {
    let apiKey = "90303e49ba1c9f82cb5tf7o1afec334c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${text}&key=${apiKey}`;
    setWordkey(text);
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "H2obLCxS5OwGSwSOp1OFqJpdq1kQvV8aK6X07X2Z3plTjzTHo6dXFeDe";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${text}&per_page=6`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function getRandomWord(event) {
    let randomWordsArray = props.randomWordsArray;
    const randomIndex = Math.floor(Math.random() * randomWordsArray.length);
    setRandomWord(randomWordsArray[randomIndex]);
    searchRandomWord(randomWord);
  }

  return (
    <div>
      <div className="Dictionary">
        <h1 className="text-uppercase">Dictionary</h1>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            name="search-word"
            className="inputText"
            autoFocus={true}
            onChange={saveWordKey}
            autoComplete="off"
          />
          <input type="submit" value="Search" className="inputSearchButton" />
          <input
            onClick={getRandomWord}
            type="submit"
            value="Random"
            className="inputSearchButton Random"
          />
        </form>
      </div>
      <DictionaryResults results={results} photos={photos} />
    </div>
  );
}

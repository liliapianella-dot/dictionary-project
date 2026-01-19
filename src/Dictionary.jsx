import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [wordkey, setWordkey] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`${wordkey}`);
  }
  function saveWordKey(event) {
    setWordkey(event.target.value);
    console.log(event.target.value);
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

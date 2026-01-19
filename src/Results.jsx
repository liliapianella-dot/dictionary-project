import React from "react";
import "./Results.css";

export default function Results(props) {
  console.log(props.results.meanings[0].partOfSpeech);
  return (
    <div className="Results">
      {props.results.phonetic} <br />
      {props.results.word}
    </div>
  );
}

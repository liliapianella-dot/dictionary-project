import React from "react";
import "./Results.css";

export default function Results(props) {
  //   console.log(props.results.meanings[1].definition);
  if (props.results) {
    return (
      <div className="Results">
        {props.results.phonetic} <br />
        {props.results.word}
      </div>
    );
  } else {
    return null;
  }
}

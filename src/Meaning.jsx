import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.jsx";
import Contrary from "./Contrary.jsx";
import Examples from "./Examples.jsx";

export default function Meaning(props) {
  let definition = props.meaning.definition;
  definition = definition.split(" ");
  definition[0] = definition[0][0].toUpperCase() + definition[0].slice(1);
  let newDefinition = definition.join(" ");

  if (props.meaning) {
    return (
      <div className="Meaning my-4">
        <span>{newDefinition}</span>{" "}
        <small>
          {" "}
          <span className=" partOfSpeech">
            ({props.meaning.partOfSpeech}){" "}
          </span>{" "}
          <Examples examples={props.meaning.example} />{" "}
          <Synonyms synonyms={props.meaning.synonyms} />
          <Contrary antonyms={props.meaning.antonyms} />
        </small>
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  //   console.log(props.results.meanings[1].definition);
  if (props.results) {
    return (
      <div className="Results">
        <strong className="text-uppercase">{props.results.word} </strong> <br />
        [{props.results.phonetic}] <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

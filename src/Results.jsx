import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  //   console.log(props.results.meanings[1].definition);
  if (props.results) {
    return (
      <div className="Results">
        <strong className="text-uppercase fs-2">{props.results.word} </strong>{" "}
        <br /> <div className="mb-4">[{props.results.phonetic}] </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="" key={index}>
              <span className="">
                <Meaning meaning={meaning} />
              </span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

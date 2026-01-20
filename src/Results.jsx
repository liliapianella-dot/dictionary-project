import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Photos from "./Photos";

export default function Results(props) {
  //   console.log(props.results.meanings[1].definition);
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-uppercase fs-2">{props.results.word}</h2>
        <div className="mb-2 mt-2 text-center">[{props.results.phonetic}] </div>
        <div className="row">
          <div className="col-lg-6  col-sm-12 mt-4">
            <Photos photos={props.photos} />
          </div>
          <div className="col-lg-6 col-sm-12">
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
        </div>
      </div>
    );
  } else {
    return null;
  }
}

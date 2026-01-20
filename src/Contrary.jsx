import React from "react";

export default function Contrary(props) {
  if (props.antonyms) {
    return (
      <div>
        Antonym:{" "}
        {props.antonyms.map(function (antonym, index) {
          return <span key={index}>{antonym} </span>;
        })}
      </div>
    );
  } else return null;
}

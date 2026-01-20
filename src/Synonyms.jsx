import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        Synonym:{" "}
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym} </span>;
        })}
      </div>
    );
  } else return null;
}
// let stringOfSynonymus = synonym.map(function (synonym, index) {
//   return <div key={index}>{synonym}</div>;
// });

//   if (synonym) {
//     return <div> hi </div>;
//   } else return null;
// }

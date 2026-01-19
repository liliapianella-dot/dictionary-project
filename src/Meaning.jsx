import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let example = props.meaning.example;
  let definition = props.meaning.definition;
  definition = definition.split(" ");
  definition[0] = definition[0][0].toUpperCase() + definition[0].slice(1);
  let newDefinition = definition.join(" ");

  if (example) {
    return (
      <div className="Meaning">
        <span>{newDefinition}</span>{" "}
        <small>
          {" "}
          <span className=" partOfSpeech">
            ({props.meaning.partOfSpeech}){" "}
          </span>{" "}
          <br />
          e.g.:
          <em> {props.meaning.example}</em>
          <Synonyms synonyms={props.meaning.synonyms} />
        </small>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <span>{newDefinition}</span>{" "}
        <small>
          {" "}
          <span className=" partOfSpeech">({props.meaning.partOfSpeech}) </span>
          <Synonyms synonyms={[props.meaning.synonyms]} />
        </small>
      </div>
    );
  }
}

// let example = props.meaning.example;
//     if(example) {
//         return (
//             <div className="Meaning">
//       <p>
//         <span>{props.meaning.definition}</span>{" "}
//         <small>
//           ({props.meaning.partOfSpeech}) <br />
//           if({{props.meaning.example}})
//           <em> {props.meaning.example}</em>
//         </small>
//       </p>
//     </div>
//         );
//     } else return (<div className="Meaning">
//       <p>
//         <span>{props.meaning.definition}</span>{" "}
//         <small>
//           ({props.meaning.partOfSpeech}) <br />
//           if({{props.meaning.example}})

//         </small>
//       </p>
//     </div>);
// }

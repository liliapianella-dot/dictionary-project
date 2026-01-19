import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  let example = props.meaning.example;
  if (example) {
    return (
      <div className="Meaning">
        <p>
          <span>{props.meaning.definition}</span>{" "}
          <small>
            {" "}
            <span className=" partOfSpeech">
              ({props.meaning.partOfSpeech}){" "}
            </span>{" "}
            <br />
            e.g.:
            <em> {props.meaning.example}</em>
            {/* <br />
            {props.meaning.synonyms.map(function (synonym, index) {
              return <span key={index}>{synonym[index]}</span>;
            })} */}
          </small>
        </p>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <p>
          <span>{props.meaning.definition}</span>{" "}
          <small>
            {" "}
            <span className=" partOfSpeech">
              ({props.meaning.partOfSpeech}){" "}
            </span>{" "}
          </small>
        </p>
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

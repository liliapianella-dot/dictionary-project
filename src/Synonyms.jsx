import React from "react";

export default function Synonyms(props) {
  if (!props.synonyms) {
    return null;
  } else {
    const sentence = `Synonym: ${props.synonyms.join(", ")}.`;

    return <div>{sentence}</div>;
  }
}

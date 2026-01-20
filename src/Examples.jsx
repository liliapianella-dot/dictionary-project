import React from "react";

export default function Examples(props) {
  let example = props.examples;
  if (example) {
    return (
      <div className="Examples">
        e.g.: <em> {example}</em>{" "}
      </div>
    );
  } else return null;
}

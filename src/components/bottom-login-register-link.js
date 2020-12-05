import React from "react";

function BottomLink(props) {
  return (
    <p>
      {props.text}
      <a href={props.url}>Click here to {props.name}</a>
    </p>
  );
}

export default BottomLink;

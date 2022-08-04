import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
const customStyle = {
  color: "red",
  fontSize: "100px",
  border: "1px solid black",
  fontStyle: "italic"
};

customStyle.color = "coral";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      My Favourite Foods
    </h1>
    <img src={img + "?grayscale"} alt="random images" />
    <p style={customStyle}>inline styling in React</p>
  </div>,
  document.getElementById("root")
);

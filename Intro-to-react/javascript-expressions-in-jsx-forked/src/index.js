import React from "react";
import ReactDOM from "react-dom";

var firstName = "Rock";
const lastName = "Star";
const num = 4;
ReactDOM.render(
<div>
  <h1>Hello {`${firstName} ${lastName}`}!</h1>
  <p>Your lucky number {Math.floor(Math.random()*10)}</p>
  </div>, 
  document.getElementById("root")
  );

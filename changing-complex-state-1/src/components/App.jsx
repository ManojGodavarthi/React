import React, { useState } from "react";

function App() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function updateLastName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }
  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          placeholder="First Name"
          value={fname}
        />
        <input
          name="lName"
          onChange={updateLastName}
          placeholder="Last Name"
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

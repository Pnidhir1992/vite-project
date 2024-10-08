import React, { useState } from "react";
import "./usehook.css";

const UseHook = () => {
  const [myName, SetMyName] = useState("Hello This is My Actuall Value");

  const Newvalue = () => {
    let val = myName;

    if (val == "Hello This is My Actuall Value") {
      SetMyName("this is me Change No");
    } else {
      SetMyName("Hello This is My Actuall Value");
    }
  };

  return (
    <>
      <section className="section1">
        <h1>Use Hook</h1>
        <p className="new">{myName}</p>
        <button className="button-n" onClick={Newvalue}>
          Click Me To Change
        </button>
      </section>
    </>
  );
};

export default UseHook;

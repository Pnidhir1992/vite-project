import React, { useState } from "react";

const Index = () => {
  [count, SetCount] = useState(0);

  return (
    <div>
      <div className="wrappeer">
        <h1>Increment - Decremnt Challanges</h1>
        <h2>{Count}</h2>
        <div className="fom-contol">
          <form>
            <input type="text" />
          </form>
        </div>

        <div className="grid-btn">
          <button onClick={() => count + 1}>increment</button>
          <button>decrement</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Index;

import React, { useState } from "react";
function App() {
  let [count, setcount] = useState(0);

  
  return (
    <div className="App">
      <div className="container">
        <button onClick={setcount(count-1)}>-</button>
        <h1>{count}</h1>
        <button onClick={setcount(count+1)}>+</button>
      </div>
    </div>
  );
}

export default App;

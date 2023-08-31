import React, { useState } from "react";
function App() {
  const [count, setcount] = useState(0);
  function add() {
    setcount(count+1);
  }
  function minus() {
    setcount(count-1);
  }
  
  return (
    <div className="App">
      <div className="container">
        <button onClick={minus}>-</button>
        <h1>{count}</h1>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default App;

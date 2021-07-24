import './App.css';
import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  // reference - https://reactjs.org/docs/hooks-state.html

  return (
    <div className="App">
      <h1>My Counter app</h1>
      <div className="screen">
        Count - {count}
      </div>
      <div className="btn-container">
        <button className="btn btn-plus" onClick={() => setCount(count + 1)}>Increment Count</button>
        <button className="btn btn-minus" onClick={() => setCount(count - 1)}>Decrement Count</button>
        <button className="btn btn-value" onClick={() => setCount(count + 10)}>Increment Count by value</button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>Reset Count</button>
      </div>
    </div>
  );
}

export default App;

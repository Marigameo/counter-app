import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Counter app</h1>
      <div className="screen">
        Count - 1
      </div>
      <div className="btn-container">
        <button className="btn btn-plus">Increment Count</button>
        <button className="btn btn-minus">Decrement Count</button>
        <button className="btn btn-value">Increment Count by value</button>
        <button className="btn btn-reset">Reset Count</button>
      </div>
    </div>
  );
}

export default App;

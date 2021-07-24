import './App.css';
import React, { useState } from 'react'
import Header from './components/Header'
import Screen from './components/Screen'
import Button from './components/Button';

function App() {

  const [count, setCount] = useState(0)
  // reference - https://reactjs.org/docs/hooks-state.html

  return (
    <div className="App">
      <Header/>
      <Screen count={count}/>
      <div className="btn-container">
        <Button type="plus" btnText="Increment Count" btnAction={() => setCount(count + 1)}/>
        <Button type="minus" btnText="Decrement Count" btnAction={() => setCount(count - 1)}/>
        <Button type="value" btnText="Increment Count by value" btnAction={() => setCount(count + 10)}/>
        <Button type="reset" btnText="Reset Count" btnAction={() => setCount(0)}/>
      </div>
    </div>
  );
}

export default App;

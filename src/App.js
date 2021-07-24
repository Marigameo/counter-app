import './App.css';
// import React, { useSelector, useDispatch } from 'react'
import Header from './components/Header'
import Screen from './components/Screen'
import Button from './components/Button';
// import { decrement, increment, incrementByValue } from './redux/counterSlice';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, resetCount } from "./redux/counterSlice";

export default function App() {

  // const [count, setCount] = useState(0)
  // reference - https://reactjs.org/docs/hooks-state.html

const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header/>
      <Screen count={count}/>
      <div className="btn-container">
        <Button type="plus" btnText="Increment Count" btnAction={() => dispatch(increment())}/>
        <Button type="minus" btnText="Decrement Count" btnAction={() => dispatch(decrement())}/>
        <Button type="value" btnText="Increment Count by value" btnAction={() => dispatch(incrementByValue(10))}/>
        <Button type="reset" btnText="Reset Count" btnAction={() => dispatch(resetCount())}/>
      </div>
    </div>
  );
}


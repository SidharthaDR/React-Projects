import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const add = () => {
  //   setCount(count+1);
  // } //for passing as a function


  return(
  <>
  <h1>Count: {count} </h1>
  <button onClick={() => {setCount(count+1)}}>add</button>
  {/* <button onClick={add}>add</button> */ } 
  <button onClick={() => {setCount(count-1)}}>sub</button>
  </>
  );
}

export default App;
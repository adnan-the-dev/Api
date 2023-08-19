import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Api from './Api';

function App() {

  const name = "Word";
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  const [num, setNum] = useState(1)
  const myFunc = () => {
    setNum(num + 1)
  }

  useEffect(() => {
    console.log("useeffect run");

  }, [myFunc])



  return (
    <>
      {/* <h1>Hello My name is {name}</h1>


      <p> current Date is ={currDate} </p>
      <p> current Time is ={currTime} </p>

      <p>{num}</p>


      <button onClick={() => { myFunc() }}> click</button > */}

      <Api />
    </>
  )
}

export default App;

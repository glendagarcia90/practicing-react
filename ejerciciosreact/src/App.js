import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App() {

  const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} /><br></br>
      <MyButton count={count} onClick={handleClick} />
    </div>
  );


  function MyButton() {

    return (
      <button onClick={handleClick}>
        Click {count} times
      </button>
    );

  }

 
  
}



export default App;

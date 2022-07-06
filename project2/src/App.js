import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [string,setstring]=useState("");
  const [value,setvalue]=useState("");

  const handlechange=(event)=>{
    setstring(event.target.value);

  }
  const handleClick=()=>{
    setvalue(string)
    setstring("")
  }


  return (
    <div className="App-header">
      <h1>{value}</h1>
      <input value={string} onChange={handlechange} placeholder="write the things"></input><br></br>
      
        <div>
            <button onClick={handleClick}>Click Here</button>
        </div>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Box1 from './components/Box/Box.component';
import Box2 from './components/Box/Box1.component';

function App() {
  const [color,setColor]=useState(true);

  return (
    <div className="App">

      {
        color===true
        ?
        <Box2 />
        :
        <Box1/>
      }
      <button onClick={_=> setColor(!color)}>Toggle
      </button>
    </div>
  );
}

export default App;

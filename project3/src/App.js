import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [add,setadd]=useState('');
  const [item,setitem]=useState([]);

  const handlechange=(event)=>{
    setadd(event.target.value)
  }
  const handleclick=()=>{
    if(!add){
    }else{
      setitem([...item,add]);
      setadd('') 
    }
  }
    const deleteitem=(id)=>{
      const updateditems=item.filter((ele,ind)=>{
        return ind !== id;
      });
      setitem(updateditems);

  }

  return (
    <div className="App-header">
      <input value={add} onChange={handlechange} placeholder='Add items'/>
      <button onClick={handleclick}> Add to the list</button>

      {
        item.map((ele,ind)=> {
          return(
            <div>
              <h3>{ele}</h3>
              <button onClick={()=>deleteitem(ind)}>Delete</button>

            </div>
          )
        })
      }
      
    </div>
  );
}

export default App;

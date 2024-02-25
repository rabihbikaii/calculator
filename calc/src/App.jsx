import { useState } from 'react'


function App(){

  const [number,setnumber] = useState("");


  return (
    <>
     <div className='container'>
       <h1>CALCULATOR</h1>

     <header>
       <input type='text' value={number}/>
     </header>

     <section className='buttons'>

     <button className='grey' onClick={e => setnumber("")}>AC</button>
     <button className='grey' onClick={e => setnumber(-number)}>+/-</button>
     <button className='grey' onClick={e => setnumber(number/100)}>%</button>
     <button className='orange' value="/" onClick={e => setnumber(number)}>/</button>
     <button className='black' value="7" onClick={e => setnumber(number+e.target.value)}>7</button>
     <button className='black' value="8" onClick={e => setnumber(number+e.target.value)}>8</button>
     <button className='black' value="9" onClick={e => setnumber(number+e.target.value)}>9</button>
     <button className='orange' value="*" onClick={e => setnumber(number+e.target.value)}>x</button>
     <button className='black' value="4" onClick={e => setnumber(number+e.target.value)}>4</button>
     <button className='black' value="5" onClick={e => setnumber(number+e.target.value)}>5</button>
     <button className='black' value="6" onClick={e => setnumber(number+e.target.value)}>6</button>
     <button className='orange' value="-" onClick={e => setnumber(number+e.target.value)}>-</button>
     <button className='black' value="1" onClick={e => setnumber(number+e.target.value)}>1</button>
     <button className='black' value="2" onClick={e => setnumber(number+e.target.value)}>2</button>
     <button className='black' value="3" onClick={e => setnumber(number+e.target.value)}>3</button>
     <button className='orange' value="+" onClick={e => setnumber(number+e.target.value)}>+</button>
     <button className='black' value="0" onClick={e => setnumber(number+e.target.value)}>0</button>
     <button className='black' value="." onClick={e => setnumber(number+e.target.value)}>.</button>
     <button className='orangee' onClick={e => setnumber(eval(number))}>=</button>

     </section>
     



     </div>
    </>
  );
  }

export default App

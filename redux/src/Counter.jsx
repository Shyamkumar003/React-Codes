import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount} from './Counterslice'
import { useState } from 'react'
import {add} from './ArthmeticSlice'


export function Counter() {

  //counter Redux
 const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  let [inputAmount, setInputAmount] = useState();

  //ARTHMETIC REDUX
  let [Number1, setNumber1] = useState(0);
  let [Number2, setNumber2] = useState(0);
  const data = useSelector(state => state.Arthemetic);
  let dispatch2 = useDispatch();

  const handlesubmit=(e)=>{
     e.preventDefault();
     console.log(data)
     dispatch2(add({Number1,Number2}))
  }

  // const handlechange=(e)=>{
  //   switch(e){
  //     case (e==='add'): 
  //     dispatch2(add({Number1,Number2}))
  //     break

  //     case (e==='add'): 
  //     dispatch2(mul({Number1,Number2}))
  //     break

  //     case (e==='add'): 
  //     dispatch2(sub({Number1,Number2}))
  //     break

  //     case (e==='add'): 
  //     dispatch2(div({Number1,Number2}))
  //     break
  //   }
  // }


  return (
    <div> <center>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br></br>

        <span>{count}</span>

        <br></br>

        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <br></br>
       <br></br>

       Enter a value : <input type='text' value={inputAmount} onChange={(e)=> setInputAmount(e.target.value)}/>

       <br></br>
       <br></br>
       
        <button 
        aria-label='IncrementByAmount'
        onClick={() => dispatch(incrementByAmount(Number(inputAmount)))}>
          IncrementByAmount
        </button>


        <h2>Arthmetic Operations</h2>

        <form onSubmit={(e)=>handlesubmit(e)}>

        Number1: <input type='text' onChange={(e)=> setNumber1(Number(e.target.value))}/> 

        Number2: <input type='text' onChange={(e)=> setNumber2(Number(e.target.value))}/> 
        <br></br>
       <br></br>
       <input type='submit' value='submit'></input>

       {/* <select onChange={(e)=>handlechange(e.target.value)}>
       <option value="add">add</option>
       <option value="sub">sub</option>
       <option value="mul">mul</option>
       <option value="div">div</option>    
       </select> */}

       <br></br>
       <br></br>

       {/* {data.Number1}<br></br>
       {data.Number2}<br></br>
       {data.result}<br></br> */}
       {JSON.stringify(data)}
        </form>

        <br></br>
       <br></br>

      

       
      </div>
      </center>
    </div>
  )
}
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,reset,countWithNum } from './redux/counterSlice';

function Counter() {
  const count = useSelector((store)=>store.counterReducer.counter)
  console.log(count);
  const dispatch = useDispatch()

  const [num,setNum]=useState(0)

  return (
    <>
    <div className='d-flex align-items-center justify-content-center' style={{height:'80vh'}}>
        <div className="w-75 border border-2 border-light p-5">
            <h1 className='text-center text-danger fw-semibold'>Counter</h1>
            <h2 className='text-center text-light mb-3'>{count}</h2>
            <div className="d-flex justify-content-center mb-3">
                <button className='btn btn-outline-success' onClick={()=>{dispatch(increment())}}>+ Increment</button>
                <button className='btn btn-outline-warning mx-4' onClick={()=>{dispatch(decrement())}}>- Decrement</button>
                <button className='btn btn-outline-danger' onClick={()=>{dispatch(reset())}}>Reset</button>
            </div>
            <div className='d-flex justify-content-around'>
              <input type="number" className='form-control w-75' onChange={(e)=>{setNum(e.target.value)}} placeholder='Enter Number to Add' />
              <button className='btn btn-success' onClick={()=>{dispatch(countWithNum(num))}}>Add</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter
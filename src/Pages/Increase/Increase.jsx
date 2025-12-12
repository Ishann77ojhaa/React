import React, { useState } from 'react'

const Increase = () => {
     const[count, SetCount] = useState(0)

    function increasecount(){
        SetCount(count + 1)
        console.log(count)
    }
    function decreasecount(){
        SetCount(count - 1)
        console.log(count)
    }


  return (
    <div>
       <h2>{count}</h2>
     <button onClick={increasecount} style={{height:"30px" , width:"50px" }}> + </button>
     <button onClick={decreasecount} style={{height:"30px" , width:"50px" }}> - </button>
    </div>
  )
}

export default Increase
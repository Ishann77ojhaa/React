import React, { useEffect, useState } from 'react'

const  UseEffect = () => {

const [count,Setcount] = useState(0)
const [name, Setname] = useState("Ishann")

// useEffect(()=>{
//     console.log("I'll run on First time and each render") 
// })

// useEffect(()=>{
//        console.log("I'll run on first time only")
// },[])   
        //   [] = It is dependency array

useEffect(()=>{
       console.log("I'll run on first time and when count is changed")
    //    document.title = name
},[count])


  return (
    <div> 
     <button onClick={()=>Setcount(count + 1)}>Increase</button>
    <br/>
    
       <button onClick={()=>Setcount(count - 1)}>Decrease</button>
    <p>Count is {count}</p>

     <button onClick={() => Setname("Ojhaa")}> Change Name </button>
     <p>Name is {name}</p>

    </div>
  )
}
export default UseEffect
import React from 'react'

const Button = (passed) => {             
                
  return (                               
                                               
    <div>
        <button style={{height:"50px" ,width:"100px",backgroundColor:passed.color}}> {passed.title} </button>
    </div>
  )
}

export default Button
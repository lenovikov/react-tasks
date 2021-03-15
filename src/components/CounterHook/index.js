import React, { useState } from 'react'

const Counter = () => {
    const [counter,newNumber] = useState(0)
    const changeNumber =(number)=> {
        newNumber(counter + number)
    }

    return(
        <div>
            <button onClick={()=>{changeNumber(+1)}}>+</button>
            {counter}
            <button onClick={()=>{changeNumber(-1)}}>-</button>
        </div>
    )
}   



export default Counter
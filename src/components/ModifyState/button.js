import React from 'react'

const Button = ({click,label}) =>{
    return (
        <button onClick={click}>{label}</button>
    )
}

export default Button
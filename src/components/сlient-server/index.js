import { useState } from "react"
import PostRequest from "./Form.js"



const Form =() =>{
    const [tel,newTel] = useState('')
    const [password,newPassword] = useState('')

    const changeTel =(event)=>{
        newTel(event.target.value)
    }
    const changePass =(event)=>{
        newPassword(event.target.value)
    }

    return(
        <div>
            <input onChange={changeTel} type='tel' value={tel} ></input>
           <input onChange={changePass} type ='password' value={password}></input>
           <PostRequest password ={password}  tel={tel}  />
        </div>
    )
}

export default Form
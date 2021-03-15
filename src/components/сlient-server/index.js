import { useState } from "react"
import PostRequest from "./Request.js"



const Form =() =>{
    const [tel,newTel] = useState('')
    const [password,newPassword] = useState('')

  
    return(
        <div>
            <input onChange={(event)=>{newTel(event.target.value)}} type='tel' value={tel} ></input>
           <input onChange={(event)=>{newPassword(event.target.value)}} type ='password' value={password}></input>
           <PostRequest password ={password}  tel={tel}  />
        </div>
    )
}

export default Form
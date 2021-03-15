import axios from "axios"
import { useState } from "react"



const PostRequest = ({password,tel}) => {

    const [data,newData] = useState('')
    const [err,newErr] = useState('')
   const postReq = async(event) =>{
    event.preventDefault()
    try{
        const response = await axios.post('http://localhost:3001/auth/sign-in',{
            phone:tel,
            password:password
        })
       
        newData(response.data.name.first)
    
    }catch(error){
        newErr(error.response.data)
    }
   }

   return(
       <div>
           <input onClick={postReq} type='submit'></input>
          <div>{data}</div>
          <div>{err}</div>
       </div>
   )

}

export default PostRequest

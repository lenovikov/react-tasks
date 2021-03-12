import axios from "axios"
import { useState } from "react"



const PostRequest = ({password,tel}) => {

    const [data,newData] = useState()
 
   const postReq = async(event) =>{
    event.preventDefault()
    try{
        const response = await axios.post('http://localhost:3001/auth/sign-in',{
            phone:tel,
            password:password
        })
        const result = await response.data.name.first
        newData(result)
      
        
    }catch(e){
        console.log(e);
    }
   }

 
   return(
       <div>
           <input onClick={postReq} type='submit'></input>
          <div>{data}</div>
       </div>
   )

}

export default PostRequest

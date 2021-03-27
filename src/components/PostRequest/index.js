import React, { useState } from 'react'

const Request = ({tel,pass,name,surName,valid}) =>{

    const arr = [
        {'имя':name},
        {'фамилия':surName},
        {'пароль':pass},
        {'телефон':tel},
    ]
   
    const sendRequest = () =>{
        valid&&console.log(arr);
    }

    return (
        <div>
            <input onClick={sendRequest} type = 'submit'></input>
        </div>
    )
}


export default Request







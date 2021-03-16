import React, { useEffect, useState } from 'react'
import Request from './index.js'
import s from './style.module.css'

const Form = () =>{
    const [tel,setTel] = useState('')
    const [pass,setPass] = useState('')
    const [checkPass,setcheckPass] = useState('')
    const [name,setName] = useState('')
    const [surName,setsurName] = useState('')
    const [valid,setValid] = useState(false)

    useEffect(()=>{
        setValid(false)
        if(pass === checkPass && tel.length===13 && name !=='' && surName !=='' && pass.length >= 8){
            setValid(true)
        }
    })

    return (
    <div className ={s.form__request}>
        <div className={s.input__div}> 
            <input onChange={(event)=>setName(event.target.value)} type='text' value={name} placeholder='Имя'></input>
            {name ===''&&<span>Обязательно заполните поле</span>}
        </div>
        <div className={s.input__div}>
            <input onChange={(event)=>setsurName(event.target.value)} type='text' value={surName} placeholder='Фамилия'></input>
            {surName ===''&&<span>Обязательно заполните поле</span>}
        </div>
        <div className={s.input__div}>
            <input onChange={(event)=>setPass(event.target.value)} type='password' value={pass} placeholder='пароль'></input>
            {pass.length < 8 &&<span>нужно ввести {8-pass.length} символов</span>}
        </div>
        <div  className={s.input__div}>
        <input onChange={(event)=>setcheckPass(event.target.value)} type='password' value={checkPass} placeholder='пароль'></input>
            {pass!==checkPass&&<span>пароли не совпадают</span>}
        </div>
        <div  className={s.input__div}>
            <input onChange={(event)=>setTel(event.target.value)} type='tel' value={tel} placeholder='телефон'></input>
            {tel.length === 13 ?<span>телефон введен верно</span>:<span>нужно ввести {13-tel.length} символов</span>}
        </div>
        <Request tel={tel} pass={pass} name={name} surName={surName} valid={valid} />
    </div>)
    

}

export default Form
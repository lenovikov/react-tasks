import React, { useState } from 'react'
import Button from './button.js'


const ModifyState = () =>{

    const [number,setNumber] = useState(0)

    const onChnage = (num) =>{
        setNumber(number + num)
    }

    const showInConsol = () =>{
        console.log('как дела?');
    }
    const showAlert = () =>{
        alert('как дела?');
    }
    const showInFunction = (string) =>{
        console.log(`кнопка с параметром: ${string}`);
    }
    
    return (
        <div>
            <Button click = {()=>onChnage(-1)} label = '-'/>
            {number}
            <Button  click = {()=>onChnage(+1)} label = '+'/>
            <Button  click = {showInConsol} label = 'вывести в консоль'/>
            <Button  click = {showAlert} label = 'вывести в алерт'/>
            <Button  click = {()=>showInFunction('кнопка с параметром')} label = 'кнопка с параметром '/>
        </div>
    )
}


export default ModifyState
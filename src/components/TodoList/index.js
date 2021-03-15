import React from 'react'

import task from './task.json'

const ShowList =({arr})=> {
    return(
        <div>{arr.map((elem)=>{
            return <li key={elem.id}>{elem.task}</li>
            })}
        </div>
    )
}

class TodoList extends React.Component{

    state ={
        value:'',
        arr:task   
    }

    changeArray =(event) =>{
        event.preventDefault()
        const newElem = {
            id:this.state.arr.length,
            task:this.state.value
        }
        const newItem = [...this.state.arr,newElem]
        this.setState({arr:newItem,value:''})  
    }

    changeInput =(event)=>{
        this.setState({value:event.target.value})
    }

    render() {
        return(
            <div>
                <ShowList arr={this.state.arr}/>
                <input type='text' onChange={this.changeInput} value={this.state.value}></input>
                <button onClick={this.changeArray}>Добавить</button>
            </div>
        )
    }
}

export default TodoList
import React from 'react'
import names from '../../names.json'
import ShowList from './showList.js'


class AddRandomElem extends React.Component{

    state={
        people:names
    }

    onClick =()=>{
        const newElem = names[Math.floor(Math.random() * 13)]
        const newPeople = [...this.state.people,newElem]
        this.setState({people:newPeople})
    }   


    render(){
        return(
            <div>
                <button onClick={this.onClick}>click</button>
                    <ShowList userList = {this.state.people}/>
            </div>
        )
    }

}

export default AddRandomElem
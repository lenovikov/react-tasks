import React from 'react'
import Number from './index1'

const arr = ['пепперони','анчоусы','сыры']

function СhangeList(){
    return (
    <ul>
        {arr.map(item => {
            return <li>{item}<Number /></li>
        })}
    </ul>
    )
}

class MutableList extends React.Component {

    state = {
        value: true
    }

    change=()=>{
        this.setState({value: ! this.state.value})
    }

    render() {
        return (

            <div>
            <button onClick={this.change}> {this.state.value?'menu':'закрыть'}</button>
           {this.state.value && <СhangeList />}
            </div>
           
        )
    }
}



export default MutableList
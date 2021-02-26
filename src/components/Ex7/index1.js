import React from 'react'


class Number extends React.Component {


    state={
        number:0
    }

    plus=()=>{
        this.setState({number:this.state.number + 1})
    }

    minus=()=> {
        this.setState({number:this.state.number - 1})
    }
    
    render(){
        return (
            <span>
                <button onClick = {this.plus}>+</button>
                {this.state.number}
                <button onClick = {this.minus}>-</button>
            </span>
        )
    }
       
    
}

export default Number
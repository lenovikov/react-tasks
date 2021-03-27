import React from 'react'

class Form extends React.Component{

    state ={
        value:''
    }

    changeEmail =(event) =>{
        console.log(event.target.value);
        this.setState({value:event.target.value})
    }
   

    render(){
        return(
            <input type='text' onChange={this.changeEmail} value={this.state.value}></input>
        )
    }
}

export default Form
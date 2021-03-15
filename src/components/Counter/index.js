import { render } from '@testing-library/react'
import React from 'react'
import Button from './button.js'

class ModifyState extends React.Component{

    state = {
        number:0
    }

    plus=()=>{
        this.setState({number:this.state.number + 1})
    }
    minus =()=>{
        this.setState({number:this.state.number -1})
    }
    

    render(){
        return(
            <div>
                <Button click ={this.minus} label='-'/>
                {this.state.number}
                <Button click ={this.plus} label='+'/>
            </div>
        )
    }
    
}



export default ModifyState
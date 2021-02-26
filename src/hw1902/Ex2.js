import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Textstyle extends Component {
    state = {
        value:true
    }
    change = () => {
        this.setState({value: !this.state.value})

    }
    render(){
        return <div onClick = {this.change} className = {this.state.value? 'italic-text' : ''}>qwdf</div>   
    }
}

export default Textstyle
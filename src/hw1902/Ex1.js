import { render } from '@testing-library/react';
import React, { Component } from 'react';


class Square extends Component {

    render(){
        return (
            <div className = {this.props.ccsClass}>
                {this.props.label}
            </div>
        )
    }
    
}


export default Square 
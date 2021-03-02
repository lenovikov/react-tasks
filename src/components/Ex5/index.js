import React from 'react'
import Spinner from './spinner.js'


class SpinSelection extends React.Component {

    state = {
        value: true
    }

    change=()=> {
        this.setState({value: !this.state.value})
    }

    render() {
        return(
            <button onClick={this.change}>{this.state.value? <Spinner />:1 }</button>
        )
    }
}

export default SpinSelection
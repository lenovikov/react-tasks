import React from 'react'


class Spiner extends React.Component {

    state = {
        value: true
    }

    change=()=> {
        this.setState({value: !this.state.value})
    }

    render() {
        return(
            <button onClick={this.change} className={this.state.value? 'loader loader-animated' : '' }>1</button>
        )
    }
}

export default Spiner
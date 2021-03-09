import React from 'react'
import Spinner from './spinner.js'


class SpinSelection extends React.Component {


    render() {
        return(
        <button>{this.props.value?<Spinner/>:1}</button>
        )
    }
}


export default SpinSelection
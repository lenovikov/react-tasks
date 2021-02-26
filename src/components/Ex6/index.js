import React from 'react'


class Spiner extends React.Component {


    render() {
        return(
            <button  className={this.props.className? 'loader loader-animated' : '' }>1</button>
        )
    }
}


export default Spiner
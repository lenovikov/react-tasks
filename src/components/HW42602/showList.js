import React from 'react'


class ShowList extends React.Component {

    render(){
        return(
            <ul>
                {this.props.state.map((item)=>{
                    return <li key={Math.random()}>{item}</li>
                })}
            </ul>
        )
    }


}


export default ShowList
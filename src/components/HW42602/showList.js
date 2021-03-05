import React from 'react'


class ShowList extends React.Component {

    render(){
        return(
            <ul>
                {this.props.userList.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
        )
    }


}


export default ShowList
import React from 'react'

function ShowHello(){
    return(
        <div>
            <h1>Hello user</h1>
        </div>
    )
}


class ChangeLogin extends React.Component{

    state ={
        inSignedIn:false
    }

    change=()=>{
    setTimeout(()=>{this.setState({inSignedIn: !this.state.inSignedIn})},3000)
    }

    render(){
        return(<div>
            {this.state.inSignedIn?<ShowHello/>:<button onClick={this.change}>in Signed</button>}
        </div>)
    }
}

export default ChangeLogin
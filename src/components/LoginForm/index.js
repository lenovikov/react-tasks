import React from 'react'

class LoginForm extends React.Component{

    state ={
        value:false,
        hello: ''
    }
    sayHi = () => {
        this.setState({value:false,hello:'привет'})
    }   

    onChange = () => {
        setTimeout(()=>{this.sayHi()},3000)
        this.setState({value:true})
    }


    render(){
        return(
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }
            }>
                <button onClick={this.onChange}>Сказать привет</button>
                {this.state.value&&(<div className="loader"></div>)}
                <span>{this.state.hello}</span>
            </div>
        )
    }
}

export default LoginForm
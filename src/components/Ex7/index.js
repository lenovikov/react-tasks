import React from 'react'
import Number from './index1'

const arr = ['пепперони','анчоусы','сыры']

function СhangeList(){
    return (
    <ul>
        {arr.map((item,index) => {
            return <li key={item}>{item}<Number /></li>
        })}
    </ul>
    )
}

class MutableList extends React.Component {

    state = {
        value: true
    }

    change=()=>{
        this.setState({value: !this.state.value})
    }

    checkPosition=()=>{
        if(this.props.position ==="top"){
            return( 
            <div>
                {this.state.value && <СhangeList />}
                <button onClick={this.change}> {this.state.value?'menu':'закрыть'}</button>
            </div>)
        }else if(this.props.position ==="bottom"){
            return( 
                <div>
                    {this.state.value && <СhangeList />}
                    <button onClick={this.change}> {this.state.value?'menu':'закрыть'}</button>
                </div>)
        }else if(this.props.position ==="left"){
            return( 
                <div style={{position:'relative'}}>
                    <div className ="left">{this.state.value && <СhangeList />}</div>
                    <button onClick={this.change}> {this.state.value?'menu':'закрыть'}</button>
                </div>)
        } else if(this.props.position ==="right"){
            return( 
                <div style={{position:'relative'}}>
                    <div className ="right">{this.state.value && <СhangeList />}</div>
                    <button onClick={this.change}> {this.state.value?'menu':'закрыть'}</button>
                </div>)
        }
    }    

    render() {
        return (
           this.checkPosition()
        )
    }
}



export default MutableList
import { render } from '@testing-library/react'
import React from 'react'


class Button extends React.Component{

  render(){
      return(
          <button onClick={this.props.click}>{this.props.label}</button>
      )
  }
    
}



export default Button
import React from 'react'
import data from '../../data.json'

function MakeLi(){
    return(
        data.map((item,index)=>{
            return(
            <div key={item._id} style={{border:'1px solid black'}}>
                <h3>{item.name.first}</h3>
                <h4>{item.name.last}</h4>
            </div>
            )
        })
        
    )
}

class ShowUserInfo extends React.Component{
    render(){
        return(
            <div style={{maxWidth:'300px'}}>
                <MakeLi/>
            </div>
        )
    }
}

export default ShowUserInfo
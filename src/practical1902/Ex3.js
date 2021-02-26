import { render } from '@testing-library/react';
import React, { Component } from 'react';


const EditText = (props) => {

    return (
        <div style={{
            color:props.color,
            fontWeight: props.weigh,
            fontSize:props.size
        }}>{props.text}</div>
    )
}

export default EditText
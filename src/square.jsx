import React from 'react'

const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    style={{border: '1px solid ', width: "6em", display: "flex", justifyContent:"center"}}
    className='square'>
        <h5 >{props.value}</h5>
    </div>
  )
}

export default Square

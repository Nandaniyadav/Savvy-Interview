import React from 'react'
import './TodoHeaderStyle.css'

const TodoHeader = () => {
  return (
    <div className='headerContainer'>
        <p className='headerTxt'>We love <span style={{color:"red"}}>❤</span> Savvy</p>
    </div>
  )
}

export default TodoHeader
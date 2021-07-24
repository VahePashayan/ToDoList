import React from 'react'

const Task = ({list, onClick}) => {
    return list.map((el) => 
    <span> 
        <p>{el.value}</p> 
        <button onClick={onClick}>Delete</button> 
    </span>)
}
 
export default Task;


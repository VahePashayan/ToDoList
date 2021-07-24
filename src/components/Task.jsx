import React from 'react'

const Task = ({list}) => {
    return list.map((el) => 
    <span> 
        <p>{el}</p> 
        <button>Edit</button>
        <button>Delete</button> 
    </span>)
}
 
export default Task;


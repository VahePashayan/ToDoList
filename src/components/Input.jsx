import React from 'react'

const Input = ({value, onChange, onClick}) => {
    return <span>
        <input type="text" placeholder="you have to do..." value={value} onChange={onChange} autoFocus />
        <button onClick={onClick}>Add</button>
    </span>;
}
 
export default Input;
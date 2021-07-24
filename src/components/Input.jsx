import React from 'react'

const Input = ({value, onChange}) => {
    return <span>
        <input type="text" placeholder="you have to do..." value={value} onChange={onChange} autoFocus />
    </span>;
}
 
export default Input;
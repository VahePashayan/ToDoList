import React from "react";

const Input = ({ value, onChange, onClick }) => {
  return (
    <span>
      <input 
        type="text"
        placeholder="you have to do..."
        value={value}
        onChange={onChange}
        autoFocus
      />
      <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={onClick}>Add</button>
    </span>
  );
};

export default Input;

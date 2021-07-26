import React from "react";

const Input = ({ value, onChange, onClick }) => {
  return (
    <span>
      <input
        className="px-10 py-5 placeholder-blueGray-300 text-black-600 relative bg-white bg-white rounded text-center border border-blue-300 outline-none focus:outline-none focus:ring mr-5"
        type="text"
        placeholder="you have to do..."
        value={value}
        onChange={onChange}
        autoFocus
      />
      <button
        className="bg-blue-500 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full mb-8"
        onClick={onClick}
      >
        Add
      </button>
    </span>
  );
};

export default Input;

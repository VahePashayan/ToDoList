import React from "react";

const Task = ({ list, onClick }) => {
  return list.map(({value, id}) => (
    <span className="flex justify-center">
      <p className= "mt-10 mb-5 text-xl rounded border-4 border-blue-300 py-3 text-center mr-5 w-64">{value}</p>
      <button
        className="bg-blue-500 hover:bg-red-700 text-white font-bold mt-10 mb-5 px-4 rounded-full"
        onClick={()=>onClick(id)}
      >
        Delete
      </button>
    </span>
  ));
};

export default Task;

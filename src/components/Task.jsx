import React from "react";

const Task = ({ list, onClick }) => {
  return list.map((el) => (
    <span>
      <p>{el.value}</p>
      <button
        className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={()=>onClick(el.id)}
      >
        Delete
      </button>
    </span>
  ));
};

export default Task;

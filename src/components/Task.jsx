import React from "react";

const Task = ({ list, handleDelete }) => {
  return list.map((el, id) => (
    <span>
      <p>{el.value}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleDelete}>
        Delete
      </button>
    </span>
  ));
};

export default Task;

import React from "react";

const TaskTodo = ({ checked, onChange, liKey, text, remove, editTodo }) => {
  return (
    <li className="text-lg font-medium text-gray-600 bg-white p-2 flex gap-x-4 justify-between rounded-md">
      <div className="">
        <input
          type="checkbox"
          name=""
          id=""
          checked={checked}
          onChange={onChange}
          className="mr-2"
        />
        <span key={liKey}>{text}</span>
      </div>
      <div className="flex gap-x-2">
        <button onClick={remove} className="text-red-500">delete</button>
        <button onClick={editTodo}>Edit</button>
      </div>
      
    </li>
  );
};

export default TaskTodo;

import React, { useEffect, useState } from "react";
import TaskTodo from "./layout/TaskTodo";

const Todo = () => {
  const [todoList, setTodoList] = useState(() => {
    // Retrieve todo list from local storage on component mount
    const storedTodoList = localStorage.getItem("todoList");
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });

  const [input, setIpute] = useState("");
  const [showBtn, setShowBtn] = useState(false); //this is for handle add/update todo
  const [searchQuery, setSearchQuery] = useState(""); // filter from search
  const [editId, setEditId] = useState(null);

  const add = () => {
    if (input) {
      const newText = { id: Date.now(), text: input, completed: false };
      setTodoList((prev) => [...prev, newText]);
      setIpute("");
    }
  }; // add todo

  const toggleTask = (id) => {
    const updateText = todoList.map((e) =>
      e.id === id ? { ...e, completed: !e.completed } : e
    );
    setTodoList(updateText);
  }; // check box fo completed or not

  const deleteTodo = (id) => {
    const filterTodo = todoList.filter((e) => e.id !== id);
    setTodoList(filterTodo);
  }; // delete data whit filter

  const editTodo = (id, text) => {
    setIpute(text);
    setEditId(id); // Add state to track the ID of the todo being edited
    setShowBtn(!showBtn);
  };

  const update = () => {
    if (input) {
      const updatedTodoList = todoList.map((todo) => {
        if (todo.id === editId) {
          return { ...todo, text: input };
        }
        return todo;
      });
      setTodoList(updatedTodoList);
      setIpute(""); // Clear input field after updating
      setEditId(null); // Reset editId state
    }
    setShowBtn(!showBtn);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchTodoList = todoList.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const todosearchItems = searchQuery.trim() === "" ? todoList : searchTodoList;

  // Save todo list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-gray-200 h-screen gap-y-2 m-auto w-[1320px] pt-32">
      <section className="flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Search tasks"
            value={searchQuery}
            onChange={handleSearch}
            className="w-64 p-2 rounded-md text-gray-700 outline-transparent mr-3 my-4"
          />
          <h1 className="text-gray-800 text-lg font-bold uppercase mt-3">
            my Todo List
          </h1>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="enter your text"
              value={input}
              onChange={(e) => setIpute(e.target.value)}
              className="w-64 p-2 rounded-md text-gray-700 outline-transparent mr-3 my-4"
            />
            {!showBtn ? (
              <button
                className=" text-gray-700 text-lg font-bold"
                onClick={() => add()}
              >
                add
              </button>
            ) : (
              <button
                className=" text-gray-700 text-lg font-bold"
                onClick={() => update()}
              >
                save
              </button>
            )}
          </div>
        </div>
        <div className="main">
          <ul className="flex flex-col gap-y-4 justify-start ml-[-42px]">
            {" "}
            {/* rendaring the todo list */}
            {todosearchItems
              ? todosearchItems.map((e) => {
                  return (
                    <div className="">
                      <TaskTodo
                        checked={e.completed}
                        onChange={() => toggleTask(e.id)}
                        liKey={e.id}
                        text={e.text}
                        remove={() => deleteTodo(e.id)}
                        editTodo={() => editTodo(e.id, e.text)}
                      />
                      <div className="">
                        {e.completed ? (
                          <p className="text-[#008000] font-medium">
                            Completed
                          </p>
                        ) : (
                          <p className="text-[#666666] font-medium">Pending</p>
                        )}
                      </div>
                    </div>
                  );
                })
              : null}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Todo;

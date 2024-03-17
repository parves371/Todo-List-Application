import React, { useState } from 'react';

function TodoList() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "buy groceries", completed: false },
    { id: 2, text: "buy books", completed: false },
    { id: 3, text: "buy coffee", completed: false },
  ]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleToggleComplete = (id) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: editText };
      }
      return todo;
    }));
    setEditId(null);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input 
                  type="text" 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)} 
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span 
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => handleToggleComplete(todo.id)}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

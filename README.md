# Todo List App

## Overview

This is a simple Todo List application built with React.js. Users can add, delete, and mark todos as completed. The application also utilizes local storage to persist todo data across sessions.

## Features

- **Add New Task**: Users can add new tasks to the list by entering task details and clicking the "Add" button.
- **Update Task**: Tasks can be edited by clicking on them, updating the task text, and saving the changes.
- **Mark as Completed**: Users can mark tasks as completed by toggling a checkbox next to each task.
- **Delete Task**: Tasks can be deleted by clicking on a delete button next to each task.
- **Search Task**: The application includes a search bar that allows users to search for tasks by entering keywords.

## Installation

To run this application locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/parves371/Todo-List-Application.git

```

### 2. Navigate into the project directory:

```bash
cd todo-list-app
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the development server:

```bash
npm start
```

#### 5. Open your browser and navigate to http://localhost:3000 to view the application.

## Usage

- To `add` a new todo, type your task in the input field and press Enter or click the "Add Todo" button.
- To `delete` a todo, click on the trash icon next to the todo.
- To `mark` a todo as completed, click on the checkbox next to the todo.
- To `search` for a todo item, use the search bar located at the top of the todo list interface.

- To `update` a todo item, simply edit the text of the todo item directly in the list.

## Technologies Used

- React.js
- JavaScript
- HTML
- Taillwind Css

# Documentation

This document provides documentation for the `add` `Update` `Mark as Completed` `Delete` `Search` function.

## Function Description

The `add` function is responsible for adding a new item to a todo list. It takes input from the user and creates a new todo item with a unique ID generated based on the current timestamp. This function then updates the todo list with the new item and clears the input field.

The `update` todo functionality allows users to modify existing todo items in the todo list. Users can edit the text of a todo item and save the changes.

The `mark` as completed functionality allows users to mark todo items as completed or undone using a checkbox. This feature provides users with the ability to track the progress of their tasks.

The `delete` functionality allows users to delete a specific todo item from their list. This feature provides users with the ability to remove tasks that are no longer needed or relevant.

The `search` functionality allows users to search for specific todo items based on a keyword or phrase. This feature provides users with the ability to quickly locate tasks within their list.

## Starter Code

```javascript
const [todoList, setTodoList] = useState([
  { id: 1, text: "Write documentation", completed: false },
  { id: 2, text: "Implement search functionality", completed: false },
  { id: 3, text: "Fix bug in delete functionality", completed: false },
]);
```

## Function Syntax `add`

```javascript
const add = () => {
  if (input) {
    const newText = { id: Date.now(), text: input, completed: false };
    setTodoList((prev) => [...prev, newText]);
    setInput(""); // Clears the input field
  }
};
```

## Function Syntax `update`

```javascript
const [input, setIpute] = useState("");

const [showBtn, setShowBtn] = useState(false); //this is for handle add/update todo
const [editId, setEditId] = useState(null);

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
```

## Function Syntax `toggleTask`

```javascript
const toggleTask = (id) => {
  const updateText = todoList.map((e) =>
    e.id === id ? { ...e, completed: !e.completed } : e
  );
  setTodoList(updateText);
}; // check box fo completed or not
```

## Function Syntax `deleteTodo`

```javascript
const deleteTodo = (id) => {
  const filterTodo = todoList.filter((e) => e.id !== id);
  setTodoList(filterTodo);
}; // delete data whit filter
```

## Function Syntax `search`

```javascript
const [searchQuery, setSearchQuery] = useState(""); // filter from search

const handleSearch = (e) => {
  setSearchQuery(e.target.value);
};

const searchTodoList = todoList.filter((todo) =>
  todo.text.toLowerCase().includes(searchQuery.toLowerCase())
);

const todosearchItems = searchQuery.trim() === "" ? todoList : searchTodoList;
```

## Function Syntax `Save into local storage`

```javascript
const [todoList, setTodoList] = useState(() => {
  // Retrieve todo list from local storage on component mount
  const storedTodoList = localStorage.getItem("todoList");
  return storedTodoList ? JSON.parse(storedTodoList) : [];
});

// Save todo list to local storage whenever it changes
useEffect(() => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}, [todoList]);
```

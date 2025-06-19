import React, { useState } from 'react'

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  //add func:
  const addTodo = () => {
    if(text.trim === '') return;
    setTodos([...todos, {id: Date.now(), text, completed:false} ])
  }

  //completed function:
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : console.log("WTF"))
    )
  }

  //delete task:
  const deleteTask = (id) => {
    setTodos(
      //take and put all todos except todo with id
      todos.filter(todo => todo.id !== id )
    );
  }

  return (
    <div>
      <h1>📑 Tasks</h1>
    </div>
  )
}

export default App
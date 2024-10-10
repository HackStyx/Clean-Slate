import React, { useState, useEffect } from 'react';
import { CheckSquare, PlusCircle, Trash2, XIcon } from 'lucide-react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const toggleTodo = () => setIsOpen(!isOpen);

  const addTodo = () => {
    if (newTodo.trim()) {
      const updatedTodos = [...todos, { id: Date.now(), text: newTodo, completed: false }];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setNewTodo('');
    }
  };

  const toggleTodoComplete = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <>
      <button
        onClick={toggleTodo}
        className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-10"
      >
        <CheckSquare size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 left-4 bg-gray-900 text-white p-6 rounded-xl w-80 space-y-4 shadow-lg z-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center">
              <CheckSquare className="text-green-400 mr-2" size={24} />
              Todo List
            </h2>
            <button onClick={toggleTodo} className="text-gray-400 hover:text-white transition-colors">
              <XIcon size={20} />
            </button>
          </div>
          
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-grow bg-gray-800 p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Add a new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button 
              className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
              onClick={addTodo}
            >
              <PlusCircle size={20} />
            </button>
          </div>

          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center justify-between bg-gray-800 p-2 rounded-lg">
                <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                  {todo.text}
                </span>
                <div className="flex space-x-2">
                  <button 
                    className={`p-1 rounded ${todo.completed ? 'bg-green-600' : 'bg-gray-700'}`}
                    onClick={() => toggleTodoComplete(todo.id)}
                  >
                    <CheckSquare size={16} />
                  </button>
                  <button 
                    className="bg-red-600 p-1 rounded"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
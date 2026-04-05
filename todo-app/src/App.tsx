import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import type { Task } from './types/task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // フォーム送信時のページリロードを防ぐ
    if (inputValue.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        title: inputValue,
        completed: false
      };

      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTask={addTask} inputValue={inputValue} setInputValue={setInputValue} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>

  )
}

export default App

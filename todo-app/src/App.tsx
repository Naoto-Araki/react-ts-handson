import { useState } from 'react'
import './App.css'

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={addTask}>
        <input 
          type="text"
          placeholder="タスクを入力"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <div className="task-list">
        <h2>タスク一覧</h2>
        <p>{tasks.length}件のタスクがあります</p>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default App

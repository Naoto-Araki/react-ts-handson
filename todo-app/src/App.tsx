import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue])
      setInputValue('')
    }
  }

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
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>

  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <div className="App">
      <h1>自己紹介アプリ</h1>
      <div>
        <label htmlFor="name-input">あなたの名前</label>
        <input 
        id = "name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='名前を入力してください'
        />
      </div>

      {name && (
        <div className='greeting'>
          <h2>こんにちは、{name}さん！</h2>
          <p>Reactへようこそ！</p>
        </div>
      )}
    </div>  
  )
}

export default App

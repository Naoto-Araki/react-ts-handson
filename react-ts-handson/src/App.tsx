import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const incrementBy10 = () => setCount(count + 10)
  const reset = () => setCount(0)

  return (
    <div className="App">
      <h1>カウント: {count}</h1>
      <div className='button-group'>
        <button onClick={increment}>
          +1
        </button>
        <button onClick={incrementBy10}>
          +10
        </button>
        <button onClick={reset}>
          リセット
        </button>
      </div>
      <p className='count-type'>
        {count % 2 === 0 ?
          <div>偶数です</div>
          :
          <div>奇数です</div> 
        }
      </p>
    </div>
  )
}

export default App

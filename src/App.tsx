import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h1>hello I am wilson Ibekason, And i love to write, Changes has been made to the application, to populate all the available components needed to drive success in a company , and i want to emphasize on these very well </h1>
    </div>
  )
}

export default App
// echo "# stream_messanger" >> README.md
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// ggit remote add origin https://wilsonibekason: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@github.com/wilsonibekason/stream_messanger.git/
// git push -u origin main
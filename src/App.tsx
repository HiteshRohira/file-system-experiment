import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [error, setError] = useState<string | null>(null);

async function getFile() {
  // Open file picker and destructure the result the first handle
  try {
    // Type assertion to handle the missing type definition
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const picker = (window as any).showOpenFilePicker as () => Promise<[FileSystemFileHandle]>;
    const [fileHandle] = await picker();
    const file = await fileHandle.getFile();
    return file;
  } catch (error) {
    setError(error as string)
    console.error('File system API not supported:', error);
    throw new Error('File system API is not supported in this browser');
  }
}


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={getFile}>
          open file picker
        </button>
        {error && <p>
          {JSON.stringify(error)}
        </p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import {useState} from 'react'

function ParentUseContext() {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>ADD</button>
    </div>
  )
}

export default ParentUseContext
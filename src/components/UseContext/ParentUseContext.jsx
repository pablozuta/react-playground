import { useState, createContext } from 'react'
import Child1 from './Children/Child1'

export const CountContext = createContext(0)

function ParentUseContext() {
  const [counter, setCounter] = useState(0)
  return (
    <CountContext.Provider value={counter}>
      <div  className='parent-drill'>

      <h1>PARENT COMPONENT UseContext</h1>
      <button onClick={() => setCounter(counter + 1)}>ADD</button>
      <h2>counter = {counter}</h2>
      <Child1 />
      </div>
    </CountContext.Provider>
  )
}

export default ParentUseContext
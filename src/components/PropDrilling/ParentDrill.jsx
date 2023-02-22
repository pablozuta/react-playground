import {useState} from 'react'

import Child1 from './Children/Child1'

function ParentUseContext() {
    const [counter, setCounter] = useState(0)
  return (
    <div className='parent-drill'>
        <h1>PARENT COMPONENT PropDrilling</h1>
        <button onClick={() => setCounter(counter + 1)}>ADD</button>
        <h2>counter = {counter}</h2>
      <Child1 counter={counter} />
    </div>
  )
}

export default ParentUseContext
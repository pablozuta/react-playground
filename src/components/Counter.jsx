import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)

    const stateArray = useState(100)
    const contador = stateArray[0]
    const setContador = stateArray[1]
  return (
    <div>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>Counter</button>
        <h3>{contador}</h3>
        <button onClick={() => setContador(contador + 1)}>Counter Array</button>
    </div>
  )
}

export default Counter
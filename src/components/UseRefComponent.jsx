import React from 'react'
import { useRef } from 'react'

function UseRefComponent() {
    const inputElement = useRef()
    
    const focusInput = () => {
        inputElement.current.focus()
    }

  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRefComponent
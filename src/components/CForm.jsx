import { useState } from "react"


function CForm() {
    const [inputValue, setInputValue] = useState("Ask yout question here")
    const isInputError = inputValue.includes('f')
  
  return (
    <div>
        <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
     <button onClick={() => alert(inputValue)}>Alert me đ¨</button>
     <h1>{inputValue}</h1>

     {/* show this message if the letter 'f' is typed */}
     {isInputError && (
        <div>đĽ You are not allowed to use the letter âfâ here.</div>
     )}
    </div>
  )
}

export default CForm
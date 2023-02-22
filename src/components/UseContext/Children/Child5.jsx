import { useContext } from "react"
import { CountContext } from "../ParentUseContext"

function Child5() {
  const counter = useContext(CountContext)
  return (
    <div className='child5'>
      <h2>Child 5 - counter = {counter}</h2>
      </div>
  )
}

export default Child5
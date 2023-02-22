import Child2 from './Child2'
import { useContext } from 'react'
import { CountContext } from '../ParentUseContext'

function Child1() {
  const counter = useContext(CountContext)
  return (
    <div className='child1'>
      <h2>Child 1 - counter = {counter}</h2>
      
        <Child2/>

    </div>
  )
}

export default Child1
import { useContext } from 'react'
import { CountContext } from '../ParentUseContext'
import Child4 from './Child4'

function Child3() {
  const counter = useContext(CountContext)
  return (
    <div className='child3'>
      <h2>Child 3 - counter = {counter}</h2>
      <Child4/></div>
  )
}

export default Child3
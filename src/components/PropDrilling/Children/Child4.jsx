
import Child5 from './Child5'

function Child4({counter}) {
  return (
    <div className='child4'>
      <h2>Child 4</h2>
      <Child5 counter={counter} /> 
      </div>
  )
}

export default Child4
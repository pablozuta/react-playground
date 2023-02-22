
import Child3 from './Child3'

function Child2({counter}) {
  return (
    <div className='child2'>
      <h2>Child 2</h2>
        <Child3 counter={counter} />
    </div>
  )
}

export default Child2
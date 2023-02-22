
import Child4 from './Child4'

function Child3({counter}) {
  return (
    <div className='child3'>
      <h2>Child 3</h2>
      <Child4 counter={counter} /></div>
  )
}

export default Child3
import Child2 from './Child2'

function Child1({counter}) {
  return (
    <div className='child1'>
      <h2>Child 1 - counter = {counter}</h2>
      
        <Child2 counter={counter} />

    </div>
  )
}

export default Child1
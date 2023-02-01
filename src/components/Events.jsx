
function Events() {
    function handleClick() {
        alert("You clicked that button")
    }

    function handleClickEvent(e) {
        console.log("This is the event: ", e)
        console.log("This is the X coordinate: ", e.clientX)
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClickEvent}>Show The Event</button>

         {/* using an arrow function to make an inline interaction */}
        <button onClick={() => alert("You did it")}>Click Here</button>
    </div>
  )
}

export default Events
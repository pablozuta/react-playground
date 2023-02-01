
function UForm() {
    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target['my_input'].value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='my_input' placeholder="Enter Text" />
            <button type='submit'>Enter</button>
        </form>
    </div>
  )
}

export default UForm
import { useEffect, useState } from 'react'
function FetchComments() {
  const [comments, setComments] = useState(null)

  useEffect(() => {
    // data fetching here
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((actualData) => setComments(actualData))
  }, [])

  return (
    <div>
      {comments &&  comments.map(({ id, email, body }) => (
          <div className='card_dos' key={id}>
            <h3>{email}</h3>
            <h4>{body}</h4>
          </div>
        ))}
    </div>
  )
}

export default FetchComments;

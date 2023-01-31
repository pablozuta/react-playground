import { useEffect, useState } from "react";
function Fetch() {
    const [data, setData] = useState(null);
  

   useEffect(() => {
    // data fetching here
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    
    .then((actualData) => setData(actualData));
    
    }, []);
    
  return (
    <div >
        <h1>Data Fetching</h1>
        {data && data.map(({id, title, body}) => (
              <div className="card" key={id}>
                
                <h3>{title}</h3>
                <h4>{body}</h4>
                
              
                </div>
          
        ))}
        
    </div>
  )
}

export default Fetch
import { useEffect, useState } from "react";
function Fetch() {
  // la variable data almacenara los datos obtenidos de la API
  const [data, setData] = useState(null);


  useEffect(() => {
    // This code uses the fetch function to send a GET request to the URL 
    // The then method is used to handle the response once it is received. 
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      // converts the response to JSON format using the json() method
      // which returns a Promise that resolves with the parsed JSON data.
      .then((response) => response.json())
      // takes the parsed JSON data as its argument
      // and sets it to the setData function.
      .then((actualData) => setData(actualData));

  }, []);

  return (
    <div >
      <h1>Data Fetching</h1>
      {data && data.map(({ id, title, body }) => (
        <div className="card" key={id}>

          <h3>{title}</h3>
          <h4>{body}</h4>


        </div>

      ))}

    </div>
  )
}

export default Fetch
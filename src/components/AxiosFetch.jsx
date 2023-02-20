import { useEffect, useState } from "react";
// The axios library is an alternative to 
// the fetch function for making HTTP requests. 
import axios from 'axios'

function AxiosFetch() {
  // la variable data almacenara los datos obtenidos de la API
  const [data, setData] = useState(null);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => {
      const actualData = response.data;
      setData(actualData);
    })
    // The catch method is used to handle any errors that may occur during the request.
    .catch((error) => {
      console.error(error);
    });

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

export default AxiosFetch
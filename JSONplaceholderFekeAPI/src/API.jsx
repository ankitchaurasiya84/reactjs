import axios from "axios";
import React, { useEffect, useState } from "react";

const API = () => {
  const [ww, setWW] = useState([]);


// // calling fetch
  // const fet = async () => {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/tod");
  //   const data = await response.json();
  // if (!response.ok) {
  //     throw new Error("Invalid response: " + response.status);
  //   }
  //   setWW(data);
  //   } catch (e) {
  //     setError("Hiii")
  //   }
    
  // };
// calling axios
  const fet = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  
    setWW(response.data);
    } catch (e) {
      setError("Hiii")
    }
    
  };

  const [error,setError]=useState("")



  useEffect(() => {
   
       fet();
   

      
    }
   
  , []);

  console.log(ww);
  return (
    <div>
      API
      {error.trim()===""&&( <table border={1} width="100%">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {ww.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>)}
      {error.trim()!==""&&<p>{error}</p>}
     
    </div>
  );
};

export default API;

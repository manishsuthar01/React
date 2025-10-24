import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [Data, setData] = useState([]);

  const getData = async () => {
    try{
      const response = await axios.get("https://picsum.photos/v2/list");
      setData(response.data);
    }
    catch(error){
      console.error("Error fetching data:", error);
      
    }
 
    // .then(response => {
    //   console.log("Data fetched:", response.data);
    // })
    // .catch(error => {
    //   console.error("Error fetching data:", error);
    // } )
   
  };
   useEffect(()=>{
      getData();
    }, []);    
  return (
    <div className="App">

      {/* <button onClick={getData}>Get Data</button> */}
      <h2>Data from API:</h2>
      <div className="Data">
        {Data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h3>{item.author}</h3>
              <img src={item.download_url} alt={item.author} />
            </div>
          );                                          
        })}
      </div>
    </div>
  );
}

export default App;

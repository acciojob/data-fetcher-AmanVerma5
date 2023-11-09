
import React, { useEffect,useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {
  const [loading,setLoading]=useState(true);
  const [display,setDisplay]=useState(null);


  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(function(response){
      console.log(response)
      setDisplay(response);
      setLoading(false); 
    }).catch((e)=>{console.log(e)
      setLoading(false);
    })
    
    setTimeout(()=>console.log('Dispaly>>>>',display),5000) 
  },[])

  return (
    <div>
        {
          loading?<div>Loading...</div>:<div>
            <h1>Data fetched from API</h1>
            <pre>{JSON.stringify(display.data)}</pre>
          </div>
        }
    </div>
  )
}

export default App

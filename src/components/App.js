
import React, { useEffect,useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {
  const [loading,setLoading]=useState(true);
  const [data,setData]=useState(null);


  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(function(response){
      console.log(response)
      setData(response);
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
            <pre>{data.data.products.map((element)=>{
              return(
                <div>
                  <p>"id":{element.id}</p>
                  <p>"title":{element.title}</p>
                  <p>"description":{element.description}</p>
                  <p>"price":{element.price}</p>
                  <p>"discountPercentage":{element.discountPercentage}</p>
                  <p>"rating":{element.rating}</p>
                  <p>"stock":{element.stock}</p>
                  <p>"brand":{element.brand}</p>
                  <p>"category":{element.category}</p>
                  <p>"thumbnail":{element.thumbnail}</p>
                  <p>"images":{element.images}</p>
                </div>
              )
            })}</pre>
          </div>
        }
    </div>
  )
}

export default App

import React,{useState,useEffect}from 'react' 
import './App.css';
import axios from 'axios'

function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/vip').then((res) => setData( res.data))
    
}, [])
  return (
    <div>
      <ul>
      {
        data.map((vip,index)=>
        <li key={index}>
          <p>{vip.vname} </p> 
          <p>{vip.vpassword} </p> 
          <p>{vip.vflags} </p> 
          <p>{ new Date(vip.enddate*1000).toDateString()} </p> 
         </li>
      
       
       
        )
      }
      </ul>
        
    </div>
  );
}

export default App;

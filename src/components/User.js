import React from 'react'
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import{ useNavigate} from 'react-router-dom';





function User(){ 
const[ user,setUser]=useState([]);
const navigate = useNavigate();
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=> setUser(res.data))
.catch(error=>console.log(error))

})

return (
  

  <div className="">
    
    <div className='container'>

    {user.map(item=>(
      
      
      <div className='user' >
       <div className='top-card'>
       <img src='logo192.png'/>
       </div>
       <h2>name:</h2>
       <h4 className='label'>{item.name}</h4>
       <h2>username:</h2>
       <h4 className='label'>{item.username}</h4>
       <button onClick={()=>navigate(`/post/${item.id}`)}>see post</button>
      </div>
      
      

    ))
  }
  </div>

    
        
  </div>
);
}
  

export default User;
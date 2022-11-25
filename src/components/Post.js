import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';
import{ useNavigate} from 'react-router-dom';

function Post() {
    const[post,setPost]=useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res=> setPost(res.data))
        .catch(error=>console.log(error))
        
        },[]);




  return (
    <div>
         <div className='container' >
          {post.map(item=>(
          <div className='post'>
          <h2 className='title-post'>{item.title}</h2>
          <p className='text-post'>{item.body}</p>
          <button onClick={()=>navigate(`/comment/${item.id}`)}>read comment</button>
          </div> 
          ))
          
        }
</div>
    </div>
  )
}

export default Post;

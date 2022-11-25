import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';

function Comment() {
    const[comments,setComments]=useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=> setComments(res.data))
        .catch(error=>console.log(error))
        
        },[]);




  return (
    <div>
         <div className='container-comment' >
          {comments.map(item=>(
          <div className='comment'>
          <p>{item.body}</p>
          
          </div> 
          ))
          
        }
</div>
    </div>
  )
}

export default Comment;
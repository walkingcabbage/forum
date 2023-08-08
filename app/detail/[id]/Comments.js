'use client'

import { useEffect, useState } from "react"



export default  function Comments({postId}) {
  const [comments, setComments]=useState([]);
  const [comment,setComment] = useState();

  useEffect(()=>{
    (async ()=>{
      const data = await(await fetch('/api/getComment',{method:'POST',body:postId})).json();
      setComments(data)
    })()
  },[])

  return (
    <div>
        <h4>댓글 목록</h4>
        <ul className="comment-list">
          {comments.map((item,index)=>{
            console.log(item);
            return (
              <li key={index}>
                <span>{item.email}님의 댓글 : </span>
                <span>{item.comment}</span>
              </li>
            )
          })}
        </ul>
        <input value={comment} onChange={(e)=>{setComment(e.target.value)}} type="text" />
        <button onClick={ async ()=>{
          await fetch('/api/writeComment',{method:'POST',body:JSON.stringify({comment : comment,parent:postId})})
          const data = await(await fetch('/api/getComment',{method:'POST',body:postId})).json();
          setComments(data)
          setComment('')
        }}>전송</button> 

      </div>
  )
}
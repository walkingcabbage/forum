'use client'

import Link from "next/link"

export default function ListItem({result,session}) {
  return (<div>
    {result.map((item,index)=>{
      console.log(item.email);
      console.log(session);
      return(
         
          <div className="list-item" key={index}>
            <Link href={'/detail/'+item._id}><h4>{item.title}</h4></Link>
            {item.email == session ?<>
              <Link href={'/edit/'+item._id}>✏</Link>
            <span onClick={(e)=>{
              // fetch('/api/deleteDisc',{
              //   method:'DELETE',
              //   body: JSON.stringify(item._id)
              // }).then((r)=>{
              //   return r.json()
              // }).then(()=>{
              //   e.target.parentElement.style.opacity=0
              //   setTimeout(()=>{
              //     e.target.parentElement.style.display = 'none'
              //   },1000)
              // })
              ///////////////////////////////////////
              // fetch('/api/deleteDisc?_id='+item._id)
              ////////////////////////////////////////
              fetch(`/api/delete/${item._id}`)
            }}>🗑</span>
            </>:null}
            
      <p>{item.content}</p>
    </div>
      )
    })}

  </div>)
}
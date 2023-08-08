import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne(new ObjectId(props.params.id))
  return (
    <>
      <h4>글 수정</h4>
  <form action="/api/edit" method="POST"> 
  <input name="_id" type="hidden" value={result._id.toString()} /><br/>
  <input name="title" type="text" placeholder="제목" defaultValue={result.title} /><br/>
    <textarea name="content" id="" cols="30" rows="10" placeholder="내용"defaultValue={result.content}></textarea><br/>
    <button type="submit">제출</button>
  </form>
    </>
  )
}
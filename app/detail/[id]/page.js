import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comments from "./Comments";

export default async function IdList(props) {
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id:new ObjectId(props.params.id)})
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comments postId={new ObjectId(props.params.id)}/>
    </div>
  )
}

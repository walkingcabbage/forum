import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req,res) {
  let session = await getServerSession(req,res,authOptions);

  let data = JSON.parse(req.body)
  if(session){
    data.email = session.user.email
  }
  
  console.log(data);
  if(req.method =='POST'){
    if(req.body.comment==''){
      return res.status(500).json('내용을 입력해주세요.')
    }
    try {
      const db = (await connectDB).db('forum')
      db.collection('comment').insertOne(data);
      return res.status(200).json('ok')
    } catch (error) {
      return res.status(500).json('error')
    }

  }

}
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req,res) {
  let session = await getServerSession(req,res,authOptions);

  if(session){
    req.body.email = session.user.email
  }
  if(req.method =='POST'){
    if(req.body.title=='' || req.body.content==''){
      return res.status(500).json('내용을 입력해주세요.')
    }
    try {
      const db = (await connectDB).db('forum')
      db.collection('post').insertOne(req.body);
      return res.status(200).redirect('/list')
    } catch (error) {
      
    }

  }

}
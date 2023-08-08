import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req,res) {
  if(req.method =='POST'){
    if(req.body.title=='' || req.body.content==''){
      return res.status(500).json('내용을 입력해주세요.')
    }
    try {
      const db = (await connectDB).db('forum')
      db.collection('post').updateOne({ _id:new ObjectId(req.body._id) }, {$set:{title: req.body.title,content:req.body.content}});
      return res.status(200).redirect('../list')
    } catch (error) {
      
    }

  }
  return res.status(200).json('ok')
}
import { connectDB } from "@/util/database";

export default async function handler(req,res) {
  const db = (await connectDB).db('forum')
  db.collection('post').insertOne({ 
    title : req.body.title,
    content : req.body.content
   })

  return res.status(200).redirect('/list').json('good')
}
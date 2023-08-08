import { connectDB } from "@/util/database";

export default async function handler(req,res) {
  if(req.method =='POST'){
    if(req.body.userId ==''){
      return res.status(500).json('id를 입력하세요.')
    }
    if(req.body.userPw ==''){
      return res.status(500).json('pw를 입력하세요.')
    }
    if(req.body.userPw !=req.body.userPwCheck){
      return res.status(500).json('pw와 pwCheck가 같은지 확인하세요.')
    }
    if(req.body.userNickName ==''){
      return res.status(500).json('nickName을 입력하세요.')
    }
    try {
      const db = (await connectDB).db('forum')
      db.collection('users').insertOne({
        userId:req.body.userId,
        userPw:req.body.userPw,
        userNickName:req.body.userNickName
      });
      return res.status(200).json(`${{
        userId:req.body.userId,
        userPw:req.body.userPw,
        userNickName:req.body.userNickName
      }}데이터베이스에 추가 완료`)
    } catch (error) {
      
    }

  }

}
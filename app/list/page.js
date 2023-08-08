import { connectDB } from "@/util/database"
import Link from "next/link";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const dynamic = 'force-dynamic';

export default async function List() {
  const session = await getServerSession(authOptions);
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray();
  console.log(session);
  return (
    <div className="list-bg">
      <ListItem result={result} session={session?.user.email}  />
      <Link href='/write'>글쓰기</Link>
    </div>
  )
}

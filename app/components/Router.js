'use client'

import { useRouter } from "next/navigation"

export default function Router() {
  const router = useRouter();
  return (
    <button onClick={router.push('/detail/')} ></button>
  )
}

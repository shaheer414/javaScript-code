import Link from "next/link"

export async function generateStaticParams() {
  const response= await fetch('https://jsonplaceholder.typicode.com/todos')
  const data= await response.json()
  return data.map((item)=>({
    todoId: item.id.toString(),
  }))
}

export default function () {
  return (
    <>
    <div className="text-3xl font-bold underline text-center">
      My website
    </div>
</>
  )
}
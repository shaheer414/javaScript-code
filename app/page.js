import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>My Website</h1>
    <br />
    <Link href="/about">About</Link>
    <br />
    <Link href="/services">Services</Link>
    <br />
    <Link href="/blogs">Blogs</Link>
    </>
  )
}

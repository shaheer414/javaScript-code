"use client"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="text-3xl font-bold underline text-center">
        My website
      </div>

      <Image
        src="/Pic.webp"
        width={600}
        height={600}
        alt="image"
      />
    </>
  )
}

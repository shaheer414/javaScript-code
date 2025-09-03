import Link from 'next/link'
import React from 'react'

export const metadata = {
    title : 'About'
}

const page = () => {
    return (
        <>
        <div>
        i am about page
    </div>
    <Link href="/services">Services</Link>
    <Link href="/">Home</Link>
    </>
    )
}

export default page
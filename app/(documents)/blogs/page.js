import Link from 'next/link'
import React from 'react'

export const metadata = {
    title : 'Blogs'
}

const blogpage = () => {
    return (
    <>
        <div>
            I am Blog Page.
            <br />
            <Link href="/blogs/blog1">Blog 1</Link>
        </div>
    </>)
}

export default blogpage

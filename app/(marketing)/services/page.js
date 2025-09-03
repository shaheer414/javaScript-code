import React from 'react'
import Link from 'next/link'

export const metadata = {
    title : 'Services'
}


const page = () => {
    return (
    <>
        <h1>
            i am Service page
        </h1>
        <Link href="./services/app-dev">App Development</Link><br />
        <Link href="./services/web-dev">Web Development</Link><br />
        <Link href="./services/seo-dev">SEO Service</Link>
    </>
    )
}

export default page
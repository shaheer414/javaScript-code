import Link from 'next/link'
import React from 'react'
import Views from '../components/Views'
import Likes from '../components/Likes'
import Comments from '../components/Comments'
import { Suspense } from 'react'

const blogpage = () => {
    return (
        <>
        <div>
            <h1 className='text-3xl justify-center flex font-bold '>Blogs are here</h1>
            <Link href="/blog1"><b>1. Blog 1</b></Link>
            <br/>
            <Suspense fallback={<h1>Loading Views...</h1>}>
            <Views/>
            </Suspense>
            <br/>
            <Likes/>
            <br/>
            <Comments/>
        </div>
        </>
        )
}

export default blogpage

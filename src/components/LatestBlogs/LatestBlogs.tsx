import { Blog } from '@/types'
import React from 'react'
import LatestBlogCard from '../ui/LatestBlogCard'

const LatestBlogs = ({blogs}:{blogs:Blog[]}) => {
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className='text-4xl text-center my-5'>Latest Blogs from <span className='text-accent'>blogiz</span></h1>
        <p className="text-center text-xl text-gray-400 w-2/4 mx-auto">
            <i>
                Dive into the facinating world of quantum computing with our latest blogs. Explore cutting-edge research, practical applications, and the future of technology through expert insights and in-depth articles.
            </i>
        </p>
        <div className='grid grid-cols-2 gap-4 my-5'>{blogs.slice(0,2).map(blog=><LatestBlogCard blog={blog} key={blog.id} />)}</div>
        <div className='grid grid-cols-3 gap-4 my-5'>{blogs.slice(2,blogs.length).map(blog=><LatestBlogCard blog={blog} key={blog.id} />)}</div>
    </div>
  )
}

export default LatestBlogs
"use client"
import BlogCard from '@/components/ui/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/baseApi';
import { Blog } from '@/types';
import React from 'react'

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", { cache: 'no-store' });
  // const blogs = await res.json();
  const {data:blogs,error,isError,isLoading}= useGetBlogsQuery({})
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className='text-4xl text-center my-5'>Latest Blogs from <span className='text-accent'>blogiz</span></h1>
        <p className="text-center text-xl text-gray-400 w-2/4 mx-auto">
            <i>
                Dive into the facinating world of quantum computing with our latest blogs. Explore cutting-edge research, practical applications, and the future of technology through expert insights and in-depth articles.
            </i>
        </p>
        <div className='grid grid-cols-3 gap-4 my-5'>{blogs?.map((blog:Blog)=><BlogCard key={blogs.id} blog={blog} /> )}</div>
    </div>
  )
}

export default BlogsPage
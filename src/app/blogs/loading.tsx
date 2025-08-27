import LoadingCard from '@/components/ui/LoadingCard';
import { Blog } from '@/types';
import React from 'react'

const BlogLoadingPage =async () => {
    const res = await fetch("http://localhost:5000/blogs", { cache: 'no-store' });
  const blogs = await res.json();
  return (
    <div className='grid grid-cols-3 gap-4 my-5'>{
        blogs?.map((blog:Blog) =><LoadingCard key={blog.id} />)
    }</div>
  )
}

export default BlogLoadingPage
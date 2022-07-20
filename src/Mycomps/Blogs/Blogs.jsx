import React from 'react'
import { Navbar } from '../Navbar'
import { BlogCard } from './BlogCard'

export const Blogs = () => {
    const blogs=[
        {
            video:'./Images/Blog/blog1.mp4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper viverra tempor, enim vulputate nunc interdum sit diam ultrices. Sed erat volutpat curabitur ornare in facilisi ornare'
        },
        {
            video:'./Images/Blog/blog1.mp4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper viverra tempor, enim vulputate nunc interdum sit diam ultrices. Sed erat volutpat curabitur ornare in facilisi ornare'
        },
        {
            video:'./Images/Blog/blog1.mp4',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper viverra tempor, enim vulputate nunc interdum sit diam ultrices. Sed erat volutpat curabitur ornare in facilisi ornare'
        },
    ]
    return (
        <div className='pt-6 bg-cover bg-center text-white bg-no-repeat flex flex-col justify-start items-end relative' style={{ backgroundImage: "url(./Images/BackgroundSpace.jpeg)" }}>
            <Navbar />
            <div className=''>
                <img src="./Images/Blog/blog.png" className='absolute h-[500px] w-[320px] left-2 top-[300px]' alt="" />
            </div>
            <div className='flex flex-col justify-end items-end w-[70%] space-y-5 mx-20 py-20'>
                
                {
                    blogs.map((blog,index)=>{
                       return(
                           <BlogCard key={index} video={blog.video} text={blog.text} />
                       ) 
                        
                    })
                }
                
            </div>
        </div>
    )
}

import React from 'react'
import { Navbar } from '../Navbar'
import { BlogCard } from './BlogCard'

export const Blogs = () => {
    const blogs = [
        {
            video: './Images/Blog/blog1.mp4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper viverra tempor, enim vulputate nunc interdum sit diam ultrices. Sed erat volutpat curabitur ornare in facilisi ornare'
        },
        {
            video: './Images/Blog/blog1.mp4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper viverra tempor, enim vulputate nunc interdum sit diam ultrices. Sed erat volutpat curabitur ornare in facilisi ornare'
        },
        {
            video: './Images/Blog/blog1.mp4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper viverra tempor, enim vulputate nunc interdum sit diam ultrices. Sed erat volutpat curabitur ornare in facilisi ornare'
        },
    ]
    return (
        <div className='sm:pt-6 bg-cover bg-center text-white bg-no-repeat flex flex-col justify-start items-end relative' style={{ backgroundImage: "url(./Images/BackgroundSpace.jpeg)" }}>
            <div className='w-full'><Navbar /></div>
            <div className=''>
                <img src="./Images/Blog/blog.png" className='absolute h-[400px] w-[200px] lg:h-[500px] hidden lg:block lg:w-[320px] left-2 top-[300px]' alt="" />
            </div>
            <div className='flex flex-col justify-center items-center  md:justify-end  md:items-end w-full md:w-[80%] lg:w-[65%] xl:w-[70%] space-y-5 ml-2 md:ml-20 md:mr-10 py-20'>

                {/* {
                    blogs.map((blog,index)=>{
                       return(
                           <BlogCard key={index} video={blog.video} text={blog.text} />
                       ) 
                    })
                } */}
                {/* Blog Card */}
                <div>
                    <div className='flex flex-col md:flex-row bg-black bg-opacity-50 px-4 py-6 space-y-2 md:space-y-0  md:space-x-3  space-x-0 rounded-3xl '>
                        <div>
                            <img className=' h-[280px] w-[300px] rounded-xl' src={"./Images/Blog/yash.webp"} />
                        </div>
                        <div className='text-lg w-[300px] sm:w-[500px] lg:w-[660px] flex flex-col justify-end items-end space-y-2'>
                            <div>
                                <span className='font-bold tracking-normal'>Yash had two words for Technovate- Adventurous and exciting.</span><br></br> He also said a third word, hectic, which would be true if not for the enjoyment of planning and organising of the Technovate events, which to him was the best aspect .
                                Through his experiences over the years he says, “Go out of your way to contribute as much as possible for the fest and donot limit yourselves to the role , Go beyond!”
                            </div>
                            <div className='text-base font-semibold text-right'>
                                Yash Khare(2017-2021)<br></br>
                                Outlook and Design (2018) <br></br>
                                Student Coordinator (2019-2020)
                            </div>
                        </div>
                    </div>
                </div>


                {/* End Blog Card */}
                {/* Blog Card */}
                <div>
                    <div className='flex flex-col md:flex-row bg-black bg-opacity-50 px-4 py-6  space-y-2 md:space-y-0  md:space-x-3  space-x-0 rounded-3xl'>
                        <div>
                            <img className='h-[280px] w-[300px] rounded-xl' src={"./Images/Blog/nitin.jpg"} />
                        </div>
                        <div className='text-lg w-[300px] sm:w-[500px] lg:w-[660px] flex flex-col justify-end items-end space-y-2'>
                            <div>
                                <span className='font-bold tracking-normal'>
                                    “Be confident and overconfident cause you are no longer a student, you are part of technovate.”
                                </span><br></br>
                                Technovate 2020, had one of the best line ups but also faced the worst of times due to the pandemic which ended in lockdown and cancellation of the fest just after the ‘7 days to go’ poster was revealed. Nitin was at the center, he was the head coordinator and a first hand witness of the hardships that the team went through. For him, it took months to recover.They broke barriers and achieved several milestones especially when it came to sponsorship and the celebrity night. His key advice for any student body would be to have backups cause one can never predict what could go down on the day of event.
                            </div>
                            <div className='text-base font-semibold text-right'>
                                Nitin Chandrakar (2017-2021)<br></br>
                                Media marketing  (2018) <br></br>
                                Student coordinator (2019-2020)
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Card */}

            </div>
        </div>
    )
}

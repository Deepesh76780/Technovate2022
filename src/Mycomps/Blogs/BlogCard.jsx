import React from 'react'

export const BlogCard = ({video,text,name,position}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-black bg-opacity-50 px-4 py-6 gap-x-4 gap-y-3 md:gap-y-0 place-content-center items-center'>
            <div>
                {/* <video className=' md:h-[280px] md:w-[500px]' controls poster=
                    "./Images/Blog/logo.png" >

                    <source src={video} type="video/mp4" />

                </video> */}
                <img className=' md:h-[280px] md:w-[300px]' src = {"./Images/Blog/yash.webp"} />

            </div>
            <div className='flex flex-col text-xs sm:text-base md:text-lg xl:text-xl'>
                <div className='tracking-wider'>
                Yash had two words for Technovate- Adventurous and exciting. He also said a third word, hectic, which would be true if not for the enjoyment of planning and organising of the Technovate events, which to him was the best aspect . Through his experiences over the years he says, “Go out of your way to contribute as much as possible for the fest and donot limit yourselves to the role , Go beyond!”
                </div>
                <div className='text-right'>
                    {name}
                </div>
                <div>
                    {position}
                </div>

            </div>
        </div>
    )
}

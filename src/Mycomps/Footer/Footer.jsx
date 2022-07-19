import React from 'react'
import { Link } from 'react-router-dom'
import { FollowUs } from './FollowUs'
//  replace a with Link later
export const Footer = () => {
    const socialMedia = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/'
        },
        {
            name:'LinkedIn',
            url: 'https://www.linkedin.com/'
        }

    ]
    const siteMap1 = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Register',
            url: '/register'
        },
        {
            name: 'Event',
            url: '/event'
        },
        {
            name:'Schedule',
            url: '/schedule'
        },
        {
            name: 'Sponsors',
            url: '/sponsors'
        }
    ]
    const siteMap2 = [
        {
            name: 'Team',
            url: '/team'
        },
        {
            name: 'FAQs',
            url: '/faq'
        },
        {
            name: 'Blog',
            url: '/blog'
        }

    ]
    return (
        <div className='bg-black text-white pt-6 pb-2 '>
            <div className='grid grid-cols-4 place-content-center px-10'>
                <div className='followus flex flex-col space-y-5 col-span-1'>
                    <div className='uppercase text-4xl spaced'>Follow us</div>
                    <div className='flex flex-col spartan space-y-3 text-lg mt-2'>
                        {
                            socialMedia.map((item,index) => {
                                return (<FollowUs name={item.name} url={item.url} key={index} />)
                            })
                        }
                    </div>
                    <div className='text-sm'>
                    © 2022 Technovate - All Rights Reserved.
                    </div>
                </div>
                {/* Placeholder Div for Design */}
                <div></div>
                
                <div className='sitemap col-span-2 flex flex-col space-y-5 '>
                    <div className=''>
                        <div className='uppercase text-4xl spaced'>Sitemap</div>
                    </div>
                    <div className='grid grid-cols-2 spartan space-x-10 mt-2'>
                        <div className='flex flex-col space-y-2'>
                            {
                                siteMap1.map((item,index) => {
                                    return (<div className='text-lg text-white cursor-pointer' key={index}><a to="/">{item.name}</a></div>)
                                })
                            }
                        </div>
                        <div className='flex flex-col space-y-2'>
                            {
                                siteMap2.map((item,index) => {
                                    return (<div className='text-lg text-white cursor-pointer' key={index}><a to="/">{item.name}</a></div>)
                                })
                            }
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

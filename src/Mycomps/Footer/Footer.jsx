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
            url: '/'
        },
        {
            name: 'Event',
            url: '/event'
        },
        {
            name:'Schedule',
            url: '/'
        },
        {
            name: 'Sponsors',
            url: '/'
        }
    ]
    const siteMap2 = [
        {
            name: 'Team',
            url: '/team'
        },
        {
            name: 'FAQs',
            url: '/'
        },
        {
            name: 'Blog',
            url: '/blog'
        }

    ]
    return (
        <div className='bg-black text-white pt-4 pb-2'>
            <div className='grid sm:grid-cols-3 md:grid-cols-4 place-content-around md:place-content-center px-4 md:px-10 gap-y-2 sm:gap-y-0'>
                <div className='followus flex flex-col space-y-3 col-span-1'>
                    <div className='uppercase text-2xl spaced'>Follow us</div>
                    <div className='flex flex-col spartan space-y-2 text-lg mt-2'>
                        {
                            socialMedia.map((item,index) => {
                                return (<FollowUs name={item.name} url={item.url} key={index} />)
                            })
                        }
                    </div>
                    <div className='text-xs hidden sm:block md:whitespace-pre'>
                    © 2022 Technovate - All Rights Reserved.
                    </div>
                </div>
                {/* Placeholder Div for Design */}
                <div className='hidden md:block'></div>
                
                <div className='sitemap col-span-2 flex flex-col space-y-3 '>
                    <div className=''>
                        <div className='uppercase text-2xl spaced'>Sitemap</div>
                    </div>
                    <div className='grid grid-cols-2 spartan md:space-x-10 mt-2'>
                        <div className='flex flex-col space-y-2'>
                            {
                                siteMap1.map((item,index) => {
                                    return (<div className='text-base text-white cursor-pointer' key={index}><Link to={item.url}>{item.name}</Link></div>)
                                })
                            }
                            <div className='text-xs whitespace-pre sm:hidden'>
                            © 2022 Technovate - All Rights Reserved.
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            {
                                siteMap2.map((item,index) => {
                                    return (<div className='text-base text-white cursor-pointer' key={index}><Link to={item.url}>{item.name}</Link></div>)
                                })
                            }
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

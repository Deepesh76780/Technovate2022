import React from 'react'

export const FollowUs = ({name,url}) => {
    return (
        <div className='grid grid-cols-2 justify-start items-center '>
            <a href={url}>
                {name}
            </a>
            <div className='-ml-8'>
                <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5326 4.57377C24.7278 4.37851 24.7278 4.06192 24.5326 3.86666L21.3506 0.684681C21.1553 0.489419 20.8387 0.489419 20.6435 0.684681C20.4482 0.879943 20.4482 1.19653 20.6435 1.39179L23.4719 4.22021L20.6435 7.04864C20.4482 7.2439 20.4482 7.56049 20.6435 7.75575C20.8387 7.95101 21.1553 7.95101 21.3506 7.75575L24.5326 4.57377ZM0.420776 4.72021H24.179V3.72021H0.420776V4.72021Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

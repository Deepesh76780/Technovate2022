import React from 'react'
import { Navbar } from '../Navbar'
import { TeamCard } from './TeamCard'

export const Team = () => {
    const team = [
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in'
        },
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in'
        },
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in'
        },
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in'
        },
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in'
        },
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in'
        },
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in',
            linkedin:'https://www.linkedin.com/in/himanshu-yadav-b9a8b817b/'
        },
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in'
        },
    ]
  return (
    <div className='pt-6 bg-cover bg-center text-white bg-no-repeat flex flex-col justify-start items-center' style={{backgroundImage:"url(./Images/BackgroundSpace.jpeg)"}}>
        <Navbar />
        <div className='pt-10 flex flex-col justify-center items-center'>
            <div className='spaced uppercase text-4xl tracking-wider'>
                Team
            </div>
            <div className='grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-10 gap-x-4 md:gap-x-5 xl:gap-x-12 gap-y-6'>
                {
                    team.map((item,index) => {
                        return (<TeamCard name={item.name} role={item.role} phone={item.phone} email={item.email} key={index} />)
                    })
                }
                
            </div>

        </div>
    </div>
  )
}

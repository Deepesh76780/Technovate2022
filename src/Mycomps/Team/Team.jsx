import React from 'react'
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
            email: 'rony20100@iiitnr.edu.in'
        },
        {
            name: 'Himanshu Yadav',
            role: 'Lead',
            phone: '8921474833',
            email: 'rony20100@iiitnr.edu.in'
        },
    ]
  return (
    <div className='bg-cover bg-center text-white bg-no-repeat flex flex-col justify-start items-center' style={{backgroundImage:"url(./Images/BackgroundSpace.jpeg)"}}>
        <div className='py-20 flex flex-col justify-center items-center'>
            <div className='spaced uppercase text-4xl tracking-wider'>
                Team
            </div>
            <div className='grid grid-cols-4 mt-10 gap-x-12 gap-y-6'>
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

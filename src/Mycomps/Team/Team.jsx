import React from 'react'
import { Navbar } from '../Navbar'
import { TeamCard } from './TeamCard'

export const Team = () => {
    
    const team = [
      {
        "name": "Himanshu Yadav",
        "role": "Overall Coordinator",
        "phone": "7587721107",
        "email": "himanshu20102@iiitnr.edu.in",
        "linkedin": "https://www.linkedin.com/in/himanshu-yadav-b86134206",
        "photo": "./Images/Team/TeamPhotos/Himanshu.jpg",
        "css":"bg-cover"
      },
    {
        "name": "Sristhi Sahoo ",
        "role": "Overall Coordinator",
        "phone": "7760686990",
        "email": "sristhi20102@iiitnr.edu.in",
        "linkedin": "https://www.linkedin.com/in/sristhi-sahoo-7910641ba/",
        "photo": "./Images/Team/TeamPhotos/Srishti.jpg",
        "css":"bg-cover"
      },
        {
            "name": "Ketan Agrawal",
            "role": "Overall Coordinator",
            "phone": "9893252074",
            "email": "ketan19102@iiitnr.edu.in",
            "linkedin": "www.linkedin.com/in/ketanagrawal7",
            "photo": "./Images/Team/TeamPhotos/Ketan.jpg",
            "css":"bg-cover"
          },
          {
            "name": "Ayush Tirkey",
            "role": "Overall Coordinator",
            "phone": "7389666449",
            "email": "ayush19102@iiitnr.edu.in",
            "linkedin": "https://www.linkedin.com/in/ayush-tirkey-b41b5218b",
            "photo": "./Images/Team/TeamPhotos/Ayush.jpeg",
            "css":"bg-cover"
          },

             
              {
                "name": "Shristy Kashyap",
                "role": "Hospitality and Logistics Team Lead",
                "phone": "8269252088",
                "email": "shristy20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/shristy-kashyap-ab0908180/",
                "photo": "./Images/Team/TeamPhotos/Shristy.jpeg",
                "css":"bg-cover"
              },
            {
              "name": "Shreyan Manher",
              "role": "Hospitality and Logistics Team Lead",
              "phone": "9131253270",
              "email": "shreyan20100@iiitnr.edu.in",
              "linkedin": "https://www.linkedin.com/in/shreyan-manher-807a0a218/",
              "photo": "./Images/Team/TeamPhotos/Shreyan.jpg",
              "css":"bg-cover"
            },
            {
                "name": "Meetiksha Sorgile",
                "role": "Outlook Head Lead",
                "phone": "9098281522",
                "email": "meetiksha20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/meetiksha-sorgile-41676922b/",
                "photo": "./Images/Team/TeamPhotos/Meetiksha.jfif",
                "css":"bg-cover"
              },
              {
                "name": "Shubham Raj Sahu",
                "role": "Designing Team Lead",
                "phone": "9399088769",
                "email": "shubhamr20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/mwlite/in/shubham-raj-sahu-7474b1194",
                "photo": "./Images/Team/TeamPhotos/Shubham1.jpg",
                "css":"bg-cover"
              },
              {
                "name": "Lekhana Mysore Adiseshanaik ",
                "role": "Content team head ",
                "phone": "8688776956",
                "email": "mysore20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/lekhana-mysore-adiseshanaik-6b36b822a/",
                "photo": "./Images/Team/TeamPhotos/Lekhana.jpg",
                "css":"bg-cover"
              },
              {
                "name": "Amogh Dubey",
                "role": "Marketing, Media & PR Team Lead",
                "phone": "9455132136",
                "email": "amogh20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/amoghdubey",
                "photo": "./Images/Team/TeamPhotos/Amogh.jpg",
                "css":"bg-cover"
              },
              {
                "name": "Aayush Dewangan ",
                "role": "Marketing, Media & PR Team Lead",
                "phone": "9340758510",
                "email": "aayush20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/aayush-dewangan-57ab85203",
                "photo": "./Images/Team/TeamPhotos/Aayush.jpeg",
                "css":"bg-cover"
              },
              {
                "name": "Kunal Mahajan",
                "role": "Marketing, Media & PR Team Lead",
                "phone": "8770894177",
                "email": "kunal20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/kunal-mahajan-731aa8200",
                "photo": "./Images/Team/TeamPhotos/Kunal.jpg",
                "css":"bg-cover"
              },
              {
                "name": "Aman Singh",
                "role": "Designing Team Lead",
                "phone": "9118705947",
                "email": "aman20100@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/aman-singh-76aa50220",
                "photo": "./Images/Team/TeamPhotos/Aman.png",
                "css":"bg-cover"
              },
              {
                "name": "Anand Bachker",
                "role": "Website Team Lead",
                "phone": "7005753529",
                "email": "anand20100@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/anand-bachker-216119238/",
                "photo": "./Images/Team/TeamPhotos/Anand.jpeg",
                "css":"bg-cover"
              },
              {
                "name": "Rony Joseph",
                "role": "Website Team Lead",
                "phone": "8921474833",
                "email": "rony20100@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/rony-joseph-0619bb205/",
                "photo":"./Images/Team/TeamPhotos/Rony.jpg"
              },
              {
                "name": "Aaditya Kumar",
                "role": "Cultural Team Lead",
                "phone": "6268164699",
                "email": "aaditya20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/aaditya-kumar-560952217",
                "photo": "./Images/Team/TeamPhotos/Aaditya.jpeg",
                "css":"bg-cover"
              },
              {
                "name": "Nishoak Kosaraju",
                "role": "Technical Team Lead",
                "phone": "6309106555",
                "email": "nishoak20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/nishoak/",
                "photo": "./Images/Team/TeamPhotos/Nishoak.jpeg",
                "css":"bg-cover"
              },
              {
                "name": "Yathin Prakash Kethepalli ",
                "role": "Technical Team Lead",
                "phone": "7207842318",
                "email": "yathin20100@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/yathin-prakash-kethepalli",
                "photo": "./Images/Team/TeamPhotos/Yathin.jpg",
                "css":"bg-cover"
              },
            {
              "name": "Pratyush Parashar",
              "role": "Informal Events Team Lead",
              "phone": "7033123105",
              "email": "pratyush20102@iiitnr.edu.in",
              "linkedin": "https://www.linkedin.com/in/pratyush-parashar-036831201/",
              "photo": "./Images/Team/TeamPhotos/Pratyush.png",
              "css":"bg-cover"
            },
            
            
            {
                "name": "Saumya Singh ",
                "role": "Informal Events Team Lead",
                "phone": "9696230180",
                "email": "saumya20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/saumya-singh-5237b6203/",
                "photo": "./Images/Team/TeamPhotos/Saumya.jpg",
                "css":"bg-cover"
              },
            
            {
              "name": "Aryan Kaul",
              "role": "Partnership Team Lead",
              "phone": "8826557777",
              "email": "aryan20102@iiitnr.edu.in",
              "linkedin": " https://www.linkedin.com/in/aryan-kaul-91907b206",
              "photo": "./Images/Team/TeamPhotos/Aryan.jpeg",
              "css":"bg-cover"
            },
            
            
            
            {
              "name": "Tavisha Thaware",
              "role": "Partnership Team Lead",
              "phone": "8269760672",
              "email": "tavisha20101@iiitnr.edu.in",
              "linkedin": "https://www.linkedin.com/in/tavisha-thaware-907190202/",
              "photo": "./Images/Team/TeamPhotos/Tavisha.jpeg",
              "css":"bg-cover"
            },
                 
          ]
  return (
    <div className='sm:pt-6 bg-cover bg-center text-white bg-no-repeat flex flex-col justify-start items-center' style={{backgroundImage:"url(./Images/BackgroundSpace.jpeg)"}}>
        <div className='w-full'><Navbar /></div>
        <div className='pt-10 flex flex-col justify-center items-center'>
            <div className='spaced uppercase text-4xl tracking-wider'>
                Team
            </div>
            <div className='grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-10 gap-x-4 md:gap-x-5 xl:gap-x-12 gap-y-6'>
                {
                    team.map((item,index) => {
                        return (<TeamCard name={item.name} role={item.role} image={item.photo} phone={item.phone} email={item.email} linkedin={item.linkedin} css={item.css} key={index} />)

                    })
                }
                
            </div>

        </div>
    </div>
  )
}

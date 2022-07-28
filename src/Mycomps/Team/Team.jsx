import React from 'react'
import { Navbar } from '../Navbar'
import { TeamCard } from './TeamCard'

export const Team = () => {
    
    const team = [
        {
            "name": "Ketan Agrawal",
            "role": "Overall Coordinator",
            "phone": "9893252074",
            "email": "ketan19102@iiitnr.edu.in",
            "linkedin": "www.linkedin.com/in/ketanagrawal7",
            "photo": "https://drive.google.com/uc?export=view&id=1Q3wQWQV2vW9B6q8kn5dOmrYTpkb9VLz5"
          },
          {
            "name": "Ayush Tirkey",
            "role": "Overall Coordinator",
            "phone": "7389666449",
            "email": "ayush19102@iiitnr.edu.in",
            "linkedin": "https://www.linkedin.com/in/ayush-tirkey-b41b5218b",
            "photo": "https://drive.google.com/uc?export=view&id=1NxKebUoP53q0Q6tmjzpSj9QYKYVxYX4q"
          },
            {
                "name": "Himanshu Yadav",
                "role": "Overall Coordinator",
                "phone": "7587721107",
                "email": "himanshu20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/himanshu-yadav-b86134206",
                "photo": "https://drive.google.com/uc?export=view&id=1bVqzG-2uhTWQUrnIIuHddoF5VcXiEPAp"
              },
            {
                "name": "Sristhi Sahoo ",
                "role": "Overall Coordinator",
                "phone": "7760686990",
                "email": "sristhi20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/sristhi-sahoo-7910641ba/",
                "photo": "https://drive.google.com/uc?export=view&id=1vApTNl8yDqvJJImzqCB76aY80rPrOyZV"
              },
             
              {
                "name": "Shristy Kashyap",
                "role": "Hospitality and Logistics Team Lead",
                "phone": "8269252088",
                "email": "shristy20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/shristy-kashyap-ab0908180/",
                "photo": "https://drive.google.com/uc?export=view&id=1ZwQk26HD7a-aElI83LOER8iBNW3T9frd"
              },
            {
              "name": "Shreyan Manher",
              "role": "Hospitality and Logistics Team Lead",
              "phone": "9131253270",
              "email": "shreyan20100@iiitnr.edu.in",
              "linkedin": "https://www.linkedin.com/in/shreyan-manher-807a0a218/",
              "photo": "https://drive.google.com/uc?export=view&id=1-9L7K9PLLRS_Tr0sS6iD8PvVy7D5-St8"
            },
            {
                "name": "Meetiksha Sorgile",
                "role": "Outlook Head Lead",
                "phone": "9098281522",
                "email": "meetiksha20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/meetiksha-sorgile-41676922b/",
                "photo": "https://drive.google.com/uc?export=view&id=1dLrDdO3fH1_B6u5M9fFm3IIUSpjPcJkk"
              },
              {
                "name": "Shubham Raj Sahu",
                "role": "Designing Team Lead",
                "phone": "9399088769",
                "email": "shubhamr20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/mwlite/in/shubham-raj-sahu-7474b1194",
                "photo": "https://drive.google.com/uc?export=view&id=1iLjZRWGKf3OLUPVN5jTuyhbadAhAt8Jx"
              },
              {
                "name": "Lekhana Mysore Adiseshanaik ",
                "role": "Content team head ",
                "phone": "8688776956",
                "email": "mysore20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/lekhana-mysore-adiseshanaik-6b36b822a/",
                "photo": "https://drive.google.com/uc?export=view&id=1aNjgKGibje4oJpzX6jyfhtmsytXKg4I8"
              },
              {
                "name": "Amogh Dubey",
                "role": "Marketing, Media & PR Team Lead",
                "phone": "9455132136",
                "email": "amogh20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/amoghdubey",
                "photo": "https://drive.google.com/uc?export=view&id=1zsmbiltaijFrxSFcsR1fugD5aWUo6mxC"
              },
              {
                "name": "Aayush Dewangan ",
                "role": "Marketing, Media & PR Team Lead",
                "phone": "9340758510",
                "email": "aayush20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/aayush-dewangan-57ab85203",
                "photo": "https://drive.google.com/uc?export=view&id=1UG7Ybbj1bqUf-8kvWCfA3nPi8bvtIpAb"
              },
              {
                "name": "Kunal Mahajan",
                "role": "Marketing, Media & PR Team Lead",
                "phone": "8770894177",
                "email": "kunal20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/kunal-mahajan-731aa8200",
                "photo": "https://drive.google.com/uc?export=view&id=1V8QWkyTAdY53BBfy8a6CXvO9lU5S6BzL"
              },
              {
                "name": "Aman Singh",
                "role": "Designing Team Lead",
                "phone": "9118705947",
                "email": "aman20100@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/aman-singh-76aa50220",
                "photo": "https://drive.google.com/uc?export=view&id=1RyeDtPr8RCq2vrlWtI2QPt-NIvkwPS2_"
              },
              {
                "name": "Anand Bachker",
                "role": "Website Team Lead",
                "phone": "7005753529",
                "email": "anand20100@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/anand-bachker-216119238/"
              },
              {
                "name": "Rony Joseph",
                "role": "Website Team Lead",
                "phone": "8921474833",
                "email": "rony20100@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/rony-joseph-0619bb205/",
                "photo":"https://drive.google.com/uc?export=view&id=1Rqg5uQ8QYTqoqWkGZFzWhlxl-ZKPAZit"
              },
              {
                "name": "Aaditya Kumar",
                "role": "Cultural Team Lead",
                "phone": "6268164699",
                "email": "aaditya20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/aaditya-kumar-560952217",
                "photo": "https://drive.google.com/uc?export=view&id=1LOWUsIKk7VueGDBuENIRCJzkSyV66ZU4"
              },
              {
                "name": "Nishoak Kosaraju",
                "role": "Technical Team Lead",
                "phone": "6309106555",
                "email": "nishoak20102@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/nishoak/",
                "photo": "https://drive.google.com/uc?export=view&id=18NEJLY_ktf4NNOr6q847gUP3QLwJul5n"
              },
              {
                "name": "Yathin Prakash Kethepalli ",
                "role": "Technical Team Lead",
                "phone": "7207842318",
                "email": "yathin20100@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/yathin-prakash-kethepalli",
                "photo": "https://drive.google.com/uc?export=view&id=1iwmCx5KO0rK_gslPQ0T4je7PbpKo8soR"
              },
            {
              "name": "Pratyush Parashar",
              "role": "Informal Events Team Lead",
              "phone": "7033123105",
              "email": "pratyush20102@iiitnr.edu.in",
              "linkedin": "https://www.linkedin.com/in/pratyush-parashar-036831201/",
              "photo": "https://drive.google.com/uc?export=view&id=17G6nFt44g6zXRDKLClmnXrEhxH018bV4"
            },
            
            
            {
                "name": "Saumya Singh ",
                "role": "Informal Events Team Lead",
                "phone": "9696230180",
                "email": "saumya20101@iiitnr.edu.in",
                "linkedin": "https://www.linkedin.com/in/saumya-singh-5237b6203/",
                "photo": "https://drive.google.com/uc?export=view&id=1yPjagMF22esyztfPkPEI1e0bC9RcciS2"
              },
            
            {
              "name": "Aryan Kaul",
              "role": "Partnership Team Lead",
              "phone": "8826557777",
              "email": "aryan20102@iiitnr.edu.in",
              "linkedin": " https://www.linkedin.com/in/aryan-kaul-91907b206",
              "photo": "https://drive.google.com/uc?export=view&id=1UZqRUzKbbZMdIeWIAPOqT_z108-vKKF_"
            },
            
            
            
            {
              "name": "Tavisha Thaware",
              "role": "Partnership Team Lead",
              "phone": "8269760672",
              "email": "tavisha20101@iiitnr.edu.in",
              "linkedin": "https://www.linkedin.com/in/tavisha-thaware-907190202/",
              "photo": "https://drive.google.com/uc?export=view&id=11gummQSSmUrnTqUZPx482ZzczprKzQdb"
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
                        return (<TeamCard name={item.name} role={item.role} image={item.photo} phone={item.phone} email={item.email} linkedin={item.linkedin} key={index} />)

                    })
                }
                
            </div>

        </div>
    </div>
  )
}

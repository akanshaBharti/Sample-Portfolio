import { Button } from '@material-tailwind/react'
import React from 'react'

function Home(){
    return(
        <>
        <div className=' bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-cyan-900 to-90% '>
            <section className='px-20 py-40'>
                <div className=' flex flex-col md:flex-row'>
                <img
                  src='/images/akansha_photo.jpg'
                  className='hover:opacity-80 h-1/2 mx-auto w-80 -mx-4 -mt-1 rounded-full border-2 p-2 hover:border-black hover:scale-110 transition duration-300 ease-in-out'
                  alt=''
                />

                <div className='grid mt-6 content-baseline -mx-14 lg:mx-8'>
                 <h1 className='xl:text-5xl md:text-4xl sm:text-4xl text-black hover:text-white '>Hi, I am Akansha Bharti</h1>
                 <h1 className='xl:text-3xl md:text-2xl text-black hover:text-white'>- Frontend Web Developer<br></br>- Student</h1>
                 <h1 className='xl:text-xl md:text-l text-black hover:text-white'>I am currently pursuing B.Sc. (Hons.) Computer Science from Hansraj<br></br>College, University of Delhi. 
                 I'm a student with a strong interest in web development. I've always been fascinated by the power of the internet and how websites can have a profound impact on people's lives.
                 I am involved in college society in addition to my studies. Apart from this, I also love to paint.</h1>
                <div className='flex m-14'>
                <h1 className='text-2xl text-black hover:text-white'>Resume:</h1>
                <a href='https://drive.google.com/file/d/1PqJj-vEwVgpa7p_UIJWcR1LqAZKwgfq-/view?usp=sharing' target='_blank' rel="noreferrer">
                <Button className='bg-transparent hover:bg-cyan-900 border rounded-full w-24 h-8 ml-6 mt-1'>visit </Button></a>
                </div> 
                
                 </div>
                 

                </div>

            </section>
            
            

        </div>
        </>
    )
}

export default Home
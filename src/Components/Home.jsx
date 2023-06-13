import React from 'react'

function Home(){
    return(
        <>
        <div className='h-screen bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-cyan-900 to-90%'>
            <section className='px-40 py-40'>
                <div className='flex w-max'>
                <img
                  src='/images/akansha_photo.jpg'
                  className='h-80 w-80 rounded-full border-2 p-2 hover:border-black hover:scale-110 transition duration-300 ease-in-out'
                  alt=''
                />

                <div className='grid px-20 '>
                 <h1 className='text-5xl text-white hover:text-black '>Hi, I am Akansha Bharti</h1>
                 <h1 className='text-3xl text-white hover:text-black'>Frontend developer<br></br>Student</h1>
                 </div>

                </div>

            </section>
            
            

        </div>
        </>
    )
}

export default Home
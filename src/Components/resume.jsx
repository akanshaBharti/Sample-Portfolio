import React from 'react'

function Resume(){
    return(
        <>
        <div className='h-screen bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-cyan-900 to-90%'>
        <h1 className='text-center text-5xl '>Resume</h1>
        <hr className='ml-40 mr-40 mt-2'></hr>
        <div className='flex'>
         <img
         src='/images/resume.jpg'
         className='rounded-full h-80 w-80 mt-14 ml-64'
         />
        </div>
        </div>
        </>
    )
}

export default Resume
import React from 'react'

function Contact(){
    return(
        <>
        <div className='h-screen bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-cyan-900 to-90%'>
        <h1 className='text-center text-5xl '>Contact Details</h1>
        <hr className='ml-40 mr-40 mt-2'></hr>
        
        <ul className='grid px-80 m-10 gap-6'>
            <a className='flex'> 
            <img
            src='/images/gmail.jpg'
            className='w-12 h-12 rounded-full'
            />
            <b className='m-3'>Email : akanshabharti1213@gmail.com</b></a>
            <a href='https://www.linkedin.com/in/akansha-bharti/' target='_blank' className='flex '>
            <img
            src='/images/linkedin.jpg'
            className='w-12 h-12 rounded-full'
            />
            <b className='m-3'>Linkedin</b>
            </a>
            <a href='https://github.com/akanshaBharti' target='_blank' className='flex'> 
            <img
            src='/images/github.jpg'
            className='w-12 h-12 rounded-full'
            />
            <b className='m-3'>Github</b></a>
            <a className='flex'> 
            <img
            src='/images/phone.jpg'
            className='w-12 h-12 rounded-full'
            />
            <b className='m-3'>Phone: 7500344244</b></a>
            
        </ul>

        </div>
        </>
    )
}

export default Contact
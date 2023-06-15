import React from 'react'

function Contact(){
    return(
        <>
        <div className='h-screen bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-cyan-900 to-90%'>
        <h1 className='text-center text-5xl '>Contact Details</h1>
        <hr className='ml-40 mr-40 mt-2'></hr>
        
        <ul className='grid md:grid-cols-2 xl:grid-cols-2 m-10 gap-14 xl:px-80'>
            <a className='flex'> 
            <img
            src='/images/gmail.jpg'
            className='w-12 h-12 rounded-full'
            alt=''
            />
            <b className='m-3'>Email : akanshabharti1213@gmail.com</b></a>
            <a href='https://www.linkedin.com/in/akansha-bharti/' target='_blank' rel="noreferrer" className='flex '>
            <img
            src='/images/linkedin.jpg'
            className='w-12 h-12 rounded-full'
            alt=''
            />
            <b className='m-3'>Linkedin</b>
            </a>
            <a href='https://github.com/akanshaBharti' target='_blank' rel="noreferrer" className='flex'> 
            <img
            src='/images/github.jpg'
            className='w-12 h-12 rounded-full'
            alt=''
            />
            <b className='m-3'>Github</b></a>
        </ul>

        </div>
        </>
    )
}

export default Contact
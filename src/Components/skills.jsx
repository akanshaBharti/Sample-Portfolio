import React from 'react'

function Skills(){
    return(
        <>
        <div className='bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-cyan-900 to-90%'>
            <h1 className='text-center text-5xl '>Skills</h1>
            <hr className='ml-40 mr-40 mt-2'></hr>

            <div className='flex mt-10 gap-6 grid md:grid-cols-3 xl:grid-cols-5'>
            <div className='flex ml-12'>
            <img
             src='/images/cpp.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>C++</h1>
            </div>

            <div className='flex  ml-12'>
            <img
             src='/images/python.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>Python</h1>
            </div>

            <div className='flex  ml-12'>
            <img
             src='/images/java.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>Java</h1>
            </div>

            <div className='flex ml-12 '>
            <img
             src='/images/r.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>R</h1>
            </div>

            <div className='flex ml-12'>
            <img
             src='/images/sql.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>MySQL</h1>
            </div>
           </div>

           <div className='flex mt-10 grid md:grid-cols-3 xl:grid-cols-5 gap-6'>
           <div className='flex ml-10'>
            <img
             src='/images/html.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>HTML</h1>
            </div>

            <div className='flex ml-10'>
            <img
             src='/images/css.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>CSS</h1>
            </div>

            <div className='flex ml-10'>
            <img
             src='/images/javascript.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>JavaScript</h1>
            </div>

            <div className='flex ml-10'>
            <img
             src='/images/react.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>ReactJS</h1>
            </div>

            <div className='flex ml-10 mb-20'>
            <img
             src='/images/tailwind.jpg'
             className='h-20 w-20 rounded-full'
             alt=''
               />
            <h1 className='text-2xl m-6'>Tailwind CSS</h1>
            </div>

           </div>

             
        </div>
        </>
    )
}

export default Skills
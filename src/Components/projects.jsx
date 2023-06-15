import React from 'react'
import ProjectCard from './projects-card'
import projectsData from './projects-data'

function Projects(){
    return(
        <>
        <div className='h-screen bg-gradient-to-r from-teal-600 from-10% via-cyan-500 via-30% to-cyan-950 to-90%'>
        <h1 className='text-center text-5xl'>Projects</h1>
        <hr className='ml-40 mr-40 mt-2'></hr>
        
        
        <section className=''>
        <div className=" grid gap-x-10 md:grid-cols-2 xl:grid-cols-4 px-20">
            {projectsData.map(({name, link, img}) => (
              <ProjectCard
                key={name}       
                img={img}
                name={name}
                link={link}
              />
            ))}
            </div>
        </section>

        
        </div>
        </>
    )
}
export default Projects
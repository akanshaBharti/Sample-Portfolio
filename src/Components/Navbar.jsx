import React from 'react'

function Navbar(){
    return(
        <>
        <div className="nav absolute ">
        <div className="NavBar h-9">
            <div className="flex justify-between gap-4">
                <ul >Home</ul>
                <ul >Skills</ul> 
                <ul >Resume</ul> 
                <ul >Projects</ul>
                <ul >Contact</ul>
            </div> 
        </div>
        </div>
        </>
    )
}

export default Navbar
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const Sidenav = () => {

  

  return (
    
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-5">
  <h1 className="text-2xl text-white font-bold">
    <i className="text-[#6556CD] ri-tv-2-line mr-2"></i>
   
   <span className="text-xl">Moivesbolt</span>

  </h1>
  <nav className="flex flex-col text-zinc-400 text-sm gap-1">
  
  <h1 className="text-white font-semibold text-xl mt-10 mb-5">New feeds</h1>
  <Link to="/Trending"className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="mr-2 ri-fire-fill "></i>Trending</Link>
  <Link to="/Popular"className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="mr-2 ri-bard-fill "></i>Popular</Link>
  <Link to="/Movies"className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="mr-2 ri-movie-2-fill "></i>Moives</Link>
  <Link to="/TVshowes"className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="mr-2 ri-tv-2-fill "></i>TV Showes</Link>
  <Link to="/People"className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="mr-2 ri-team-fill"></i>People</Link>
  </nav>
  <hr/>
  <nav className="flex flex-col text-zinc-400 text-sm gap-1">
  
  <h1 className="text-white font-semibold text-xl mt-10 mb-5">Website Information</h1>
  <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="mr-2 ri-information-fill "></i>About Moviesbolt</Link>
  <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"><i className="mr-2 ri-phone-fill "></i>Contact</Link>
 
  </nav>
  </div>
 
  )
};

export default Sidenav
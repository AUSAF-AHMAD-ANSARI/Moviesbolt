import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Notfound from '../component/Notfound'

const Trailer = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation()
    const category=pathname.includes("movie")? "Movie" : "Tv";
    const ytvideo = useSelector((state)=>state[category].info.videos)
    console.log(ytvideo);
    
  return (
    <div className='bg-[rgba(0,0,0,.9)] absolute top-0 left-0 w-screen h-screen flex items-center justify-center'>
        
 <Link>

<i 
onClick={()=>navigate(-1)}
className=" absolute hover:text-[#6556CD] ri-close-fill text-3xl text-white right-[5%] top-[5%]"></i>{" "}



</Link>
 
{ytvideo? <ReactPlayer
controls
    height={600}
    width={1330}
    url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>:<Notfound /> }
    


    </div>
  );
}

export default Trailer
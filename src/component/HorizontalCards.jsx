import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import noimage from '/abc.jpg'

const HorizontalCards = ({data}) => {
  return (

    <div className='w-[130%] flex overflow-y-hidden  mb-5  p-5'>

   {data.length>0?data.map((d, i) =>(

    <Link to={`/${d.media_type}/detail/${d.id}`}key={i} className="min-w-[15%] h-[50vh] bg-zinc-900 mr-5 mb-5 ">
        <img className='rounded-t-lg w-full h-[55%] object-cover'
        src={d.backdrop_path || d.poster_path?`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path})`:noimage} alt=""/>
     <div className='text-white p-3 h-[40%] overflow-y-auto'>
       <h1 className='text-3ml font-bold '>{d.title||d.name||d.original||d.original_title}</h1>
        
   
            
            <p className='mt-3 mb-3   text-white'>{d.overview.slice(0,70)}...<span className="text-zinc-500">more</span>
             </p>
             </div>
</Link>

)): <h1 className='text-3xl mt-5 text-white font-black text-center'>Nothing to show</h1>}

    </div>

    
  )
}

export default HorizontalCards
import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/public/abc.jpg'

export const Cards = ({data,title}) => {
    
  return (
    <div className='flex flex-wrap w-full h-full p-[5%] justify-between bg-[#1F1E24]'>

    {data.map((c,i)=>(
        
    <Link to={`/${data.media_type||title}/detail/${c.id}`}
    className=' relative w-[25vh]  mt-[2%]  mr-[5%] text-center' key={i} >
    <div className='hover:z-[50] w-[130%] mt-[5%]  shadow shadow-black-300/100 hover:shadow-zinc-500/90 overflow-hidden '>
    <img className=' bg-zinc-300  z-[5] w-[40vh] rounded h-[45vh]  object-cover  ' src={ c.backdrop_path || c.poster_path||c.profile_path?`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path||c.profile_path}`:noimage} alt='' />
    </div>
    <h1 className='text-2xl text-zinc-400 mt-3 font semibold '>{c.title||c.name||c.original_name||c.original_title}
    </h1>
    {c.vote_average&& <div className='absolute right-[-40%]  bottom-[35%] text-white  text-xl w-[6vh] h-[6vh] bg-yellow-600 font-semibold flex justify-center rounded-full items-center'>{(c.vote_average*10).toFixed()} <sup>%</sup>  </div>}
    


     </Link>


    ))}

    </div>
  )
}

export default Cards

import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../utils/axios'
import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/abc.jpg'

const Topnav = () => {
 const [query, setquery]= useState("");
const [searches, setsearches] = useState([]);
const Getsearches=async()=>{

  try{
    const {data}=await axios.get(`/search/multi?query=${query}`);
    
    setsearches(data.results);
    console.log(data.results);

  }
  catch(error){
    console.log("Error : ", error);
  }
};

useEffect(()=>{

  Getsearches();

 }, [query]);


  return (
    <div className='w-[80%] h-[10vh] relative flex mx-auto item-center ml-[10%]'>

       <i className='text-zinc-400 text-xl ri-search-line mt-6'></i>
       <input 
        
       onChange={(e)=> setquery(e.target.value)}
       value={query}
       className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent" 
       type='text' 
       placeholder="search anything"
       
       />
       {query.length>0&&(
       <i 
       onClick={()=> setquery("")}
       className='text-zinc-400 text-2xl ri-close-fill mt-5'> </i>
      )}


    <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200  top-[100%] top-[95%] overflow-auto z-[100] rounded left-[11%]'>
    {searches.map((s,i)=>(

    <Link to={`/${s.media_type}/detail/${s.id}`}key={i} 
    className='hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 inline-block w-[100%] p-10 flex justify-start item-center border-b-2 border-zinc-100'>
  <img
  className='w-[10vh] h-[10vh] object-cover rounder mr-5 shadow-lg' 
  src={
    s.backdrop_path || s.poster_path ?
    `https://image.tmdb.org/t/p/original/${s.backdrop_path||s.poster_path}`
    : noimage

    
  
  
  } alt="" />
  <span>{s.name||s.original_name||s.original_title}</span>

  </Link>
  
 

    ))}
    
  

    </div>
    </div>
  )
}

export default Topnav
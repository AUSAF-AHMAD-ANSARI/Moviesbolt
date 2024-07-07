import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {asyncloadperson} from "../store/action/Personaction";
import { removeperson} from "../store/reducers/PersonSlice";
import Loading from '../component/Loading';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import HorizontalCards from '../component/HorizontalCards';

import Dropdown from '../component/Dropdown';


const Persondetail = () => {
  const {pathname}=useLocation();
  const navigate=useNavigate();
  
    const {id}=useParams();
    const {info} =useSelector((state)=>state.Person)
    const dispatch=useDispatch();
    console.log(info);
    const [category,setcategory]=useState("movie")
    
    useEffect(() => {
      dispatch(asyncloadperson(id));
      return ()=>{
        dispatch(removeperson());
      }
    },[id]);
  return info ?<div className='px-[10%] w-screen h-[230vh] overflow-hidden bg-[#1F1E24] '>
    
    <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl'>
          <Link>

        <i 
        onClick={()=>navigate(-1)}
        className=" hover:text-[#6556CD] ri-arrow-left-line "></i>{" "}
        
        </Link>
        
        
        </nav>
    
    <div className='w-full flex '>

      <div className='w-[20%]'>
      <img className=' bg-zinc-300  w-[70vh] bg-center rounded h-[30vh]  object-cover  ' src={ `https://image.tmdb.org/t/p/original/${ info.detail.profile_path||info.detail.backdrop_path}`} alt='' />

      <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500'/>
      <div className='text-2xl text-white flex gap-x-5'>
       
      
        <a target="_blank"href={`https://www.wikidata.org/wiki/${info.external_id.wikidata_id}`}>
            <i className="ri-earth-fill"></i>
        </a>
        <a target="_blank"href={`https://www.facebook.com/${info.external_id.facebook_id}`}>
            <i className="ri-facebook-circle-fill"></i>
        </a>

        <a target="_blank"href={`https://www.instagram.com/${info.external_id.instagram_id}`}>
            <i className="ri-instagram-fill"></i>
        </a>
        <a target="_blank"href={`https://www.twitter.com/${info.external_id.twitter_id}`}>
            <i className="ri-twitter-x-fill"></i>
        </a>
        

      </div>
      <h1 className='text-lg text-zinc-400 font-semibold'>

        Personal Information
        
        </h1>

        <h1 className='text-lg text-zinc-400 font-semibold '>

         Know For

      </h1>
      <h1 className='text-zinc-400'>{info.detail.know_for_department}</h1>
       
      <h1 className='text-lg text-zinc-400 font-semibold mt-3'>

        Gender

</h1>
<h1 className='text-zinc-400'>{info.detail.gender===2?"Male":"Female"}</h1>

<h1 className='text-lg text-zinc-400 font-semibold mt-3'>

        Birthday

</h1>
<h1 className='text-zinc-400'>{info.detail.birthday}</h1>

<h1 className='text-lg text-zinc-400 font-semibold mt-3'>

        Deathday

</h1>
<h1 className='text-zinc-400'>{info.detail.deathday? info.detail.deathday:"Still Alive"}</h1>

<h1 className='text-lg text-zinc-400 font-semibold mt-3'>

        Place of Birth

</h1>
<h1 className='text-zinc-400'>{info.detail.place_of_birth}</h1>

<h1 className='text-lg text-zinc-400 font-semibold mt-3'>

Also Known As

</h1>
<h1 className='text-zinc-400'>{info.detail.also_known_as.join(", ")}</h1>







      </div>

      <div className='w-[80%] ml-[5%]'>

      
      <h1 className='text-6xl text-zinc-400 font-semibold my-5'>

        {info.detail.name}
        
        </h1>

        <h1 className='text-xl text-zinc-400 font-semibold '>

         Biography

      </h1>
      <p className='text-zinc-400 m-3'>{info.detail.biography}</p>
      
      <h1 className='mt-5 text-lg text-zinc-400 font-semibold '>

        Known For

      </h1>
      <HorizontalCards data={info.combinedCredits
.cast} />

      <div className='w-full flex  justify-between'>

      <h1 className='mt-5 flex-col text-xl text-zinc-400 font-semibold '>

      Acting

       </h1>

      <Dropdown title="Category" options={["tv","movie"]} func={(e)=>setcategory(e.target.value)} />
      </div>
    
      <div className='w-full list-disc  text-zinc-400 h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-white mt-5 border-zinc-700 p-5'>

        {info[category+"Credits"].cast.map((c,i)=>(
        
       
        

      <li 
      key={i}
      className='hover:text-white duration-300 rounded cursor-pointer'>

        <Link to={`/${category}/detail/${c.id}`}  className="" >
        <span>
        {c.title||c.name||c.original_name||c.original_title} 
          
        </span>
        <span className='block ml-5 p-2'>
          
          
          {c.character&&`Character Name : ${c.character}`}



        </span>
        
        </Link>
      </li>
      ))}

      </div>

      </div>

    </div>
    
    
    </div>: <Loading />;
  
}

export default Persondetail
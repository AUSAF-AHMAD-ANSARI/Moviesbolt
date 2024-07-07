import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {asyncloadmovie} from "../store/action/Movieaction";
import Loading from '../component/Loading';
import { useSelector } from 'react-redux';
import { removemovie } from '../store/reducers/MovieSlice';
import { useLocation } from 'react-router-dom';
import HorizontalCards from '../component/HorizontalCards';
import Trailer from '../component/Trailer';
import { Outlet } from 'react-router-dom'
const Moviedetail = () => {
  const {pathname}=useLocation();
  const navigate=useNavigate();
  
    const {id}=useParams();
    const {info} =useSelector((state)=>state.Movie)
    const dispatch=useDispatch();
    console.log(info);
    useEffect(() => {
      dispatch(asyncloadmovie(id));
      return ()=>{
        dispatch(removemovie());
      }
    },[id]);
    return info ?(
      <div style={{
        background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.4)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        

    
    }}
      
      
      className=' relative w-screen h-[190vh] px-[10%] overflow-hidden '>
        
        <nav className='w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl'>
          <Link>

        <i 
        onClick={()=>navigate(-1)}
        className=" hover:text-[#6556CD] ri-arrow-left-line "></i>{" "}
        
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a target="_blank"href={`https://www.wikidata.org/wiki/${info.external_id.wikidata_id}`}>
            <i className="ri-earth-fill"></i>
        </a>
        
        <a target="_blank" href={`https://www.imdb.com/title/${info.external_id.imdb_id}/`}>
         imdb
        </a>
        
        </nav>


        
        
        <div className='w-full flex '>

        <img className=' bg-zinc-300  w-[50vh] bg-center rounded h-[43vh]  object-cover  ' src={ `https://image.tmdb.org/t/p/original/${ info.detail.poster_path||info.detail.backdrop_path}`} alt='' />
          
          <div className='content ml-[5%] text-white'>

               <h1 className='text-4xl font-black text-white'>
                
                {info.detail.title||info.detail.name||info.detail.original_name||info.detail.original_title} 
                
                 <small className='text-xl font-bold text-zinc-300'>({info.detail.release_date.split("-")[0]})</small>
                </h1>
             <div className='mt-3 mb-5 flex text-white items-center gap-x-5'>
                <span className='text-white  text-xl w-[6vh] h-[6vh] bg-yellow-600 font-semibold flex justify-center rounded-full items-center'>{(info.detail.vote_average*10).toFixed()} <sup>%</sup>  </span>

                <h1 className='w-[60px] font-semibold text-2xl leading-6'>User Score</h1>
                <h1>{info.detail.release_date}</h1>
                <h1>{info.detail.genres.map(g=>g.name).join(",")}</h1>
                <h1>{info.detail.runtime}min</h1>
                </div>
               
               <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>
               <h1 className='text-2xl mt-2'>Overview</h1>
               <p>{info.detail.overview}</p>

               <h1 className='text-2xl mt-2'>Movie Translations</h1>
               <p className='mb-10'>{info.translations.join(", ")}</p>

            <Link 
            className='p-5 bg-[#6556CD] rounded-lg '
            to={`${pathname}/trailer`}> <i className='text-xl mr-3 ri-play-fill'></i>Play Trailer</Link>



          </div>

        
        </div>
     
       <div className='w-[80%] flex flex-col mt-10 gap-y-5'>
  


  {info.watchproviders&&
    info.watchproviders.flatrate && <div className='flex gap-x-10  items-center text-white'>
      <h1>Available on Platform</h1>
  
  {info.watchproviders.flatrate.map((w,i)=>(
  <img 
  key={i}
  title={w.provider_name}
 className='w-[7vh] h-[7vh] object-cover rounded-md'
  src={ `https://image.tmdb.org/t/p/original/${ w.logo_path}`} alt='' />

   ))}
  
   </div>}

      
      {info.watchproviders&&
    info.watchproviders.rent && <div className='flex gap-x-10  items-center text-white'>
      <h1>Available on Rent</h1>
  
  {info.watchproviders.rent.map((w,i)=>(
  <img 
  key={i}
  title={w.provider_name}
 className='w-[7vh] h-[7vh] object-cover rounded-md'
  src={ `https://image.tmdb.org/t/p/original/${ w.logo_path}`} alt='' />

   ))}
  
   </div>}
   {info.watchproviders&&
    info.watchproviders.buy && <div className='flex gap-x-10  items-center text-white'>
      <h1>Available on Buy</h1>
  
  {info.watchproviders.buy.map((w)=>(
  <img 
  title={w.provider_name}
 className='w-[7vh] h-[7vh] object-cover rounded-md'
  src={ `https://image.tmdb.org/t/p/original/${ w.logo_path}`} alt='' />

   ))}
  
   </div>}

    

       </div>
       <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500'></hr>
    <h1 className=' text-3xl font-semibold text-white'>Recommendation and Similar Stuff</h1>
       <HorizontalCards data={info.recommendations.length>0?info.recommendations:info.similar}/>
         

        <Outlet/>
        </div>
    ): <Loading />
  
}

export default Moviedetail
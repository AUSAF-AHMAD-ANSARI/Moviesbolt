import React from 'react'
import axios from '../utils/axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Topnav'
import Loading from './Loading'
import Dropdown from './Dropdown'
import Cards from './Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
    
        document.title="Moviesbolt | Movies";
        const navigate = useNavigate()
        const [catagory,setcatagory] = useState("now_playing")
        const [movies,setmovies] = useState([])
        const [page, setpage] = useState(1);
        const [hasMore,sethasMore] = useState(true);
        
        const GetMovies=async()=> {
    
    
            try{
              const {data}=await axios.get(`/movie/${catagory}?page=${page}`);
              if(data.results.length>0){
              //settrending(data.results);
              setmovies((prevState)=>[...prevState,...data.results])
              setpage(page + 1);
              }
              else{
                sethasMore(false);
              }
              
          
            }
            catch(error){
              console.log("Error : ", error);
            }
          };
        
          const refershhandler = async()=> {
            if(movies.length===0){
              GetMovies();
            }
            else{
             setpage(1)
              setmovies([]);
              GetMovies();
              
            }
          }
          
           useEffect(()=>{
        
            refershhandler()
        
            }, [catagory]);
        
        

  return  movies.length>0 ? (

      <div className=' w-screen h-screen '>
        <div className='px-[5%] w-full flex items-center justify-between'>
        
        <h1 className='  text-2xl font-semibold text-zinc-400'>
          
          
          <i 
          onClick={()=>navigate(-1)}
          className=" hover:text-[#6556CD] ri-arrow-left-line"></i>{" "}
  
            Movies<small className='ml-7 text-sm text-zinc-600'>({catagory})</small>
  
          </h1>
          <Topnav />
        <div className='flex items-center w-[8%]'>
        <Topnav />
        <Dropdown title="Catagory" options={["popular","top_rated","upcoming","now_playing"]} 
        
        func={(e)=>setcatagory(e.target.value)}
        />
       
        </div>
        </div>
        <InfiniteScroll
  
        dataLength={movies.length}
        next={GetMovies}
        hasMore={hasMore} 
        loader={<h1>Loading...</h1>}
        >
        <Cards data={movies} title="movie"/>
        
        </InfiniteScroll>
        
  
  
      </div>
    ): (
      <Loading />
    )
}

export default Movies
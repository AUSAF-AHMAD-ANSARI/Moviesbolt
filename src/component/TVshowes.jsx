import React from 'react'
import axios from '../utils/axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Topnav'
import Loading from './Loading'
import Dropdown from './Dropdown'
import Cards from './Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const TVshowes = () => {

    document.title="Moviesbolt | TVshowes";
    const navigate = useNavigate()
    const [catagory,setcatagory] = useState("airing_today")
    const [TVshowes,setTVshowes] = useState([])
    const [page, setpage] = useState(1);
    const [hasMore,sethasMore] = useState(true);
    
    const GetTVshowes=async()=> {


        try{
          const {data}=await axios.get(`/tv/${catagory}?page=${page}`);
          if(data.results.length>0){
          //settrending(data.results);
          setTVshowes((prevState)=>[...prevState,...data.results])
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
        if(TVshowes.length===0){
          GetTVshowes();
        }
        else{
         setpage(1)
          setTVshowes([]);
          GetTVshowes();
          
        }
      }
      
       useEffect(()=>{
    
        refershhandler()
    
        }, [catagory]);
    
    



        return  TVshowes.length>0 ? (

            <div className=' w-screen h-screen '>
              <div className='px-[5%] w-full flex items-center justify-between'>
              
              <h1 className='  text-2xl font-semibold text-zinc-400'>
                
                
                <i 
                onClick={()=>navigate(-1)}
                className=" hover:text-[#6556CD] ri-arrow-left-line"></i>{" "}
        
                TV showes<small  className='ml-2 text-sm text-zinc-600'>({catagory})</small>
        
                </h1>
              <div className='flex items-center w-[80%]'>
              <Topnav />
              <Dropdown title="Catagory" options={["popular","top_rated","on_the_air","airing_today"]} 
              
              func={(e)=>setcatagory(e.target.value)}
              />
              <div className='w-[2%]'></div>
               
              </div>
              </div>
              <InfiniteScroll
        
              dataLength={TVshowes.length}
              next={GetTVshowes}
              hasMore={hasMore} 
              loader={<h1>Loading...</h1>}
              >
              <Cards data={TVshowes} title="tv"/>
              
              </InfiniteScroll>
              
        
        
            </div>
          ): (
            <Loading />
          )
}

export default TVshowes
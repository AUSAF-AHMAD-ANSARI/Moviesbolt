import React from 'react'
import axios from '../utils/axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Topnav'
import Loading from './Loading'
import Dropdown from './Dropdown'
import Cards from './Cards'
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
    document.title="Moviesbolt | Popular";
    const navigate = useNavigate()
    const [catagory,setcatagory] = useState("movie")
    const [popular,setpopular] = useState([])
    const [page, setpage] = useState(1);
    const [hasMore,sethasMore] = useState(true);
    
    const GetPopular=async()=> {


        try{
          const {data}=await axios.get(`${catagory}/popular?page=${page}`);
          if(data.results.length>0){
          //settrending(data.results);
          setpopular((prevState)=>[...prevState,...data.results])
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
        if(popular.length===0){
          GetPopular();
        }
        else{
         setpage(1)
          setpopular([]);
          GetPopular();
    
        }
      }
      
       useEffect(()=>{
    
        refershhandler()
    
        }, [catagory]);
    
    
  
        return  popular.length>0 ? (
    
            <div className=' w-screen h-screen '>
              <div className='px-[5%] w-full flex items-center justify-between'>
              
              <h1 className='  text-2xl font-semibold text-zinc-400'>
                
                
                <i 
                onClick={()=>navigate(-1)}
                className=" hover:text-[#6556CD] ri-arrow-left-line"></i>{" "}
        
                 Popular
        
                </h1>
              <div className='flex items-center w-[80%]'>
              <Topnav />
              <Dropdown title="Catagory" options={["movie","tv"]} 
              
              func={(e)=>setcatagory(e.target.value)}
              />
              <div className='w-[2%]'></div>
               
              </div>
              </div>
              <InfiniteScroll
        
              dataLength={popular.length}
              next={GetPopular}
              hasMore={hasMore} 
              loader={<h1>Loading...</h1>}
              >
              <Cards data={popular} title={catagory}/>
              
              </InfiniteScroll>
              
        
        
            </div>
          ): (
            <Loading />
          )
        }



export default Popular
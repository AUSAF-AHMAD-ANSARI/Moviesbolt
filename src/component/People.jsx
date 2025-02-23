import React from 'react'
import axios from '../utils/axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Topnav'
import Loading from './Loading'
import Dropdown from './Dropdown'
import Cards from './Cards'
import InfiniteScroll from 'react-infinite-scroll-component';


const People = () => {
    document.title="Moviesbolt | Person Show";
    const navigate = useNavigate()
    const [catagory,setcatagory] = useState("popular")
    const [person,setperson] = useState([])
    const [page, setpage] = useState(1);
    const [hasMore,sethasMore] = useState(true);
    
    const Getperson=async()=> {


        try{
          const {data}=await axios.get(`/person/${catagory}?page=${page}`);
          if(data.results.length>0){
          //settrending(data.results);
          setperson((prevState)=>[...prevState,...data.results])
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
        if(person.length===0){
          Getperson();
        }
        else{
         setpage(1)
          setperson([]);
          Getperson();
          
        }
      }
      
       useEffect(()=>{
    
        refershhandler()
    
        }, [catagory]);
    
        return  person.length>0 ? (

            <div className=' w-screen h-screen '>
              <div className='px-[5%] w-full flex items-center justify-between'>
              
              <h1 className='  text-2xl font-semibold text-zinc-400'>
                
                
                <i 
                onClick={()=>navigate(-1)}
                className=" hover:text-[#6556CD] ri-arrow-left-line"></i>{" "}
        
                People
        
                </h1>
              <div className='flex items-center w-[80%]'>
              
             
              
              <Topnav />
              </div>
              </div>
              <InfiniteScroll
        
              dataLength={person.length}
              next={Getperson}
              hasMore={hasMore} 
              loader={<h1>Loading...</h1>}
              >
              <Cards data={person} title="person"/>
              
              </InfiniteScroll>
              
        
        
            </div>
          ): (
            <Loading />
          )
}

export default People
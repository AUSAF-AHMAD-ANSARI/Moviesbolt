import React, { useState } from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import axios from '../utils/axios'
import { useEffect } from 'react'
import Header from './Header'
import HorizontalCards from './HorizontalCards'
import Loading from './Loading'
import Dropdown from './Dropdown'

const Home = () => {


  const [wallpaper,setwallpaper] =useState(null);
  const [trending,settrending] = useState(null);
  const [catagory, setcatagory] = useState("all");

const GetHeaderwallpaper=async()=> {


  try{
    const {data}=await axios.get(`/trending/all/week`);
    
    let randomdata=data.results[(Math.random() * data.results.length).toFixed()];
    setwallpaper(randomdata);
    

  }
  catch(error){
    console.log("Error : ", error);
  }
};
const GetTrending=async()=> {


  try{
    const {data}=await axios.get(`/trending/${catagory}/day`);
    
    console.log(data.results);
    settrending(data.results);
    

  }
  catch(error){
    console.log("Error : ", error);
  }
};



useEffect(()=>{
   GetTrending();
  !wallpaper && GetHeaderwallpaper();
  
},[catagory]);










  return wallpaper && trending ? (
  <>
   
    <Sidenav />

  <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
    
  <Topnav />
  <Header data={wallpaper} />
    
  <div className='my-5 flex justify-between p-5'>  
    <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>
     <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setcatagory(e.target.value)} />
   </div>




  <HorizontalCards data={trending}/>
    </div> 
  </> 
  ) :(
    <Loading />
  );

}








export default Home
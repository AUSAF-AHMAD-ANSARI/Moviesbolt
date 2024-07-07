import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import Loading from './component/Loading'
import Trending from './component/Trending'
import Popular from './component/Popular'
import Movies from './component/Movies'
import TVshowes from './component/TVshowes'
import People from './component/People'
import Moviedetail from './component/Moviedetail'
import Tvdetail from './component/Tvdetail'
import Persondetail from './component/Persondetail'
import Trailer from './component/Trailer'
import Notfound from './component/Notfound'

const App = () => {
  return (
     <div className="bg-[#1F1E24] w-screen h-screen flex">

  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/Trending" element={<Trending />}/>
  <Route path="/Popular" element={<Popular />}/>
  <Route path="/Movies" element={<Movies />}/>
   <Route path="/movie/detail/:id" element={<Moviedetail />}>
   
   <Route path="/movie/detail/:id/trailer" element={<Trailer />} />
   </Route>
   <Route path="/TVshowes" element={<TVshowes />}/>
   <Route  path="/tv/detail/:id" element={<Tvdetail />}>
   <Route path="/tv/detail/:id/trailer" element={<Trailer />} />
   </Route>

   <Route path="/People" element={<People />}/>
   <Route path="/Person/detail/:id"  element={<Persondetail />} />
   <Route path="*" element={<Notfound />}/>
  
  </Routes>
    </div>
  );
};








export default App
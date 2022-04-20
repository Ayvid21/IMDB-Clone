import React from 'react'
import Logo from "..//logo4.png"
import Favourite from "..//favourite1.png"
import {Link} from 'react-router-dom'
function NavBar() {
  return <>
  <div className="text-pink-400 font-bold text-4xl text-center">IMDB</div>
  
  <div className="border pl-10 flex space-x-8 items-center py-3">
      
    <img className="w-[90px] md:w-[100px]" src={Logo}></img>
    <Link to="/" className={`text-purple-800 font-bold text-2xl md:text-3xl text-right`}>Movies</Link>

    <img className="w-[90px] md:w-[100px]" src={Favourite}></img>
    <Link to="favourite" className={`text-purple-800 font-bold text-2xl md:text-3xl text-right`}>Favourites</Link>
  </div>
  </>;
}

export default NavBar
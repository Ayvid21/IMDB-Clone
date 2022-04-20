import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



function Banner() {
  const [movies,setMovies] = useState({})

  useEffect(function(){
      let res = axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=ef9c931d15b9455d67e77240ce031161&page=1").then((res)=> {console.table (res.data.results)
      setMovies(res.data.results[6])
      })
  },[])

  return <>
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end`}>
        <div className="text-2xl md:text-4xl text-white p-5 bg-gray-900 bg-opacity-70 w-full mx-auto flex justify-center font-bold">
            {movies.title}
        </div>
    </div>
  </>;
}

export default Banner
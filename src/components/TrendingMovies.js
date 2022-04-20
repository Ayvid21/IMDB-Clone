import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import Pagination from './Pagination'

function TrendingMovies() {

    const [movies,setMovies] = useState([])
    const [page, setPage] = useState(1);
    const [hover, setHover] = useState('')
    const [favourites, setFavourites] = useState([])


    function goAhead() {
      setPage(page + 1);
    }
    function goBack() {
      if(page > 1) {
        setPage(page - 1); 
      }
    }

    useEffect(function(){
        let res = axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=ef9c931d15b9455d67e77240ce031161&page=${page}`).then((res)=> {console.table (res.data.results)
        setMovies(res.data.results)
        })
    },[page])

    let add = (movies) => {
        let newArray = [...favourites, movies]
        setFavourites([...newArray])
        console.log(newArray)
    }

  return  <>
    <div className="mb-10">
        <div className="mt-10 pb-10 font-bold text-2xl md:text-3xl text-center text-pink-400">Trending Movies</div>
        {
            movies.length === 0 ?
            <div className="flex justify-center">
                <Oval 
                    height="70"
                    width="70"
                    color='red'
                    secondaryColor='gray'
                    arialLabel='loading' /> 
            </div>:

            <div className="flex flex-wrap justify-center">
                {
                    movies.map((movies)=>(
                        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] bg-center bg-cover h-[25vh] w-[150px] md:h-[30vh] md:w-[200px] rounded-xl flex items-end m-3 hover:scale-110 ease-out duration-500 text-3lg relative`}
                        onMouseEnter={()=>setHover(movies.id)}

                        onMouseLeave={()=>setHover("")}
                        >
                            {
                                hover === movies.id &&
                                <>
                                {
                                    !favourites.find((m) => m.id === movies.id) ? <div className='absolute top-2 right-2 bg-gray-800 rounded-3xl text-xl cursor-pointer' onClick={() => add(movies)}>❤️</div> : <div className='absolute top-2 right-2 bg-gray-800 rounded-3xl text-xl cursor-pointer' onClick={() => add(movies)}>❌</div>
                                }
                                </>
                            }
                            
                <div className="w-full bg-gray-900 text-white py-2 text-center rounded-b-xl">
                    {movies.title}
                </div>
            </div>
                    ))
                }
                
            </div>
        }
    </div>
    <Pagination pageProp={page} goBack={goBack} goAhead={goAhead}/>
  </>;
}

export default TrendingMovies
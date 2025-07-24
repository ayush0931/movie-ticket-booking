import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../component/BlurCircle'
import {HeartIcon, PlayCircleIcon, StarIcon} from 'lucide-react'
import timeFormat from '../Library/timeFormat'
import DateSelect from '../component/DateSelect'
import MovieCard from '../component/MovieCard'
import Loading from '../component/Loading'





const MovieDetails = () => {
const navigate = useNavigate()

  const {_id} = useParams()
  const [show, setShow] = useState(null)

  const getShow = async ()=>{
    const show = dummyShowsData.find(show=>show._===_id)
    if(show){
  setShow({
      movie:show,
      dateTime:dummyDateTimeData
    })
    }
  
  }

  useEffect(()=>{
    getShow()
  },[_id])

  return show ? (
    <div className='px-6 md:px-6 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
    <img src={show.movie.poster_path} alt="" className='max-md:mx-auto rounded-xl h-104 
        max-w-70 object-cover'/>
        <div className='relative flex flex-col gap-3'>
            <BlurCircle top='-100px' left='-100px'/>
            <p className='text-primary'>ENGLISH</p>
            <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
            <div className='flex items-center gap-2 text-gray-300'>
              <StarIcon className='w-5 h-5 text-primary fill-primary'/>
              {show.movie.vote_average.toFixed(1)} User Raating
            </div>
            <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview}</p>
            <p>
              {timeFormat(show.movie.runtime)}.{show.movie.genres.map(genre=>genre.name).join(",")}
              .{show.movie.release_date.split("-")[0]}
            </p>

            <div className='flex flex-wrap items-center mt-4 gap-4'>
              <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900
                                  tansition rounded-md  font-medium cursor-pointer active-scale-95'>
                <PlayCircleIcon className='w-5 h-5'/>
              <p>Watch Trailer</p>
              </button>

              <a href="#dateSelect" className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition 
                                   rounded-md font-medium cursor-pointer active:scale-95'>Byy Tickets</a>

                  <button className='bg-gray-700 p-2.5 active:scale-95 cursor-pointer 
                                      transition  rounded-full   '>
                    <HeartIcon className={ `w-5 h-5`}/>
                  </button>
            </div>
        </div>
        
      </div> 
      <p className='text-lg font-medium mt-20'>Your Favorite Cast</p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0,12).map((cast,index)=>(
            <div key={index} className='flex flex-col items-center text-center'>
                <img src={cast.profile_path} alt="" className='rounded-full h-20 md:h-20 aspect-square
                objcet-cover' />
                <p>{cast.name}</p>
              </div>
          ))}

        </div>

      </div>
      <DateSelect dateTime={show.dateTime} id={_id}/>

      <p className='tex-lg mt-20 font-medium mb-8'>You May Also Like</p>
          <div className='flex flex-wrap justify-center gap-8 max-sm'>
          {dummyShowsData.slice(0,3).map((movie,index)=>(
            <MovieCard key={index} movie={movie}/>
          ))}
          </div>
          <div className='flex justify-center mt-20'>
            <button onClick={()=> {navigate("/movies"),scrollTo(0,0)}} className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull 
            transition rounded-md font-medium cursor-pointer'>
                Show More
            </button>
          </div>

    </div>
  ):<Loading/>
}

export default MovieDetails

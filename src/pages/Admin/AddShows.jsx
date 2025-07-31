import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../component/Loading';
import Title from '../../component/admin/Title';
import { CheckIcon, StarIcon } from 'lucide-react';
import { KConverter } from '../../Library/KConverter';

const AddShows = () => {
   const currency = import.meta.env.VITE_CURRENCY
    const [nowPlayingMovies,setNowPlayingMovies] = useState([]);
    const [selectMovie,setSelectMovie] = useState(null);
    const [dateTimeSelection,setDateTimeSelection] = useState({});
    const [dateTimeInput,setDateTimeInput] = useState("");
    const [showPrice,setShowPrice] = useState("");

    const fetchNowPlayingMovies = async ()=>{
        setNowPlayingMovies(dummyShowsData)
    };

    const handleDateTimeAdd= () =>{
      if(!dateTimeInput) return;
      const[date,time]=dateTimeInput.split("T");
      if(!date || !time )return;

      setDateTimeSelection((prev)=>{
        const times = prev[date] || [];
        if(!times.includes(time)){
          return{...prev, [date] : [...times, time]};
        }
         return prev;
      })
    };
    const handleRemoveTime=(date, time)=>{
      setDateTimeSelection((prev)=>{
        const filteredTimes = prev[date].filter((t) => t !== time);
        if(filteredTimes.length === 0){
           const {[date]: _, ...rest} =prev;
        return rest;
        }
        return{
          ...prev,
          [date]:filteredTimes,

        };
       
      });
    };
     
    useEffect(()=>{
      fetchNowPlayingMovies();
    },[]);

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows" />
      <p className='mt-10 text-lg font-medium'>Now Playing Movies</p>
      <div className='overflow-x-auto pb-4'>
        <div className='group flex flex-wrap gap-4 mt-4 w-max'>
          {nowPlayingMovies.map((movie)=>(
            <div key={movie.id}className= {`relative max-w-40 cursor-pointer
              group-hover:not-hover:opacity-40 hover:-translate-y-1
              transition-300`}onClick={()=>setSelectMovie(movie.id)} >
                  <div className='relative overflow-hidden rounded-lg'>
                    <img src={movie.poster_path} alt="" className='w-full
                    object-cover brightness-90' />
                    <div className='text-sm flex items-center justify-between
                    p-2 bg-black/70 w-full bottom-0 absolute left-0'>
                      <p className='flex items-center gap-1 text-gray-400 '>
                        <StarIcon className='w-4 h-4 text-primary fill-primary'/>
                        {movie.vote_average.toFixed(1)}
                      </p>
                        <p className='text-gray-300'>
                          {KConverter(movie.vote_count)}votes
                        </p>
                    </div>
                  </div>
                  {selectMovie===movie.id &&(
                    <div className='flex items-center w-6 h-6 justify-center bg-primary
                     absolute right-2 top-2 rounded'>
                      <CheckIcon className='w-4 h-4 text-white' strokeWidth={2.5}/>

                      </div>
                  )}
                  <p className='font-medium truncate'>{movie.title}</p>
                  <p className='text-gray-400 text-sm'>{movie.release_date}</p>
              </div>
          ))}
        </div>
      </div>
      <div className='mt-8'>
        <label className='block text-sm font-medium mb-2'>Show Price</label>
        <div className=' inline-flex items-center border border-gray-600 px-3 py-2
        rounded-md'>
          <p className='text-gray-400 text-sm'>{currency}</p>
          <input min={0} type="number" value={showPrice} onChange={(e)=>
            setShowPrice(e.target.value)} placeholder='Enter Show Price'
            className='outline-none'/>
        </div>
      </div>

      <div className='mt-6'>
        <label className='block text-sm font-medium mb-2'>Select Date And Time</label>
        <div className='inline-flex items-center border border-gray-600 gap-5
        rounded-lg p-1 pl-3 '>
          <input type = "datetime-local" value={dateTimeInput} onChange={(e)=>
            setDateTimeInput(e.target.value)} className='outline-none rounded-md'/>
            <button onClick={handleDateTimeAdd} className='bg-primary/80 text-white
            rounded-lg px-3 py-2 text-sm hover:bg-primary cursor-pointer'>Add Time</button>         

        </div>
      </div>
    </>
  ):<Loading/>
}

export default AddShows

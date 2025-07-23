import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'

const MovieDetails = () => {
  const {id} = useParams()
  const [show, setShow] = useState(null)

  const getShow = async ()=>{
    const show = dummyShowsData.find(show=>show._===id)
    setShow({
      movie:show,
      dateTime:dummyDateTimeData
    })
  }

  useEffect(()=>{
    getShow()
  },[id])

  return show ? (
    <div className='px-6 md:px-6 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
  
      </div>
      
    </div>
  ):<div> Loading </div>
}

export default MovieDetails

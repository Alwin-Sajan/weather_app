import React,{useState,useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const data ={
    place : 'London',
    date : 'Saturday, 12 May 2024',
    time : '20:00 pm',
    max : '29',
    min : '27',
    curr : '28',
    description : 'Cloudy',

  }


  return (
    <div className='w-full h-auto relative bg-blue-300 pb-8'>
      <h1 className='text-white p-4 absolute font-bold'>Weather App</h1>
      
      <div className='w-full h-full pt-28 flex items-center justify-center'>
        <div className='w-[68vw] h-[66vh] bg-white rounded-lg shadow-2xl p-8'>

          <h1 className='rounded-2xl p-1 text-2xl text-center'>{data.place}</h1>
          <div className='grid justify-center items-center m-2 p-4 bg-blue-100'>
            <h2 className=''>{data.date}</h2>
            <h1 className='text-7xl font-semibold m-8'>{data.curr}°c</h1>
            <h2>{data.max}°c / {data.min}°c</h2>
          </div>
          <h3 className=' float-right mr-2'>Time : {data.time}</h3>
        </div>
      </div>

      <div className='w-1/3 h-12 bg-slate-400 mt-6 mx-auto '>
        <button className='w-12 h-12 bg-orange-500'>blue</button>
        
      </div>

    </div>
  )
}

export default App
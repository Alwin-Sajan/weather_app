import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/bg1.jpg'

const App = () => {

  // const [data,setData] = useState([])
  const [bg, setBg] = useState('bg-blue-400')

  const data = {
    place: 'London',
    date: 'Saturday, 12 May 2024',
    time: '20:00 pm',
    max: '29',
    min: '27',
    curr: '28',
    description: 'Cloudy',

  }


  return (
    <div className={`w-full lg:h-auto relative ${bg} pb-8`}>
      <h1 className='text-white p-4 absolute font-bold'>Weather App</h1>

      <div className='w-full h-full pt-28 flex items-center justify-center max-md:px-2'>
        <div className='lg:w-[68vw] lg:h-[66vh] bg-white rounded-lg shadow-2xl p-8'>

          <h1 className='rounded-2xl p-1 text-2xl text-center'>{data.place}</h1>
          <div className='lg:flex justify-center items-center m-2 p-4 bg-blue-100'>
          <h1 className='text-7xl font-semibold lg:border-4 rounded-lg text-center lg:border-sky-400 max-md:py-4 lg:p-8 m-8'>{data.curr}°c</h1>
            <div className='bg-blue-300 p-8'>
              <h2 className='p-2'>{data.date}</h2>
              <h2 className='p-2'>{data.max}°c / {data.min}°c</h2>

            </div>


          </div>
          <h3 className=' float-right mr-2'>Time : {data.time}</h3>
        </div>
      </div>

      <div className='w-1/3 h-12 flex justify-between shadow-2xl bg-slate-200 mt-6 mx-auto rounded-2xl px-6'>
        <button className='w-16 h-12 bg-red-500' onClick={() => { setBg('bg-red-500') }}></button>
        <button className='w-16 h-12 bg-orange-500 ' onClick={() => { setBg('bg-orange-400') }}></button>
        <button className='w-16 h-12 bg-yellow-500 ' onClick={() => { setBg('bg-yellow-400') }}></button>
        <button className='w-16 h-12 bg-green-400 ' onClick={() => { setBg('bg-green-400') }}></button>
        <button className='w-16 h-12 bg-blue-400 ' onClick={() => { setBg('bg-blue-400') }}></button>

      </div>

    </div>
  )
}

export default App
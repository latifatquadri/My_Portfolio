import React from 'react'

function Home() {
  return (
    <div className='w-[90%] h-[70vh] mt-40 lg:mt-32 mx-auto'>
      <div className='flex gap-12 flex-col lg:flex-row lg:my-12 lg:gap-24'>
        <div className='flex-1'>
            <h4 className='text-2xl my-4'>Hello🤗 Welcome to </h4>
            <h4 className='text-3xl lg:text-5xl font-bold text-green-500 leading-loose'>Quadri Latifat Portfolio Website.</h4>
            <p className='text-lg text-green-800 italic mt-8'>"Merging creativity with code to deliver exceptional user experiences."</p>
        </div>
        <div className='flex-1'>
            <div class="bg-green-500 w-64 h-64 rounded-full shadow-2xl grid place-content-center">
                <div class="bg-blue-200 w-44 h-44 rounded-full grid place-content-center">
                    <div class="bg-red-500 w-28 h-28 rounded-full grid place-content-center">
                        <p class="font-bold text-5xl text-blue-200 ">QL</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home

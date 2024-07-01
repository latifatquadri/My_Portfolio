import React from 'react';

function Navbar() {
  return (
    <div className='w-full sticky top-0 backdrop-blur-lg'>
      <div className='flex flex-col lg:flex-row justify-between z-10 shadow-xl px-16 lg:px-24  py-2 lg:py-4'>
        <div class="bg-green-500 w-20 h-20 rounded-full shadow-2xl grid place-content-center">
            <div class="bg-blue-200 w-12 h-12 rounded-full grid place-content-center">
                <div class="bg-red-500 w-8 h-8 rounded-full grid place-content-center">
                    <p class="font-bold text-base text-blue-200 ">QL</p>
                </div>
            </div>
        </div>
            <nav className='flex text-small lg:text-xl gap-4 lg:gap-12 my-auto'>
               <a href='#about' className='text-green-500 hover:bg-green-500 hover:text-green-100 rounded' >About</a>
               <a href='#skills' className='text-green-500 hover:bg-green-500 hover:text-green-100 rounded' >Skills</a>
               <a href='#projects' className='text-green-500 hover:bg-green-500 hover:text-green-100 rounded'>Projects</a>
               <a href='#contact' className='text-green-500 hover:bg-green-500 hover:text-green-100 rounded'>Contact</a>
            </nav>
      </div>
    </div>
  )
}

export default Navbar

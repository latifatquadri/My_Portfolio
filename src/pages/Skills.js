import React from 'react'

function Skills() {
  return (
    <div className='w-full mx-auto max-w-5xl mt-24' id='skills'>
      <h2 className="text-center text-emerald-500 text-4xl font-bold pt-4">My Skills....</h2>
      <div className='w-[90%] mx-auto'>
        <div className='my-8'>
            <h2 className='text-2xl text-green-600 pb-4'>Languages</h2>
            <div className='flex gap-6'>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>HTML5</div>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>CSS3</div>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>Javascript</div>
            </div>
        </div>
        <div className='my-8'>
            <h2 className='text-2xl text-green-600 pb-4'>Frameworks/Libraries</h2>
            <div className='flex gap-6'>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>React</div>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>Tailwind CSS</div>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>Bootstrap</div>
            </div>
        </div>
        <div className='my-8'>
            <h2 className='text-2xl text-green-600 pb-4'>Tools</h2>
            <div className='flex gap-6'>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>Git</div>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>npm</div>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>Figma</div>
            </div>
        </div>
        <div className='my-8 pb-4'>
            <h2 className='text-2xl text-green-600 pb-4'>Version Control</h2>
            <div className='flex gap-6'>
                <div className='flex-1 bg-green-400 h-24 place-content-center rounded-lg text-xl text-green-800 hover:shadow-xl hover:z-30'>GitHub</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

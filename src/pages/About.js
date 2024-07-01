import React from 'react';
import About_image from '../About_image.svg';

function About() {
  return (
    <div>
		<section className="px-10 w-full flex flex-col lg:flex-row py-20 align-center bg-emerald-200 max-w-5xl mx-auto mt-40 lg:mt-4" id='about'>
			<div className="flex-1">
				<img src={About_image} alt="About" className="w-full h-full bg-cover"/>
			</div>
			<div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-emerald-500 text-4xl font-bold">
						About Me :
					</h2>
				</div>	
                <p className='text-green-700 text-xl leading-relaxed text-left'>Hello! I'm Quadri Latifat, a passionate frontend developer with a keen eye for detail and a love for creating intuitive, dynamic user experiences. With a solid foundation in modern web technologies, I transform ideas into engaging and responsive web applications. My expertise lies in crafting beautiful interfaces that are not only visually appealing but also accessible and user-friendly.</p>
                <p className='text-green-900 italic text-xl'>"Merging creativity with code to deliver exceptional user experiences."</p>
			</div>
		</section>

    </div>
  )
}

export default About

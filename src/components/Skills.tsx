import React from 'react'

const Skills = () => {
  return (
    <div id=' skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Technologies i work with</h2>
          <p className='text-gray-500 pt-2'>
          Full Stack Developer with extensive experience in designing, building, and optimizing web applications using cutting-edge technologies. Proficient in React, Node.js, Express, and a range of modern frameworks and tools, I excel in creating scalable, user-centric solutions. My expertise spans front-end development, back-end systems, and API integration, ensuring seamless functionality and performance. Passionate about delivering clean, maintainable code and staying updated with industry trends to craft innovative and efficient web experiences.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-amber-400 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">Custom-css</h2>
              <h2 data-aos="zoom-in-up">Tailwind-css</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills

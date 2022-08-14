import React from 'react'

import mercedes2011 from './../assets/2011-mercedes-benz-sls-amg-base-2dr-coupe.jpg'

import Footer from './footer'

function About() {
  return (
    <div>
      <div className='w-full h-auto grid md:grid-cols-2 py-24'>
        <div className='w-full/2 h-[900px] grid'>
          <div className='w-full h-[200px] grid justify-center'>
            <h1 className='text-black uppercase text-7xl font-bold self-center md:self-end'>About</h1>
          </div>
          <div className='w-full h-[350px] grid justify-center'>
            <p className='self-center text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusantium minima, adipisci rerum vero ipsum repudiandae quam quis quibusdam assumenda ad est non illo aspernatur aliquid asperiores natus sed. Voluptatibus animi nesciunt natus fugit similique esse? Adipisci, assumenda doloremque dolore consectetur totam ad ratione dolorum fugit magni aut inventore, facilis voluptates veritatis tempora est enim, excepturi animi porro. Itaque aperiam dolorem sequi nesciunt animi? Cum, quas numquam?</p>
          </div>
          <div className='w-full h-[350px] grid justify-center'>
            <p className='self-center text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure commodi tempore maxime? Dolore natus modi corporis optio, et, quod eveniet aut exercitationem maxime voluptate, adipisci illo excepturi tempora impedit earum! Ratione autem voluptates natus non, quas alias sit id dolore impedit totam voluptas commodi vero aliquid ad, nihil suscipit explicabo pariatur! Quasi voluptas modi id et omnis culpa distinctio ab saepe nostrum, doloremque eius delectus eaque quibusdam laborum incidunt minus magni unde ex. Libero, delectus?</p>
          </div>
        </div>
        <div className='w-full/2 h-[900px]'>
          <img className='w-full h-full object-cover' src={mercedes2011} alt="" />
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default About
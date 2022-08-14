import React from 'react'

import {Link} from 'react-router-dom'

import mercedes2012 from './../assets/2012-mercedes-benz-sls-amg-base-2dr-coupe.jpg'
import porsche1984 from './../assets/1984-porsche-911-carrera-2dr-coupe.jpg'
import jaguar1967 from './../assets/1967-jaguar-xke-series-i-roadster.jpg'

import Footer from './footer'

import './workStyle.css'

function Work() {
  return (
    <div>

      <div className='w-full h-auto md:px-20 py-24 grid'>
        <div className='w-full h-auto grid'>
          <div className='w-full h-[150px] grid justify-center'>
            <h2 className='text-black font-bold text-8xl self-center md:self-end'>work</h2>
          </div>
          <div className='w-full h-[200px] grid justify-center'>
            <p className='text-black font-normal text-xl self-center text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, optio. Explicabo odio quis, expedita voluptatibus soluta, ratione quia ullam ipsum quos commodi officia voluptatem harum vel tenetur repellat quam aut saepe dolorum omnis voluptates!</p>
          </div>
        </div>
        <div className='w-full h-auto grid md:grid-cols-3'>
          <Link to='/project1'>
            <div className='w-full/3 h-[500px] grid md:pr-5' id='first'>
              <div className='w-full h-[100px] grid justify-center'>
                <h4 className='text-black font-bold text-4xl self-center'>Project 01</h4>
              </div>
              <div className='w-full h-[400px]'>
                <img className='w-full h-full object-cover' src={mercedes2012} alt="" />
              </div>
            </div>
          </Link>
          <Link to='/project2'>
            <div className='w-full/3 h-[500px] grid md:px-5' id='first'>
              <div className='w-full h-[100px] grid justify-center'>
                <h4 className='text-black font-bold text-4xl self-center'>Project 02</h4>
              </div>
              <div className='w-full h-[400px]'>
                <img className='w-full h-full object-cover' src={porsche1984} alt="" />
              </div>
            </div>
          </Link>
          <Link to='/project3'>
            <div className='w-full/3 h-[500px] grid md:pl-5' id='first'>
              <div className='w-full h-[100px] grid justify-center'>
                <h4 className='text-black font-bold text-4xl self-center'>Project 03</h4>
              </div>
              <div className='w-full h-[400px]'>
                <img className='w-full h-full object-cover' src={jaguar1967} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Work
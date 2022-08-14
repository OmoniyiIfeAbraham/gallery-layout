import React from 'react'

import {Link} from 'react-router-dom'

import cayman718 from './../assets/project2/porsche-718 Cayman.webp'
import carrera911 from './../assets/project2/porsche-911 Carrera Cabriolet.webp'
import cayenne from './../assets/project2/porsche-Cayenne E-Hybrid Platinum Edition.webp'
import macan from './../assets/project2/porsche-Macan GTS.webp'
import panamera from './../assets/project2/porsche-Panamera 4 Platinum Edition.webp'
import tycan from './../assets/project2/porsche-Tycan 4S.webp'

import Footer from './footer'

import './workStyle.css'

function Project2() {
  return (
    <div>

        <div className='w-full h-auto md:px-20'>

            <div className='w-full h-auto grid'>
                <div className='w-full h-[200px] grid justify-center'>
                    <h1 className='text-black font-bold text-6xl uppercase self-end'>project 02</h1>
                </div>
                <div className='w-full h-[250px] grid justify-center md:px-36'>
                    <p className='text-black font-normal text-xl self-center text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa optio incidunt expedita aspernatur a? Quasi provident earum unde, odio maiores aliquid, eligendi placeat voluptatem explicabo magni quae consectetur autem sit impedit, obcaecati dolor blanditiis at alias qui velit perferendis fuga vitae nulla? Nulla placeat voluptatem cum recusandae obcaecati ipsa sequi! Alias nemo neque vitae!</p>
                </div>
            </div>
            <div className='w-full h-auto grid md:grid-cols-3'>
                <div className='w-full/3 h-[500px] grid md:pr-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={cayman718} alt="porsche-718 Cayman" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>porsche-718 Cayman</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:px-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={carrera911} alt="porsche-911 Carrera Cabriolet" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>porsche-911 Carrera Cabriolet</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:pl-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={cayenne} alt="porsche-Cayenne E-Hybrid Platinum Edition" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>porsche-Cayenne E-Hybrid Platinum Edition</h4>
                    </div>
                </div>
            </div>
            <div className='hidden md:block w-full h-[50px]'>

            </div>
            <div className='w-full h-auto grid md:grid-cols-3'>
                <div className='w-full/3 h-[500px] grid md:pr-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={macan} alt="porsche-Macan GTS" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>porsche-Macan GTS</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:px-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={panamera} alt="porsche-Panamera 4 Platinum Edition" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>porsche-Panamera 4 Platinum Edition</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:pl-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={tycan} alt="porsche-Tycan 4S" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>porsche-Tycan 4S</h4>
                    </div>
                </div>
            </div>
            <div className='w-full h-[100px] md:h-[200px] grid justify-center pt-10'>
                <Link to='/work'>
                    <div className='w-auto h-auto self-center'>
                        <button className='bg-slate-700 text-white font-medium text-xl py-2 px-8'>Back to Work</button>
                    </div>
                </Link>
            </div>

        </div>

        <Footer />

    </div>
  )
}

export default Project2
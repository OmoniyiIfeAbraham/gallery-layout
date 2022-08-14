import React from 'react'

import {Link} from 'react-router-dom'

import G550 from './../assets/project1/2021-G550-SUV-AVP-DR.png'
import AMG from './../assets/project1/2022-AMG-GLE53-COUPE-AVP-DR.png'
import E350 from './../assets/project1/2022-E350-SEDAN-AVP-DR.png'
import EQS450 from './../assets/project1/2022-EQS450-SEDAN-AVP-DR.png'
import GLC300 from './../assets/project1/2022-GLC300-SUV-AVP-DR.png'
import MAYBACH from './../assets/project1/2022-MAYBACH-SEDAN-AVP-DR.png'

import Footer from './footer'

import './workStyle.css'

function Project1() {
  return (
    <div>

        <div className='w-full h-auto md:px-20'>

            <div className='w-full h-auto grid'>
                <div className='w-full h-[200px] grid justify-center'>
                    <h1 className='text-black font-bold text-6xl uppercase self-end'>project 01</h1>
                </div>
                <div className='w-full h-[250px] grid justify-center md:px-36'>
                    <p className='text-black font-normal text-xl self-center text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa optio incidunt expedita aspernatur a? Quasi provident earum unde, odio maiores aliquid, eligendi placeat voluptatem explicabo magni quae consectetur autem sit impedit, obcaecati dolor blanditiis at alias qui velit perferendis fuga vitae nulla? Nulla placeat voluptatem cum recusandae obcaecati ipsa sequi! Alias nemo neque vitae!</p>
                </div>
            </div>
            <div className='w-full h-auto grid md:grid-cols-3'>
                <div className='w-full/3 h-[500px] grid md:pr-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={G550} alt="Mercedes 2021-G550-SUV" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>Mercedes 2021-G550-SUV</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:px-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={AMG} alt="Mercedes 2022-AMG-GLE53-COUPE" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>Mercedes 2022-AMG-GLE53-COUPE</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:pl-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={E350} alt="Mercedes 2022-E350-SEDAN" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>Mercedes 2022-E350-SEDAN</h4>
                    </div>
                </div>
            </div>
            <div className='hidden md:block w-full h-[50px]'>

            </div>
            <div className='w-full h-auto grid md:grid-cols-3'>
                <div className='w-full/3 h-[500px] grid md:pr-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={EQS450} alt="Mercedes 2022-EQS450-SEDAN" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>Mercedes 2022-EQS450-SEDAN</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:px-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={GLC300} alt="Mercedes 2022-GLC300-SUV" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>Mercedes 2022-GLC300-SUV</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:pl-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={MAYBACH} alt="Mercedes 2022-MAYBACH-SEDAN" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>Mercedes 2022-MAYBACH-SEDAN</h4>
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

export default Project1
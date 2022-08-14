import React from 'react'

import {Link} from 'react-router-dom'

import ePace from './../assets/project3/2021-jaguar-e-pace.jpg'
import fPaceS from './../assets/project3/2021-jaguar-f-pace-s.jpg'
import fPaceSvr from './../assets/project3/2021-jaguar-f-pace-svr.jpg'
import fTypeR from './../assets/project3/2021-jaguar-f-type-r.jpg'
import fTypeConvertible from './../assets/project3/2022-jaguar-f-type-convertible.jpg'
import iPace from './../assets/project3/2022-jaguar-i-pace-eiger.jpg'

import Footer from './footer'

import './workStyle.css'

function Project3() {
  return (
    <div>

        <div className='w-full h-auto md:px-20'>

            <div className='w-full h-auto grid'>
                <div className='w-full h-[200px] grid justify-center'>
                    <h1 className='text-black font-bold text-6xl uppercase self-end'>project 03</h1>
                </div>
                <div className='w-full h-[250px] grid justify-center md:px-36'>
                    <p className='text-black font-normal text-xl self-center text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa optio incidunt expedita aspernatur a? Quasi provident earum unde, odio maiores aliquid, eligendi placeat voluptatem explicabo magni quae consectetur autem sit impedit, obcaecati dolor blanditiis at alias qui velit perferendis fuga vitae nulla? Nulla placeat voluptatem cum recusandae obcaecati ipsa sequi! Alias nemo neque vitae!</p>
                </div>
            </div>
            <div className='w-full h-auto grid md:grid-cols-3'>
                <div className='w-full/3 h-[500px] grid md:pr-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={ePace} alt="2021-jaguar-e-pace" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>2021-jaguar-e-pace</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:px-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={fPaceS} alt="2021-jaguar-f-pace-s" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>2021-jaguar-f-pace-s</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:pl-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={fPaceSvr} alt="2021-jaguar-f-pace-svr" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>2021-jaguar-f-pace-svr</h4>
                    </div>
                </div>
            </div>
            <div className='hidden md:block w-full h-[50px]'>

            </div>
            <div className='w-full h-auto grid md:grid-cols-3'>
                <div className='w-full/3 h-[500px] grid md:pr-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={fTypeR} alt="2021-jaguar-f-type-r" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>2021-jaguar-f-type-r</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:px-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={fTypeConvertible} alt="2022-jaguar-f-type-convertible" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>2022-jaguar-f-type-convertible</h4>
                    </div>
                </div>
                <div className='w-full/3 h-[500px] grid md:pl-3' id='first'>
                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full object-cover' src={iPace} alt="2022-jaguar-i-pace-eiger" />
                    </div>
                    <div className='w-full h-[100px] grid justify-center'>
                        <h4 className='text-black font-semibold text-2xl self-center text-center'>2022-jaguar-i-pace-eiger</h4>
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

export default Project3
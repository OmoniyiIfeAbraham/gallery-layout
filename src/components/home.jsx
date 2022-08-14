import React from 'react'

import {Link} from 'react-router-dom'

import mercedes1975 from './../assets/1957-mercedes-benz-190sl-roadster.jpg'
import mercedes1960 from './../assets/1960-mercedes-benz-190sl-roadster.jpg'
import mercedes1961 from './../assets/1961-mercedes-benz-190sl-roadster.jpg'
import jaguar1963 from './../assets/1963-jaguar-xke-series-i-fhc.jpg'
import jaguar1965 from './../assets/1965-jaguar-xke-series-1-fhc.jpg'
import mercedes1970 from './../assets/1970-mercedes-benz-280-class.jpg'
import jaguar1971 from './../assets/1971-jaguar-xke-series-ii-roadster-ots.jpg'
import mercedes1971 from './../assets/1971-mercedes-benz-280se-3-5-cabriolet.jpg'
import ferrari1981 from './../assets/1981-ferrari-308-gtbi.jpg'
import porsche1986 from './../assets/1986-porsche-911-carrera-2dr-targa-coupe (1).jpg'
import porsche1989 from './../assets/1989-porsche-911-carrera-2dr-coupe.jpg'
import porsche1998 from './../assets/1998-porsche-911-carrera-s-2dr-coupe.jpg'

import Footer from './footer'

import './homeStyle.css'

function Home() {
  return (
    <div>

      <div className='w-full h-56 flex justify-center pt-24'>
        <h1 className='self-center text-black font-semibold uppercase text-7xl'>i'm a title</h1>
      </div>

      <div className='w-full h-auto md:px-20'>
        <div className='w-full h-auto grid md:grid-cols-4'>
          <div className='w-full/4 h-[700px] grid md:pr-2'>
            <div id='test'>
              <img className='w-full h-[300px] object-cover' src={mercedes1975} alt="1957-mercedes-benz-190sl-roadster" />
              <h5 className='text-black text-2xl font-semibold'>1957-mercedes-benz-190sl-roadster</h5>
            </div>
            <div id='test'>
              <img className='w-full h-[350px] object-cover' src={mercedes1960} alt="1960-mercedes-benz-190sl-roadster" />
              <h5 className='text-black text-2xl font-semibold'>1960-mercedes-benz-190sl-roadster</h5>
            </div>
          </div>
          <div className='w-full/4 h-[700px] grid md:px-2'>
            <div id='test'>
              <img className='w-full h-[350px] object-cover' src={mercedes1961} alt="1961-mercedes-benz-190sl-roadster" />
              <h5 className='text-black text-2xl font-semibold'>1961-mercedes-benz-190sl-roadster</h5>
            </div>
            <div id='test'>
              <img className='w-full h-[300px] object-cover' src={jaguar1963} alt="1963-jaguar-xke-series-i-fhc" />
              <h5 className='text-black text-2xl font-semibold'>1963-jaguar-xke-series-i-fhc</h5>
            </div>
          </div>
          <div className='w-full/4 h-[700px] grid md:px-2'>
            <div id='test'>
              <img className='w-full h-[200px] object-cover' src={jaguar1965} alt="1965-jaguar-xke-series-1-fhc" />
              <h5 className='text-black text-2xl font-semibold'>1965-jaguar-xke-series-1-fhc</h5>
            </div>
            <div id='test'>
              <img className='w-full h-[450px] object-cover' src={mercedes1970} alt="1970-mercedes-benz-280-class" />
              <h5 className='text-black text-2xl font-semibold'>1970-mercedes-benz-280-class</h5>
            </div>
          </div>
          <div className='w-full/4 h-[700px] grid md:pl-2'>
            <div id='test'>
              <img className='w-full h-[450px] object-cover' src={jaguar1971} alt="1971-jaguar-xke-series-ii-roadster-ots" />
              <h5 className='text-black text-2xl font-semibold'>1971-jaguar-xke-series-ii-roadster-ots</h5>
            </div>
            <div id='test'>
              <img className='w-full h-[200px] object-cover' src={mercedes1971} alt="1971-mercedes-benz-280se-3-5-cabriolet" />
              <h5 className='text-black text-2xl font-semibold'>1971-mercedes-benz-280se-3-5-cabriolet</h5>
            </div>
          </div>
        </div>
        <div className='w-full h-auto grid'>
          <div className='w-full h-auto grid md:grid-cols-4'>
            <div className='w-full/4 h-[500px] md:pr-2' id='test'>
              <img className='w-full h-full object-cover' src={ferrari1981} alt="1981-ferrari-308-gtbi" />
              <h5 className='text-black text-2xl font-semibold'>1981-ferrari-308-gtbit</h5>
            </div>
            <div className='w-full/4 h-[250px] md:px-2' id='test'>
              <img className='w-full h-full object-cover' src={porsche1986} alt="1986-porsche-911-carrera-2dr-targa-coupe" />
              <h5 className='text-black text-2xl font-semibold'>1986-porsche-911-carrera-2dr-targa-coupe</h5>
            </div>
            <div className='w-full/4 h-[250px] md:px-2' id='test'>
              <img className='w-full h-full object-cover' src={porsche1989} alt="1989-porsche-911-carrera-2dr-coupe" />
              <h5 className='text-black text-2xl font-semibold'>1989-porsche-911-carrera-2dr-coupe</h5>
            </div>
            <div className='w-full/4 h-[500px] md:px-2' id='test'>
              <img className='w-full h-full object-cover' src={porsche1998} alt="1998-porsche-911-carrera-s-2dr-coupe" />
              <h5 className='text-black text-2xl font-semibold'>1998-porsche-911-carrera-s-2dr-coupe</h5>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-auto grid'>
        <div className='w-full h-[100px] px-5 md:px-0 md:grid md:justify-center'>
          <h3 className='w-full self-end text-black font-semibold text-3xl text-center'>I'm a Subtitle. Click Here To Edit Me</h3>
        </div>
        <div className='w-full h-[200px] grid justify-center md:px-20'>
          <p className='w-full self-center text-black text-xl text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi natus quidem eligendi cum accusamus excepturi nostrum ducimus quod, quia ad harum cumque autem recusandae tempora exercitationem, magnam obcaecati consectetur, minus possimus pariatur sed?</p>
        </div>
        <div className='w-full h-[200px] grid justify-center'>
          <Link to='/contact'><button className='text-white font-xl px-16 py-4 bg-slate-700 self-center md:self-start'>Contact</button></Link>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home
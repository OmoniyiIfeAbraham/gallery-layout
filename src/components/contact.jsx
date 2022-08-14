import React from 'react'

import {FaFacebookF} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'
import {IoLogoInstagram} from 'react-icons/io5'

import Footer from './footer'

function Contact() {
  return (
    <div>

      <div>
        <div className='w-full h-auto grid pt-36 pb-20 justify-center'>
          <h1 className='text-black font-bold uppercase text-6xl self-end'>contact</h1>
        </div>
        <div className='w-full h-auto grid md:px-10'>


          <div className='w-full h-auto bg-lime-600/50 py-20 px-5 md:px-20 grid md:grid-cols-2'>

            <div className='w-full md:w-[60%] h-full grid'>
              <div className='w-full h-[140px] grid px-10'>
                <h5 className='text-black font-medium text-2xl text-center md:text-start'>Address</h5>
                <p className='text-black font-normal text-xl text-center md:text-start'>500 Terry Francois St. SF,<br /> CA 94158</p>
              </div>
              <div className='w-full h-[140px] grid px-10'>
                <h5 className='text-black font-medium text-2xl text-center md:text-start'>Email</h5>
                <p className='text-black font-normal text-xl text-center md:text-start'>info@mysite.com</p>
              </div>
              <div className='w-full h-[140px] grid px-10'>
                <h5 className='text-black font-medium text-2xl text-center md:text-start'>Tel</h5>
                <p className='text-black font-normal text-xl text-center md:text-start'>123-456-7890</p>
              </div>
              <div className='w-full h-[140px] px-20 md:px-10 grid grid-cols-3 justify-center'>
                <FaFacebookF className='text-2xl self-center' />
                <GrTwitter className='text-2xl self-center' />
                <IoLogoInstagram className='text-2xl self-center' />
              </div>
            </div>

            <div className='w-full md:w-60% h-full px-5 md:px-0 grid'>
              <div className='w-full h-[140px] grid justify-center md:justify-start'>
                <h5 className='text-black font-medium text-2xl self-center md:self-start text-center md:text-start'>You can also contact us by using this form:</h5>
              </div>
              <div className='w-full h-auto grid md:grid-cols-2'>
                <div className='w-full/2 h-[140px] md:pr-5'>
                  <p className='text-black font-thin text-xl'>First Name*</p>
                  <input className='outline outline-1 bg-transparent py-4 w-full' type="text" name="" id="" />
                </div>
                <div className='w-full/2 h-[140px] md:pl-5'>
                  <p className='text-black font-thin text-xl'>Last Name*</p>
                  <input className='outline outline-1 bg-transparent py-4 w-full' type="text" name="" id="" />
                </div>
              </div>
              <div className='w-full h-auto grid md:grid-cols-2'>
                <div className='w-full/2 h-[140px] md:pr-5'>
                  <p className='text-black font-thin text-xl'>Email*</p>
                  <input className='outline outline-1 bg-transparent py-4 w-full' type="email" name="" id="" />
                </div>
                <div className='w-full/2 h-[140px] md:pl-5'>
                  <p className='text-black font-thin text-xl'>Subject*</p>
                  <input className='outline outline-1 bg-transparent py-4 w-full' type="text" name="" id="" />
                </div>
              </div>
              <div className='w-full h-auto grid'>
                <div className='w-full h-[140px]'>
                  <p className='text-black font-thin text-xl'>Leave us a message...*</p>
                  <input className='outline outline-1 bg-transparent py-8 w-full' type="text" name="" id="" />
                </div>
              </div>
              <div className='w-full h-full/4 grid py-2 px-20 md:py-6 md:pr-80'>
                <button className='px-5 bg-slate-800 text-white font-normal text-xl'>Submit</button>
              </div>
            </div>

          </div>

          <div className='w-full h-auto bg-lime-600/50 px-5 md:px-20 grid pb-10 mb-5'>
            <div className='w-full h-auto outline outline-1 grid md:px-20'>
              <div className='w-full h-[150px] grid justify-center'>
                <h1 className='text-black font-bold text-4xl uppercase self-end text-center'>join the mailing list</h1>
              </div>
              <div className='w-full h-[200px] pb-20 pt-5 px-10 md:px-0'>
                <p className='text-black font-thin text-xl'>Enter your email here*</p>
                <div className='w-full h-full grid md:grid-cols-2'>
                  <input className='outline outline-1 bg-transparent py-1 w-full md:px-[335px]' type="text" name="" id="" />
                  <button className='bg-slate-800 text-white font-semibold w-full md:w-[200px] md:ml-[235px] mt-5 md:mt-0'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Contact
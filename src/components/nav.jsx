import React, {useState} from 'react'

import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {FaFacebookF} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'
import {IoLogoInstagram} from 'react-icons/io5'

import {Link} from 'react-router-dom'

function Nav() {

    const [lin, setNav] = useState(false)
    const handleClick = () => setNav(!lin)

    const handleClose = () => setNav(!lin)

  return (
    <div>
        <nav className='flex items-center w-full h-[80px] z-10 bg-white fixed px-8' id='navbar'>
            {/* <div className='flex justify-between'> */}
                <Link to='/'>
                    <div className='w-[10%] flex'>
                        <h3 className='font-bold text-black text-3xl'>Site Name</h3>
                    </div>
                </Link>
                <div className='w-[90%] hidden md:flex justify-end'>
                    <ul className='hidden md:flex items-center px-8'>
                        <Link to='/'><li className='px-4 text-black text-2xl'>Home</li></Link>
                        <Link to='/about'><li className='px-4 text-black text-2xl'>About</li></Link>
                        <Link to='/work'><li className='px-4 text-black text-2xl'>Work</li></Link>
                        <Link to='/contact'><li className='px-4 text-black text-2xl'>Contact</li></Link>
                        <Link to={{ pathname: "https://www.facebook.com" }} target="_blank"><FaFacebookF className='text-2xl mr-5 ' /></Link>
                        <Link to={{ pathname: "https://www.twitter.com" }} target="_blank"><GrTwitter className='text-2xl mr-5' /></Link>
                        <Link to={{ pathname: "https://www.instagram.com" }} target="_blank"><IoLogoInstagram className='text-2xl mr-5 ' /></Link>
                    </ul>
                    {/* <div className='hidden md:flex pr-4'>
                        <button className='uppercase justify-center'>call now</button>
                    </div> */}
                </div>
                <div className='md:hidden w-[90%] flex justify-end' onClick={handleClick}>
                    {!lin ? <MenuIcon className='w-10 z-20 text-black' /> : <XIcon className='w-10 z-20 text-black' />}
                </div>
            {/* </div> */}
            
            {/* <div className='bg-black'> */}
                <ul className={!lin ? 'hidden' : 'flex flex-col items-center w-full h-screen mb-[-33vh] ml-[-35px] justify-center absolute bg-white z-15 mt-96 px-[8px]'}>
                    <Link to='/'><li onClick={handleClose} className='px-4 text-black'>Home</li></Link>
                    <Link to='/about'><li onClick={handleClose} className='px-4 text-black'>About</li></Link>
                    <Link to='/work'><li onClick={handleClose} className='px-4 text-black'>Work</li></Link>
                    <Link to='/contact'><li onClick={handleClose} className='px-4 text-black'>Contact</li></Link>
                    <div className='w-full h-auto grid grid-cols-3 px-28'>
                        <FaFacebookF className='text-2xl' />
                        <GrTwitter className='text-2xl' />
                        <IoLogoInstagram className='text-2xl' />
                    </div>
                </ul>
            {/* </div> */}
        </nav>
    </div>
  )
}

export default Nav
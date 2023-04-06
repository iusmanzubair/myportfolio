import React from 'react'
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className='text-white fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className='flex justify-around container w-full h-[96px] items-center bg-black/20 mx-auto rounded-full backdrop-blur-2xl max-w-[460px]'>
               <Link to='home' activeClass = "active" smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
                <BiHomeAlt/>
               </Link> 
               <Link to='about' activeClass = "active" smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
                <BiUser/>
               </Link> 
               <Link to='services' activeClass = "active" smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
                <BsClipboardData/>
               </Link> 
               <Link to='work' activeClass = "active" smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
                <BsBriefcase/>
               </Link> 
               <Link to='contact' activeClass = "active" smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
                <BsChatSquare/>
               </Link> 
        </div>
    </nav>
  )
}

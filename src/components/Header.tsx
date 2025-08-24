'use client'

import {useState, } from 'react'
import './header.css'
import Link from 'next/link'
import Nav from './Nav'

const Header = () => {
  return (
    <header id="header" className='header d-flex align-items-center fixed-top'>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">
        <Link href="/" className="logo d-flex align-items-center" ><h1>DigitalNews</h1></Link>
        <Nav/>
      </div>
      <div className="position-relative">
        
      </div>
    </header>
  )
}

export default Header
'use client'

import { useState, } from 'react'
import './header.css'
import Link from 'next/link'
import Nav from './Nav'
import Sci from './Sci'
import SearchForm from './SearchForm'

const Header = () => {

  const [open, setOpen] = useState(false)

  const handleFormOpen = (e: Event | any) =>{
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <header id="header" className='header d-flex align-items-center fixed-top'>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">
        <Link href="/" className="logo d-flex align-items-center" ><h1>DigitalNews</h1></Link>
        
        <Nav />

        <div className="position-relative">
          <Sci />
          <a className='mx-2 js-search-open' onClick={handleFormOpen}>
            <span className='bi-search'></span>
          </a>
          <SearchForm active={open} formOpen={handleFormOpen}/>
        </div>

      </div>
    </header>
  )
}

export default Header
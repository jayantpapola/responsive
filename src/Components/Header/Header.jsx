import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../NavBar/Navbar'
import { close } from '../../Redux/Reducers/NavbarReducer'
import './Header.css'

const Header = () => {

  const data = useSelector(state=>state.navbar.value)
  const [navBar, setNavbar] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setNavbar(data)
  }, [data])
    

  return (
    <div className='Header'>

        <div className="Header__logo"></div>

        <div className="Header__Menu">
          <span 
          onClick={()=>dispatch(close('open'))}
          >Menu</span>
          <Navbar open={navBar}/>
        </div>
        <div className="Header__navbar">
            <div className="Navbar__navItem"></div>
            <div className="Navbar__navItem"></div>
            <div className="Navbar__navItem"></div>
            <div className="Navbar__navItem"></div>
            <div className="Navbar__navItem"></div>
        </div>

    </div>
  )
}

export default Header
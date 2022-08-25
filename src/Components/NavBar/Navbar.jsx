import React from 'react'
import { useDispatch } from 'react-redux'
import { close } from '../../Redux/Reducers/NavbarReducer'
import './Navbar.css'

const Navbar = ({open}) => {
    const dispatch = useDispatch()
  return (
    <div className={`Navbar ${open}`}>
        <div className="Navbar__closeBtn"
        onClick={()=>dispatch(close(''))}
        >X</div>
        <div className="Navbar__Link"></div>
        <div className="Navbar__Link"></div>
        <div className="Navbar__Link"></div>
        <div className="Navbar__Link"></div>
        <div className="Navbar__Link"></div>
    </div>
  )
}

export default Navbar
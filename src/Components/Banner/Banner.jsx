import React from 'react'
import './Banner.css'
import { motion } from 'framer-motion'

const Banner = () => {

  return (
    <div className='Banner'>

        <div className="Banner__heading">
            Banner Heading
        </div>

        <motion.div 
        className="Banner__Img"
        animate={{width:'100%'}}
        >

        </motion.div>

        <motion.div 
          animate={{y:0,opacity:1,}}
          className="Banner__description">
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Magnam reiciendis similique perspiciatis modi.
        </motion.div>

        <motion.div 
          animate={{y:0,opacity:1,}}
          className="Banner_buttons">  
          <button>
            Contact Us
          </button>
        </motion.div>

    </div>
  )
}

export default Banner
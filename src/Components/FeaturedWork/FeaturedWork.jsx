import React, { useEffect, useState } from 'react'
import './FeaturedWork.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeaturedWork = () => {

    const [feature, inView] = useInView({
        threshold:.5,
    })
    const [animation, setAnimation] = useState({})

    useEffect(() => {
        console.log(inView);
      if(inView){
        setAnimation({
            x:0,
            y:0,
            opacity:1,
            scale:1
        })
      }
    }, [inView])
    

  return (
    <div className='FeaturedWork'  ref={feature}>
        <div className="FeaturedWork__heading">
            Featured Work
        </div>
        <div className="FeaturedWork__container">
            <div className="FeaturedWork__container__row">
                <div className="FeaturedWork__box left">
                    {/* Top Left Box */}
                    <div className="FeaturedWork__container__row">
                        <motion.div 
                            animate={animation}
                            className="FeaturedWork__box  innerLeft">
                        </motion.div>
                        <motion.div 
                            animate={animation}
                            className="FeaturedWork__box innerRight ">
                        </motion.div>
                    </div>
                    <div className="FeaturedWork__container__row">
                        <motion.div
                            animate={animation} 
                            className="FeaturedWork__box bottom innerBottom">
                        </motion.div>
                    </div>
                    {/* Top Left Box Close */}
                </div>
                <div className="FeaturedWork__box right"></div>
            </div>
            <div className="FeaturedWork__container__row">
                <div className="FeaturedWork__box bottom"></div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedWork
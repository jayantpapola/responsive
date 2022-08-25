import React from 'react'
import './FeaturedWork.css'

const FeaturedWork = () => {
  return (
    <div className='FeaturedWork'>
        <div className="FeaturedWork__heading">
            Featured Work
        </div>
        <div className="FeaturedWork__container">
            <div className="FeaturedWork__container__row">
                <div className="FeaturedWork__box left">
                    {/* Inner Left Box */}
                    <div className="FeaturedWork__container__row">
                        <div className="FeaturedWork__box  innerLeft">

                        </div>
                        <div className="FeaturedWork__box innerRight "></div>
                    </div>
                    <div className="FeaturedWork__container__row">
                        <div className="FeaturedWork__box bottom"></div>
                    </div>
                    {/* Inner Left Box Close */}
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
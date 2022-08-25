import React, { useState }  from 'react'
import './Service.css'

const Service = () => {

  const [open1, setOpen1] = useState('')
  const [open2, setOpen2] = useState('')
  const [open3, setOpen3] = useState('')
  const [move1, setMove1] = useState('')
  const [move2, setMove2] = useState('')
  const [move3, setMove3] = useState('')

  const ServiceBoxFunc1 = () =>{
    if(open1 === ''){
      setOpen1('open')
      setOpen2('')
      setOpen3('')
      setMove1('')
      setMove2('')
      setMove3('')
    }
    else{
      setOpen1('')
    }
  }
  const ServiceBoxFunc2 = () =>{
    if(open2 === ''){
      setOpen2('open')
      setOpen3('')
      setOpen1('')
      setMove1('move')
      setMove3('move')
    }
    else{
      setOpen2('')
      setMove1('')
      setMove3('')
    }
  }
  const ServiceBoxFunc3 = () =>{
    if(open3 === ''){
      setOpen3('open')
      setOpen1('')
      setOpen2('')
      setMove1('')
      setMove2('move')
    }
    else{
      setOpen3('')
      setMove2('')
    }
  }




  return (
    <div className='Service'>
        <div className={"Service__box box1"}>
            Service <br /> We <br /> Provide
        </div>
        <div className={`Service__box box2 ${open1} ${move1}`}
        onClick={ServiceBoxFunc1}
        >
          <div className={`Service__box__img ${open1}`}></div>
          <div className={`Service__box__text ${open1}`}>
          </div>

        </div>

        <div className={`Service__box box3 ${open2} ${move2}`}
            onClick={ServiceBoxFunc2}
        >
          <div className={`Service__box__img ${open2}`}></div>
          <div className={`Service__box__text ${open2}`}></div>
        </div>

        <div className={`Service__box box4 ${open3} ${move3}`}
            onClick={ServiceBoxFunc3}
        >
          <div className={`Service__box__img ${open3}`}></div>
          <div className={`Service__box__text ${open3}`}></div>
        </div>
    </div>
  )
}

export default Service
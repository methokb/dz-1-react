import React from 'react'
import start from "../Assets/img/2563956 1.svg"
import center from "../Assets/img/1528 1.svg"
import imgLeft from '../Assets/img/Rectangle 48.svg'

const Center = () => {
    return (
        <div className='center'>
        <div className='container'>

        <div className='center_block'>

            <div className="imgCenter">
                <img className='start' src={start} alt="" />
                <img className='end' src={center} alt="" />
                <img className='from' src={imgLeft} alt="" />
            </div>
             <div className='center'>
                
            </div> 
            <div className="modal">
                <h1 className='text'>High-Quality<br />
                    Furniture Just<br />
                    For You</h1>
                <p className='text_p1'>Our furniture is made from selected<br /> and best quality materials that are<br /> suitable for your dream home</p>
                <button className='btn'>Shop Now</button>
            </div>
            <div className='p_block01'>
                <h1 className='text_h1'>Bohauss</h1>
                <p className='text_h'>Luxury big sofa 2-seat</p>
                <h1 className='text_h1'>Rp 17.000.000</h1>

            </div>
        </div>
        </div>
         </div>
    )
}

export default Center;
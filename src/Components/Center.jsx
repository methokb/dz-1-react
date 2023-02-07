import React from 'react'
import start from "../Assets/img/2563956 1.svg"
import center from "../Assets/img/1528 1.svg"
import imgLeft from '../Assets/img/Rectangle 48.svg'

const Center = () => {
    return (
        <div className='center_block'>
            <img className='start' src={start} alt="" />
            <img className='end' src={center} alt="" />
            <img className='from' src={imgLeft} alt="" />
            <div className='center'>
            </div>
            <h1 className='text'>High-Quality<br />
                Furniture Just<br />
                For You</h1>
            <p className='text_p1'>Our furniture is made from selected<br /> and best quality materials that are<br /> suitable for your dream home</p>
            <button className='btn'>Shop Now</button>
            <p className='p_block01'></p>
            <p className='text_h1'>Bohauss<br/>Luxury big sofa 2-seat<br/>Rp 17.000.000</p>
        </div>
    )
}

export default Center
import React from 'react'
import svgSearch from '../Assets/img/Search.svg'

const SerachBox = () => {
    return (
        <div className='SearchBox' style={{
            marginLeft: "55px"
        }}>
            <input type="text" placeholder='Search for minimalist chair'  />
            <img src={svgSearch} alt="search" style={{
                transform: "translateX(-460px) translateY(4px)"
            }} />
        </div>
    )
}

export default SerachBox
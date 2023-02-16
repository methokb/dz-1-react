import React from 'react'
import Feck from "../Assets/img/Feature.svg"
import Im1 from "../Assets/img/image 1 (3).svg"
import Im2 from "../Assets/img/image 2 (1).svg"
import Im3 from "../Assets/img/image 3 (1).svg"
import Im4 from "../Assets/img/image 4 (1).svg"
import Im5 from "../Assets/img/image 9 (1).svg"
import Im6 from "../Assets/img/image 6 (1).svg"
import Im7 from "../Assets/img/image 7 (1).svg"
import Im8 from "../Assets/img/image 8 (1).svg"
const Flex = () => {

  return (
    <div className='container'>
      <div className='components2'>
        <img className='feck' src={Feck} alt="" />
        <h1 className='h1_block2'>Our Products</h1>
        <div className="kilbocls">
          <div className="kilbock">
            <img className='img_block2' src={Im1} alt="" />
            <p className='background'></p>
            <div className="compon01">
              <h1>Syltherine</h1>
              <p>Stylish cafe chair</p>
              <h2 className='p_01'>Rp 2.500.000 <p className='p_0'>Rp 3.500.000</p></h2>
            </div>
          </div>
          <div className="kilbock">
            <img className='img_block2' src={Im2} alt="" />
            <p className='background'></p>
            <div className="compon01">
              <h1>Leviosa</h1>
              <p>Stylish cafe chair</p>
              <h2 className='p_01'>Rp 2.500.000 <p className='p_0'>Rp 3.500.000</p></h2>
            </div>
          </div>
          <div className="kilbock">
            <img className='img_block2' src={Im3} alt="" />
            <p className='background'></p>
            <div className="compon01">
              <h1>Lolito</h1>
              <p>Luxury big sofa</p>
              <h2 className='p_01'>Rp 7.000.000 <p className='p_0'>Rp 14.000.000</p></h2>
            </div>
          </div>
          <div className="kilbock">
            <img className='img_block2' src={Im4} alt="" />
            <p className='background'></p>
            <div className="compon01">
              <h1>Respira</h1>
              <p>Minimalist fan</p>
              <h2 className='p_01'>Rp 500.000 <p className='p_0'></p></h2>
            </div>
          </div>
          <div className="kilbock">
            <img className='img_block2' src={Im5} alt="" />
            <p className='background'></p>
            <div className="compon01">
              <h1>Grifo</h1>
              <p>Night lamp</p>
              <h2 className='p_01'>Rp 1.500.000 <p className='p_0'></p></h2>
            </div>
          </div>
          <div className="kilbock">
            <img className='img_block2' src={Im6} alt="" />
            <p className='background'></p>
            <div className="compon01">
              <h1>Muggo</h1>
              <p>Small mug</p>
              <h2 className='p_01'>Rp 150.000 <p className='p_0'></p></h2>
            </div>
          </div>
          <div className="kilbock">
            <img className='img_block2' src={Im7} alt="" />
            <p className='background'></p>
            <div className="compon01">
              <h1>Pingky</h1>
              <p>Cute bed set</p>
              <h2 className='p_01'>Rp 7.000.000<p className='p_0'>Rp 14.000.000</p></h2>
            </div>
          </div>
          <div className="kilbock">
            <img className='img_block2' src={Im8} alt="" />
            <p className='background'></p>
            <div className="compon01">
              <h1>Potty</h1>
              <p>Minimalist flower pot</p>
              <h2 className='p_01'>Rp 500.000 <p className='p_0'></p></h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Flex
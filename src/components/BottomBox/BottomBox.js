import React from 'react'
import './BottomBox.css'
import img1 from '../../assets/image 1.png'
import img2 from '../../assets/image 2.png'
import img3 from '../../assets/image 3.png'

const BottomBox = () => {
    return(
        <div className='bb_main'>
            <div className='bb_left'>
                <div className='bb_head1'>Why should you have a cat?</div>
                <div className='bb_head2'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</div>
                <div className='bb_head3'>Read More</div>
            </div>
            <div className='bb_right'>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <img  className='bb_image1'  src={img2} />
                    <img  className='bb_image2' src={img1} />
                </div>
                <div><img className='bb_image3'   src={img3} /></div>
            </div>
        </div>
    )
}

export default BottomBox
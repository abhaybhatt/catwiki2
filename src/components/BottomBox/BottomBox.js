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
                    <img style={{width: "250px", height: "160px", paddingBottom: '20px', paddingRight: '20px'}} src={img2} />
                    <img style={{width: "195px", height: "293px"}} src={img1} />
                </div>
                <div><img style={{width: "238px", height: "385px"}}  src={img3} /></div>
            </div>
        </div>
    )
}

export default BottomBox
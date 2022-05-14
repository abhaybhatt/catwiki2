import React from 'react'
import './Cat.css'

const Cat = ({ cat }) => {
    console.log('cat', cat)

    const getTabs = (attr) => {
        console.log(cat[attr])
        const pos = cat[attr]
        const neg = 5 - pos
        let arr1 = [0,0,0,0,0]
        arr1.fill(1,0,pos)
        console.log('arr1', arr1)
        return(
            arr1.map((i, key) => (
                <div className={i===1 ? 'positive' : 'negative'} />
            ))
        )
   
    }

    return(
        <div className='cat_main'>
            <div className='cat_left'>
                <img className='cat_image' src={cat.image.url} />
            </div>
            <div className='cat_right'>
                <div className='cat_head1'>{cat.name}</div>
                <div className='cat_head2'>{cat.description}</div>
                <div style={{display: 'flex'}}>
                    <div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Temperament:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Origin:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Life Span:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Adabtiblity:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Affection Level:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Child Friendly:</div>
                        <div className='cat_head3' style={{fontWeight: '700',  marginBottom: '32px', marginRight: '10px'}}>Grooming:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Intelligence:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Health Issues:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Social Needs:</div>
                        <div className='cat_head3' style={{fontWeight: '700', marginBottom: '32px', marginRight: '10px'}}>Stranger Friendly:</div>
                    </div>
                    <div>
                        <div className='cat_head3' style={{marginBottom: '32px'}}>{cat.temperament}</div>
                        <div className='cat_head3' style={{marginBottom: '32px'}}>{cat.origin}</div>
                        <div className='cat_head3' style={{marginBottom: '32px'}}>{cat.life_span}</div>
                        <div style={{display: 'flex', marginBottom: '40px'}}>{getTabs('adaptability')}</div>
                        <div style={{display: 'flex', marginBottom: '40px'}}>{getTabs('affection_level')}</div>
                        <div style={{display: 'flex', marginBottom: '40px'}}>{getTabs('child_friendly')}</div>
                        <div style={{display: 'flex', marginBottom: '40px'}}>{getTabs('grooming')}</div>
                        <div style={{display: 'flex', marginBottom: '40px'}}>{getTabs('intelligence')}</div>
                        <div style={{display: 'flex', marginBottom: '40px'}}>{getTabs('health_issues')}</div>
                        <div style={{display: 'flex', marginBottom: '40px'}}>{getTabs('social_needs')}</div>
                        <div style={{display: 'flex', marginBottom: '40px'}}>{getTabs('stranger_friendly')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cat
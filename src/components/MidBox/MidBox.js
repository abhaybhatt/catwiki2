import React,{ useEffect, useState } from 'react'
import './MidBox.css'
import {
    Link
  } from "react-router-dom";

const MidBox = ({setBreedSelected}) => {
    const[data, setData] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'x-api-key': '2ee1cb5f-c040-4a0c-ba22-689063c69776' },
        };
        fetch(`https://api.thecatapi.com/v1/breeds?limit=6&pahe=1`, requestOptions)
        .then(response => response.json())
        .then(d =>{
            setData(d)
            // console.log('data', data)
            // console.log('data', data)
        });
    },[])

    const getImages = () => {
        // console.log('data', data)
        return(
            data.map((d, key) => (
                <Link to='/cat'  onClick={setBreedSelected(d)} style={{marginRight: '5%', cursor: 'pointer'}}>
                    <img  className='mb_catImage' src={d.image.url} />
                    <div className='mb_catname'>{d.name}</div>
                </Link>
            ))
        )
    }

    return(
        <div className='mb_main'>
            <div className='mb_container1'>
                <div  className='mb_head1'>Most Searched Breeds</div>
                <div className='underline' />
            </div>
            <div className='mb_head2'>66+ Breeds For you to discover</div>
            <div className='mb_head3'>See More</div>
            { data && data.length>0 && (
                <div className='bm_images'>
                    {getImages()}
                </div>
            )}
        </div>
    )
}

export default MidBox
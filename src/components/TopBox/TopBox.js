import React, { useState } from 'react'
import './TopBox.css'
import SearchIcon from '@mui/icons-material/Search';
import {
    Link
  } from "react-router-dom";

const TopBox = ( {breeds, setBreedSelected} ) => {
    const searchInput = React.useRef(null)
    const [focused, setFocused] = React.useState(false)
    const [search, setSearched] = React.useState('')
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    return(
        <div className='tb_main'>
            <div className='tb_main1'>
                <div className='tb_head1'>CatWiki</div>
                <div className='tb_head2'>Get to know more about your cat breed</div>
                <div className='tb_inputDiv'>
                    <input onChange={e => setSearched(e.target.value)} value={search} onFocus={onFocus} className='tb_input' type='text' placeholder='Enter your breed' />
                    <SearchIcon />
                    {focused && <div className='tb_options'>
                    {
                        breeds.filter((b) => {
                            if (search === "") {
                              return b;
                            } else if (
                              b.name.toLowerCase().includes(search.toLowerCase())
                            ) {
                              return b;
                            }
                          }).map((b, key) => {
                            return(
                                <Link to='/cat' onClick={() =>{ 
                                    console.log('b',b)
                                    setBreedSelected(b)
                                    onBlur()
                                    }
                                    } key={key} className='tb_breed'>
                                    {b.name}
                                </Link>
                            )
                        })
                    }
                    {/* {breeds && breeds.length > 0 && breeds.map((b, key) => {
                        return(
                            <div key={key} className='tb_breed'>
                                {b.name}
                            </div>
                        )
                    })} */}
                </div>
            }
                </div>
            </div>
        </div>
    )
}

export default TopBox;

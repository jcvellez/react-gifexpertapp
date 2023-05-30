import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
//import { getGifs } from './helpers/getGifs';
import { useFetchGIfs } from './hooks/useFetchGIfs'

const GifGrid = ({ category }) => {

    // let [images, setimages] = useState([])
    const { data:images , loading } = useFetchGIfs(); // data:images
    console.log(loading);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn' >{category}</h3>
            {/* { loading ? 'Cargando...' : 'Data Cargada' } */}
            { loading && <p className='animate__animated animate__flash' > Loading </p> }
            <div className='card-grid'>
                <ol>
                    {
                        images.map((item) => (
                            <GifGridItem key={item.id} {...item} />
                            //<GifGridItem key={ item.id } item={ item } />
                        ))
                    }

                    {/* {
                        images.map((item) => <li key={item.id}>{item.name}</li>)
                    } */}
                </ol>
            </div>
        </>
    )
}


GifGrid.propTypes = {

}

export default GifGrid

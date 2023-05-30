import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['OPne Punch']);

    // const handleAdd = ()=>{
    //     //setCategories( ['Hunter' , ...categories] );
    //     setCategories( (cats)=> [...categories , 'Hunter' ]  );    
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => (                        
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export {
    GifExpertApp
}

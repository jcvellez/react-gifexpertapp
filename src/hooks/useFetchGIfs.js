import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGIfs = () => { //est es un custom hook

    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    )

    useEffect(() => {
        getGifs().then((imgs) => {
            
            setTimeout( () => {
                console.log( imgs );
                setState(
                    {
                        data: imgs,
                        loading: false
                    }
                );
            } , 2000 );

        });

        //getGifs().then( (imgs)=>setimages(imgs) );
    }, []); //[] los corchetes son para indicar q no tiene ninguna dependencia por eso no te renderiza todo de nuevo.

    // setTimeout(() => {
    //     setState( {
    //         data: [1,2,3,4,5],
    //         loading: false
    //     } )
    // }, 2000);
    return state;
}

import React, {Fragment, useEffect, useState} from 'react';
import {ReactComponent as Buttondischard} from "../icons/trash.svg";
import {dischardPedidoCarta} from '../redux/actions';

const Dischardbutton = ({dataproduct}) => {
    const dis = {
        svg: {
            width: '2em',
            height: '2em',
            fill: '#000',
            margin: '.3em',
            background: '#ff000045'
        }
    }

    const [product, getProduct] = useState({})

    useEffect(() => {
        getProduct(dataproduct)
        // getCategory(wordkey)
    }, [dataproduct])

    return (
        <Fragment>
            <Buttondischard
                onClick={() => dischardPedidoCarta(product)}
                style={dis.svg}/>
        </Fragment>
    )
}
export default Dischardbutton;